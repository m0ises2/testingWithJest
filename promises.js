const axios = require('axios');

function getDataFromApi(url) {
    return axios.get(url)
        .then(data => {
            return data;
        });
};


module.exports = {
    getDataFromApi,
}