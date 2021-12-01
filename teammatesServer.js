const PORT = 4000;

const net = require('net');

// teammates microservice - fetch paragraph from Wikipedia page
async function getData(url, path) {
    const response = await fetch(url, path);
    return response.json();
}

const server = net.createServer((socket) => {
    console.log("\nSocket address: " + socket.remoteAddress + ", and PORT: " + socket.remotePort);
    socket.on("data", (buffer) => {
        console.log("\nRequest accepted");
        const res = getData(buffer.url, buffer.path); 
        socket.write(`${JSON.stringify(res).toString("utf-8")}\n`);
    });
    socket.on("end", () => {
        console.log("\nConnection closed" + socket.remoteAddress + ", and PORT: " + socket.remotePort);
    });
});

server.maxConnections = 10;
server.listen(PORT);