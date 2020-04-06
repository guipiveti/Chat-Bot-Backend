require('dotenv').config();

const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const watsonAssistant = new AssistantV2({
  version: process.env.ASSISTANT_VERSION,
  authenticator: new IamAuthenticator({
    apikey: process.env.ASSISTANT_IAM_APIKEY,
  }),
  url: process.env.ASSISTANT_URL,
  disableSslVerification: true
});

module.exports = {
  async createWatsonSession() {
    return new Promise((resolve, reject) => {
      try {
        response = watsonAssistant.createSession({ assistantId: 'df0a231c-3bbb-481e-989d-335b693cc28f' });
        resolve(response);
      } catch (error) {
        reject(error); // If there's an error, return the error
      }
    });
  },

  async deleteWatsonSession(sessionId) {
    return new Promise((resolve, reject) => {
      try {
        response = watsonAssistant.deleteSession({
          assistantId: process.env.ASSISTANT_ID,
          "sessionId": sessionId,
        });
        resolve(response);
      } catch (error) {
        reject(error); // If there's an error, return the error
      }
    });
  },

  async sendWatsonMessage(message, sessionId) {
    return new Promise((resolve, reject) => {
      try {
        response = watsonAssistant.message({
          "assistantId": process.env.ASSISTANT_ID,
          "sessionId": sessionId,
          input: {
            'message_type': 'text',
            'text': message
          }
        });
        resolve(response);
      }
      catch (error) {
        reject(error); // If there's an error, return the error
      }
    });
  }
}

