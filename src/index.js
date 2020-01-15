const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")

const app = express();

// Iniciando o DB
const uri = "mongodb+srv://sa:Prma1ert@cluster0-b1xph.gcp.mongodb.net/omnistack10?retryWrites=true&w=majority";
mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
 });

// requireDir("./src/models");

// Para aceitar comunicacao com JSON
app.use(express.json());
app.use(routes);

app.listen(3001);