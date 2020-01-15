const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;
        // console.log(request.body);

        let dev = await Dev.findOne({ github_username });
    
        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            // console.log(apiResponse);    
            
            const { name = login, avatar_url, bio } = apiResponse.data;
            // Substituido por name = login
            // if (!name) {
            //     name = apiResponse.data.login
            // }
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: "Point",
                coordinates: [longitude, latitude],
            } 
        
            const dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            }); 
        }
        
        return response.json(dev);
    },

    async update(request, response) {
        // TODO: Atualizar
        // Nome, avatar, Bio, Localizacao e Techs (github_username)
    },

    async destroy(request, response) { 
        // TODO: Deletar
    }
}