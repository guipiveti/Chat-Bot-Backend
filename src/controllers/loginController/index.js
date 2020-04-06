const axios = require('axios');

module.exports = {
    async Login(req, res){
        const {username} = req.body;
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return res.json(response.data);
    },
}