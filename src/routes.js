const { Router } = require("express");
const DevController = require("./controllers/DevController");  
const SearchController = require("./controllers/SearchController");  

const routes = Router();

// Metodos HTTP: GET,POST, PUT, DELETE

// Tipos de Parametros:
// Query params: /users?param=value     ==> request.query (filtros, ordenacao, paginacao, ...)
// Route params: /users/1               ==> request.params (de acordo com o Metodo HTTP,identificar o recurso na alteracao)
// Body:                                ==> request.body (dados para criacao ou alteracao de um registro)

routes.get("/", (request, response) => {
    // return response.send("Hello World!");

    // console.log(request.query);
    // console.log(request.params);
    // console.log(request.body);

    return response.json({
        message: "Hello Omnistack JSON!!!"
    });
});
routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

routes.get("/search", SearchController.index);

module.exports = routes;