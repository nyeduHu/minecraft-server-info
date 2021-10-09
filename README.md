# Minecraft Server Info for XTM
A package for Xtrememiners.

### Table of contents
* [Technologies](#technologies)
* [Example Configuration](#example-configuration)
* [Quick Example](#quick-example)
* [Where Does It Saves My Data?](#example-output)

## Techonologies used
* magic mind
* god's foregiveness
* minecraft-server-util
* and lastly node.js

## Example Configuration

```json
{
    "servers": [
        {
            "name":"Economy",
            "ip":"localhost",
            "port":25565,
            "simpleOrfullQuery": true
        }
    ]
}
```

Two Or More servers: 
```json
{
    "servers": [
        {
            "name":"Economy",
            "ip":"localhost",
            "port":25565,
            "simpleOrfullQuery": true
        },
        {
            "name":"csillivilliNevIde",
            "ip":"play.pornhub.com",
            "port":69696,
            "simpleOrfullQuery": false
        }
    ]
}
```

`name`: Your server's name (example: HUB)

`ip`: Your server's IP address (examples: 127.0.0.1 OR play.example.com)

`port`: Your server's query port.

`simpleOrfullQuery`: **true**: Full query on your server, **false**: Just a simple query excluding players.


## Quick Example

```js
//your code before
const serverRequester = require("./serverRequester.js")

const updateEveryXMinute = 1;

setTimeout(() => {
    serverRequester.pingServers();
}, 60000 * 1)
```

## Example output
Your output is inside `servers.json`.

Example:
```json
{"lastUpdated":"2021-10-09T18:48:32.745Z","servers":[{"serverName":"Economy","host":"localhost","port":25565,"serverType":"SMP","version":"1.16.5","onlinePlayers":0,"maxPlayers":20,"playersString":"0/20","players":[],"description":"","ping":11}]}
```