const router = require('express').Router();

const countries = require("./country");

router.use(countries);

module.exports = router;