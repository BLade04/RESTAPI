const ComsServiceHandler = require('./coms-service');
require('dotenv').config();

class SendResume {
    constructor() {
        this.service = new ComsServiceHandler(process.env.AXA_API_URL);
    }

    /**
     * message send to azure end point
     */
    async sendMessage() {
        try {
            
            let params = process.env.BASE64
            console.log(params, 'params')
            // let fileReaderResult = await this.fileReader();
            // console.log(fileReaderResult)

            
            let body = {
                "file": {
                    "mime": "application/pdf",
                    "data": `${params}`
                    }
            }
            console.log(body,'body');
            return this.service.send(body);
        } catch (err) {
            throw new Error('message-service exception', err);
        }
    }

        // fileReader() {
        //     return new Promise(resolve => {
        //         var file = new File(["Wilbert  Masuhay(Resume).pdf"], "C:/Users/SoHyun/Downloads/Wilbert  Masuhay(Resume).pdf");
        //         console.log(file, 'fileeeeeeeeeeeee');
        //         var reader = new FileReader();
        //         // Read file content on file loaded event
        //         reader.onload = function(event) {
        //           resolve(event.target.result);
        //         };
        //         // reader.onerror = function(error) {
        //         // console.log(error)
        //         //  reject(error);
                 
        //         // }
            
        //         // Convert data to base64 
        //         reader.readAsDataURL(file);
        //       })
        // }
}

module.exports =  new SendResume;