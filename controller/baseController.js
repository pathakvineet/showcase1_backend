const Sport = require('../model/sport');
const axios = require('axios');
var convert = require('xml-js');
let Parser = require('rss-parser');
let parser = new Parser();

async function getLoosingTeams(req, res) {
    let { team } = req.params;
    let Team = capitalizeFirstLetter(team);

    function capitalizeFirstLetter(string) {
        let a = string.trim(); //remove spaces
        a = a.toLowerCase(); // switch all characters to lowercase
        a = a.charAt(0).toUpperCase() + a.slice(1); // switch first character to upper case
        return a;
    }

    Sport.find({ $or: [{ 'homeTeam': Team }, { 'awayTeam': Team }] })
        .exec(function (err, list) {
            if (err) return console.log(err);

            let a = [];
            list.forEach(match => {
                if ((match.winner == 'A' && match.awayTeam == Team) || (match.winner == 'H' && match.homeTeam == Team)) {
                    a.push(match)
                }
            })

            res.send({ list: a, won: a.length, total: list.length, searchTeam: Team });
        })
}

async function getClothsData(req, res) {
    axios.get('https://therapy-box.co.uk/hackathon/clothing-api.php', {
        params: { username: 'swapnil' }
    }, {
        headers: {
            'Access-Control-Allow-Origin': 'https://therapy-box.co.uk',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    })
        .then(response => {
            let data = response.data.payload;
            let jumper = 0;
            let hoodie = 0;
            let jacket = 0;
            let sweater = 0;
            let raincoat = 0;
            let blazer = 0;
            let rectifiedValue = {}
            data.forEach(value => {
                switch (value.clothe) {
                    case "jumper":
                        jumper++;
                        break;
                    case "hoodie":
                        hoodie++;
                        break;
                    case "jacket":
                        jacket++;
                        break;
                    case "sweater":
                        sweater++;
                        break;
                    case "raincoat":
                        raincoat++;
                        break;
                    case "blazer":
                        blazer++;
                    default:
                        break;
                }

                let total = jumper + hoodie + jacket + sweater + raincoat + blazer;
                let clothsArray = ['jumper', 'hoodie', 'jacket', 'sweater', 'raincoat', 'blazer'];
                let clothsCount = [jumper, hoodie, jacket, sweater, raincoat, blazer];


                clothsCount.forEach((num, index) => {
                    let a = num / total * 100;
                    return clothsCount[index] = parseFloat(a.toFixed(2));
                });

                rectifiedValue = {
                    jumper: jumper,
                    hoodie: hoodie,
                    jacket: jacket,
                    sweater: sweater,
                    raincoat: raincoat,
                    blazer: blazer,
                    total: total,
                    percentageCount: clothsCount,
                    clothsList: ['jumper', 'hoodie', 'jacket', 'sweater', 'raincoat', 'blazer']
                }
            })
            // console.log(rectifiedValue);
            res.send({
                clothsData: rectifiedValue
            });

        })
        .catch(err => {
            console.log(err);
        })
}









async function getWeatherReport(req, res) {



    if (!req.query.lat) return res.status(400).json({status:400, message:'location not provided'});
    if (!req.query.lon) return res.status(400).json({status:400, message:'location not provided'});

    let weatherData = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
            lat: req.query.lat,
            lon: req.query.lon,
            appid: 'd0a10211ea3d36b0a6423a104782130e'
        }
    })



    let responsedata = {
        place: weatherData.data.name,
        temp: (weatherData.data.main.temp - 273.15).toFixed(2),
        iconCode: weatherData.data.weather[0].icon
    }

    res.send(responsedata);

}



async function getLatestNews(req, res) {
    
    let feed = await parser.parseURL('http://feeds.bbci.co.uk/news/rss.xml');
    let primaryfeed = feed.items[0];
    
    res.send({
        title: primaryfeed.title,
        link: primaryfeed.link
    });
}





module.exports =
{
    getLoosingTeams,
    getClothsData,
    getWeatherReport,
    getLatestNews
};