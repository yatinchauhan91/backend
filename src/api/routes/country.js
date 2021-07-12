const router = require('express').Router();
const countryController = require('../controller/country');

router.get('/country', countryController.countries); 
router.get('/country/:id', countryController.getByCountryId); 
router.post('/country', countryController.insertCountry); 

module.exports = router;