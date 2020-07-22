const router = require('express').Router();
const errorHandling = require('../controller/errors.js');
const authController = require('../controller/authController');
const photoController = require('../controller/photoController');
const taskController = require('../controller/taskController');
const baseController = require('../controller/baseController');
const moment = require('moment'); 
const { base } = require('../model/user.js');
router.use(function (req, res, next) {
    // console.log(`${req.ip} :: ${req.headers['user-agent']} accessed api :: time: + ${moment().format("DD MMM,YY")} + accessed: ${req.method} + --> ${req.url.toString()}`);
    console.log(`# ${moment().format("MMMM Do YYYY, h:mm:ss a")} || ${req.method}-> ${req.url.toString()}`);
    next();
});


//---------------------------------------------------------------------

router.post('/signup', authController.signup);
router.post('/login', authController.login);


router.post('/photos', photoController.uploadPhoto);
router.get('/photos/forThumbnails/:authorId', photoController.photoThumbnails);
router.get('/photos/list/:authorId', photoController.photosList);
router.delete('/photos/:photoId', photoController.deletePhoto);

router.post('/tasks', taskController.createTask);
router.put('/tasks/:taskId', taskController.updateTask);
router.delete('/tasks/:taskId', taskController.deleteTask);
router.get('/tasks/viewAllTasks/:authorId', taskController.viewAllTasks);

router.get('/base/getloosingteams/:team', baseController.getLoosingTeams);
router.get('/base/cloths', baseController.getClothsData);
router.get('/base/weather', baseController.getWeatherReport);
router.get('/base/news', baseController.getLatestNews);
//Default 404 for other routes
router.route('/*').all(errorHandling.notFoundError);

module.exports = router;
