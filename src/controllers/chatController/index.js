const watsonAssistant = require('../../services/watsonAssistant');

module.exports = {

    async sendMessage(req, res){
        const sessionId = req.headers.sessionid;
        console.log(sessionId);
        const message = req.body.message;
        console.log(message);
        watsonResponse = await watsonAssistant.sendWatsonMessage(message, sessionId);
        return res.json(watsonResponse.result.output.generic);
    },

}