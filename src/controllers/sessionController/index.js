const watsonAssistant = require('../../services/watsonAssistant');

module.exports = {
    async createSession(req, res){
        const watsonResponse = await watsonAssistant.createWatsonSession().catch((error)=>{console.log(error);});
        //console.log(JSON.stringify(a.result));
        res.json(watsonResponse.result);
    },

    async deleteSession(req, res){
        const sessionId = req.headers.sessionid;
        console.log(sessionId);
        const watsonResponse = await watsonAssistant.deleteWatsonSession(sessionId).catch((error)=>{console.log(error);});
        console.log(watsonResponse);
        //res.json(watsonResponse);
        res.status(200).send();
    },
}