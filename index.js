require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
var errorHandling = require('./controller/errors.js');
const fileUpload = require('express-fileupload');
const seedSportToDB = require('./seedSportData');
const moment = require('moment'); 
const port = process.env.PORT || 8000;

const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(fileUpload());


connectDB();

app.use(cors({origin:true, credentials:true}));

//-------------mount API Routes-------------------

app.use('/api/v1/', require('./router/v1_Routes'));

app.route('/*').all(errorHandling.notFoundError);



//-----------get seed data---------
// seedSportToDB();
// ==========================
// START SERVER
// ==========================
app.listen(port, () => {
    console.log(`listning to requests on localhost:${port}`);
  })
  

//----------------------------------END---------------------------------