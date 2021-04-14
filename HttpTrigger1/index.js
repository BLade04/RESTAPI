const messageHandler = require('../src/service/message-service');
const sendHandler = require('../src/service/sendResume');
const scheduleHandler = require('../src/service/schedule');
module.exports = async function (context, req) {
  context.log('RestAPI Sample App', '', 'Start to process to post a payload');

    try {
        // let messageResult = await messageHandler.sendMessage(); 
        // let sendResult = await sendHandler.sendMessage();
        let scheduleResult = await scheduleHandler.send();
        context.res = {
          body: (scheduleResult),
          headers: {
            'Content-Type': 'application/json'
          }
        }

        if(scheduleResult.status === 200){
          context.res = {
            status: 201,
            
          }
        }
      } catch (error) {
        let errorResponse = {
        }

        if(error.response.status === 400)  {
          errorResponse = {
            message: 'Operation Failed',
            details: 'You already have a schedule.'
          } 
        } else {
          errorResponse = {
            message: 'Operation Failed',
            details: 'The server encountered internal error.'
          }
        }
        context.res = {
          body:  (errorResponse),
          status: 400,
          
        }
      }
}