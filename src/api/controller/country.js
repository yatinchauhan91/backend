const countryService = require('../service/country');

const countries = async (req, res, next) => {
    const data = await countryService.countries(next);

    return res.send({ status: 200, data });
};

const getByCountryId = async (req, res, next) => {
    const data = await countryService.getByCountryId(parseInt(req?.params?.id), next);

    return res.send({ status: 200, data });
};

const insertCountry = async (req, res, next) => {
    const data = await countryService.insertCountry(req.body, next);

    return res.send({ status: 200, data });
};

module.exports = {
    countries,
    getByCountryId,
    insertCountry
};