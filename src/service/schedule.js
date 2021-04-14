const ComsServiceHandler = require('./coms-service');


class SchedAppointment{
    constructor() {
        this.service = new ComsServiceHandler(process.env.AXA_API_SCHED_URL);
    }

    /**
     * message send to azure end point
     */
    async send() {
        try {
          
            let body = {
                    "ProposedDate": "2021-04-15",
                    "ProposedTime": "530PM",
                    "Online": "true",
            }
            console.log(body,'body');
            return this.service.send(body);
        } catch (err) {
            throw new Error('message-service exception', err);
        }
    }

 
}

module.exports =  new SchedAppointment;