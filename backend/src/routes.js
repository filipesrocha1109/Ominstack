// 2º passo, definir rotas

const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/Upload');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);


routes.post('/Sessions', SessionController.store);

routes.get('/Spots', SpotController.index);
routes.post('/Spots', upload.single('thumbnail'), SpotController.store);


routes.get('/Dashboard', DashboardController.show);

routes.post('/Spots/:spot_id/bookings', BookingController.store);

// exportando as rotas

module.exports = routes;