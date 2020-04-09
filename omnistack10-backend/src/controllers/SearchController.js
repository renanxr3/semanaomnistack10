const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
    async index(request, response) {
        // Buscar todos os devs num raio de 10km
        // Filtrar por tecnologias
        // console.log(request.query);

        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);
        
        console.log(techsArray);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude],                    
                    },
                    $maxDistance: 10000, // Distancia em metros
                }
            }
        });

        return response.json({ devs });
    },
}