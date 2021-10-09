const util = require("minecraft-server-util")
const config = require("./config.json")
const fs = require("fs");

const res = [];

exports.pingServers = async () => {
    for (let i = 0; i < config.servers.length; i++) {
        const server = config.servers[i];
        if(!server.simpleOrfullQuery){
            await util.query(server.ip, { port: server.port }) // These are the default options
                .then((response) => {
                    const responseObject = {
                        serverName:server.name,
                        host: response.host,
                        port: response.port,
                        serverType: response.gameType,
                        version: response.version,
                        onlinePlayers: response.onlinePlayers,
                        maxPlayers: response.maxPlayers,
                        playersString: response.onlinePlayers+"/"+response.maxPlayers,
                        description: response.description.descriptionText,
                        ping: response.roundTripLatency
                    }
                    res.push(responseObject)
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            await util.queryFull(server.ip, { port: server.port }) // These are the default options
                .then((response) => {
                    const responseObject = {
                        serverName:server.name,
                        host: response.host,
                        port: response.port,
                        serverType: response.gameType,
                        version: response.version,
                        onlinePlayers: response.onlinePlayers,
                        maxPlayers: response.maxPlayers,
                        playersString: response.onlinePlayers+"/"+response.maxPlayers,
                        players: response.players,
                        description: response.description.descriptionText,
                        ping: response.roundTripLatency
                    }
                    res.push(responseObject)
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    //Saving the results
    fs.writeFile(__dirname+"/servers.json", JSON.stringify(res), (err) => {
        console.log(err);
        console.log("[ServerRequester] Saved data in *servers.json*")
    })
}