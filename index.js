const MessageHandler = require('./src/service/message-service');
const SendHandler = require('./src/service/sendResume');
// const HttpEndpoint = 'http://localhost:7071/api/HttpTrigger1';

class RunTrigger {
    constructor() {

    }


    init() {

        this.run();

    }
    /**

    * using to run via node

    */

    async run() {

        try {
            // let messageResult = await MessageHandler.sendMessage(); 
            let sendResult = SendHandler.fileReader();
            console.log(messageResult, 'Result');
            console.log(sendResult,'Send Result');
        } catch (err) {
            console.error("An error has occurred:", err);
        }
    }

}


var httptrigger = new RunTrigger();
httptrigger.init();

module.exports = RunTrigger;