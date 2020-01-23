const socketio = require("socket.io");

const parseStringAsArray = require('./utils/parseStringAsArray');
const calculateDistance = require('./utils/calculateDistance');

const connections = [];

exports.setupWebSocket = (server) => {
    const io = socketio(server);
    
    io.on('connection', socket => {
        // console.log(socket.id);
        // console.log(socket.handshake.query);

        const { latitude, longitude, techs } = socket.handshake.query;

        // setTimeout(() => {
        //     io.emit("message", "Hello Renan!");
        // }, 3000);

        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude),
            },
            techs: parseStringAsArray(techs),
        });
    });

};

exports.findConnections = (coordinates, techs) => {
    return connections.filter(connections => {
        return calculateDistance(coordinates, connection.coordinates) < 10
            && connection.techs.some(item => techs.includes(item))
    })
}

exports.sendMessage = (to, message, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message, data);
    })
}