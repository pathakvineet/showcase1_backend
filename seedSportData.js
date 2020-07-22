var Sport = require('./model/sport');
var mongoXlsx = require('mongo-xlsx');
var model = null;

function seedSportToDB() {

    Sport.remove({}, function (err) {
        if (err) return console.log(err);

        true

        mongoXlsx.xlsx2MongoData("./data.xlsx", model, function (err, mongoData) {
            //  console.log('Mongo data:', mongoData); 
            mongoData.forEach(match => {
                let sport = new Sport({
                    dom: match.date,
                    homeTeam: match.HomeTeam,
                    awayTeam: match.AwayTeam,
                    winner: match.FTR

                })
                sport.save(function (err) {
                    if (err) {
                        console.error(err);
                    }
                    console.log('saving place', sport);
                })


            })
        });
    })

}

module.exports = seedSportToDB;