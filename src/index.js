const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const routes = require("./routes");
const { setupWebSocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebSocket(server);

// Iniciando o DB
const uri = "mongodb+srv://sa:Prma1ert@cluster0-b1xph.gcp.mongodb.net/omnistack10?retryWrites=true&w=majority";
mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
 });

// requireDir("./src/models");

//app.use(cors({ origin: "http://localhost:3000" }));
app.use(cors()); // acesso liberado total

// Para aceitar comunicacao com JSON
app.use(express.json());
app.use(routes);

// app.listen(3001);
server.listen(3001);