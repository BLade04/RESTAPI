const ComsServiceHandler = require('./coms-service');
require('dotenv').config();

class MessageService {
    constructor() {
        this.service = new ComsServiceHandler(process.env.AZURE_API_URL);
    }

    /**
     * message send to azure end point
     */
    sendMessage() {
        try {

            let body = {
                "Name": "Wilbert Masuhay",
                "Email": "masuhayw27@gmail.com",
                "Mobile": "09770828199",
                "PositionApplied": "Fullstack Developer",
                "Source": "Yondu"
            }
            return this.service.send(body);
        } catch (err) {
            throw new Error('message-service exception', err);
        }
    }
}

module.exports =  new MessageService;

