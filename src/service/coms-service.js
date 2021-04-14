const axios = require('axios');
require('dotenv').config();

class ComsServiceHandler {
    constructor(url, key){
        this.url = url;
        var _headers = {
            'accept': 'application/json',
            'content-type': 'application/json',
            'x-axa-api-key': process.env.AXA_API_KEY
        }

        this.headers = _headers;
    }

    send(body){
        var options = {
            method: "POST",
            headers: this.headers,
            url: this.url,
            responseType: 'json',            
            data: body
        };

        console.log(options, 'options');
        return axios(options).then(response => response.data);
    }
}

module.exports = ComsServiceHandler;