const router = require('express').Router();

//Middleware routes
const serviceRouter = require('../Routes/ServiceRouter');

router.use('/', serviceRouter);

module.exports = router;
