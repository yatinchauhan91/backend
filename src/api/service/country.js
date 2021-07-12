fs = require('fs');

const data = require('./data.json');

const countries = async (next) => {
    try {
        if (!data) throw new Error("Data does not exist");

        return await data?.countries.map(function (data) {
            return { _id: data.rank, name: data.name, image: data.image };
        }).sort((a, b) => a._id - b._id);
    } catch (error) {
        console.log(`Error in country listing service function : ${error}`);
        next(error);
    }
};

const getByCountryId = async (id, next) => {
    try {
        if (!data) throw new Error("Data does not exist");

        return await data?.countries
            .filter(data => data.rank === id)
            .map(function (data) {
                return { _id: data.rank, name: data.name, image: data.image };
            });
    } catch (error) {
        console.log(`Error in get by country id service function : ${error}`);
        next(error);
    }
};

const insertCountry = async (body, next) => {
    try {
        const rank = data.countries.length + 1;

        data.countries.push({
            name: body.name,
            continent: body.continent,
            rank,
            image: body.image
        });

        await fs.writeFile(__dirname+'/data.json', JSON.stringify(data), 'utf8', function (err) {
            if (err) throw new Error(err);
            console.log('data added in file successfully');
        });

        return { message: "Inserted Successfully." };
    } catch (error) {
        console.log(`Error in get by country id service function : ${error}`);
        next(error);
    }
};

module.exports = {
    countries,
    getByCountryId,
    insertCountry
};