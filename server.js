'use strict';

// my project runs on port 3000, my teammate's service runs on port 4000
const PORT1 = 3000;
const PORT2 = 4000;

// import functionality from packages defined in dependencies
const express = require('express');
const cors = require('cors');
const net = require('net');

const app = express();
const socket1 = new net.Socket();

app.use(cors());
app.use(express.urlencoded({
    extended: true
}));

// to serve static files
app.use(express.static('public'));
app.use(express.static('pages'));
app.use(express.static('volcanoes'));

function printData(data, passage) {
    console.log("\nResource successfully retrieved\n\nVolcano Name: " + data.name + "\nWebsite: " + data.url);
    console.log(passage); 
}

function printConnec() {
    console.log("\nSocket Connection Successful!"); 
    console.log("\nRetrieving resource from teammate's service...");
}

// connect socket to teammates server
function establishConnection() {
    socket1.connect({ port: PORT2 }, localhost, () => {
        printConnec();
    });
}

// funct to request retrieval of data from teammates microservice
function getData(data) {
    var passage;
    const readStream = readline.createInterface({ input: data });
    readStream.on('connection', (socket1) => {
        socket1.on(readstream, (para) => {
            passage = para;
        });
    });
    readStream.on('close', () => {
        socket1.end();
        readStream.end();
    });
    return passage;
}

// route handler to receive scraped paragraph
app.post('/displayResults', (req, res, next) => {
    const requestVolc = JSON.parse(req.body.volcano);
    req.dir = '/volcanoes';
    establishConnection();
    const passageVolc = getData(requestVolc);
    printData(requestVolc, passageVolc);
    next();
});

// find requested volcano from the state of Alaska 
function akVolcs(requestVolc) {
    var fileVolc;
    if (requestVolc.name === "Mt Bona") { fileVolc = '/akMtBona.html'; } 
    else if (requestVolc.name === "Mt Pavlof") { fileVolc = '/akMtPavlof.html'; } 
    else if (requestVolc.name === "Novarupta") { fileVolc = '/akNovarupta.html'; } 
    else { console.log('An Error occured'); }
    return fileVolc;
}

// find requested volcano from the state of California 
function caVolcs(requestVolc) {
    var fileVolc;
    if (requestVolc.name === "Mt Shasta") { fileVolc = '/caMtShasta.html'; } 
    else if (requestVolc.name === "Lassen Peak") { fileVolc = '/caLassenPeak.html'; } 
    else if (requestVolc.name === "Long Valley") { fileVolc = '/caLongValley.html'; } 
    else { console.log('An Error occured'); }
    return fileVolc;
}

// find requested volcano from the state of Oregon 
function orVolcs(requestVolc) {
    var fileVolc;
    if (requestVolc.name === "Mt Hood") { fileVolc = '/orMtHood.html'; } 
    else if (requestVolc.name === "Three Sisters") { fileVolc = '/orThreeSisters.html'; } 
    else if (requestVolc.name === "Mt Mazama") { fileVolc = '/orMtMazama.html'; } 
    else { console.log('An Error occured'); }
    return fileVolc;
}

// find requested volcano from the state of Washington 
function waVolcs(requestVolc) {
    var fileVolc;
    if (requestVolc.name === "Mt Baker") { fileVolc = '/waMtBaker.html'; } 
    else if (requestVolc.name === "Glacier Peak") { fileVolc = '/waGlacierPeak.html'; } 
    else if (requestVolc.name === "Mount St. Helens") { fileVolc = '/waMtStHelens.html'; } 
    else { console.log('An Error occured'); }
    return fileVolc;
}

// find requested volcano from the state of Hawaii 
function hiVolcs(requestVolc) {
    var fileVolc;
    if (requestVolc.name === "Kilauea") { fileVolc = '/hiKilauea.html'; } 
    else if (requestVolc.name === "Mauna Loa") { fileVolc = '/hiMaunaLoa.html'; } 
    else if (requestVolc.name === "Hualalai") { fileVolc = '/hiHualalai.html'; } 
    else { console.log('An Error occured'); }
    return fileVolc;
}

// find requested volcano from the state of Utah 
function utVolcs(requestVolc) {
    var fileVolc;
    if (requestVolc.name === "Markagunt Plateau") { fileVolc = '/utMarkaguntPlateau.html'; } 
    else if (requestVolc.name === "Fumarole Butte") { fileVolc = '/utFumaroleButte.html'; } 
    else if (requestVolc.name === "Santa Clara Volcano") { fileVolc = '/utSantaClara.html'; } 
    else { console.log('An Error occured'); }
    return fileVolc;
}

// find requested volcano from the state of Idaho 
function idVolcs(requestVolc) {
    var fileVolc;
    if (requestVolc.name === "Big Southern Butte") { fileVolc = '/idBigSouthernButte.html'; } 
    else if (requestVolc.name === "Henrys Fork Caldera") { fileVolc = '/idHenrysFork.html'; } 
    else if (requestVolc.name === "Island Park Caldera") { fileVolc = '/idIslandPark.html'; } 
    else { console.log('An Error occured'); }
    return fileVolc;
}

// find requested volcano from the state of New Mexico 
function nmVolcs(requestVolc) {
    var fileVolc;
    if (requestVolc.name === "Valles Caldera") { fileVolc = '/nmVallesCaldera.html'; } 
    else if (requestVolc.name === "Aden Crater") { fileVolc = '/nmAdenCrater.html'; } 
    else if (requestVolc.name === "Jornada del Muerto Volcano") { fileVolc = '/nmJornadaDelMuertoVolcano.html'; } 
    else { console.log('An Error occured'); }
    return fileVolc;
}

// find requested volcano from the state of Arizona 
function azVolcs(requestVolc) {
    var fileVolc;
    if (requestVolc.name === "S P Crater") { fileVolc = '/azSPCrater.html'; } 
    else if (requestVolc.name === "Sunset Crater") { fileVolc = '/azSunsetCrater.html'; } 
    else { console.log('An Error occured'); }
    return fileVolc;
}

// find requested volcano from the state of Nevada 
function nvVolcs(requestVolc) {
    var fileVolc;
    if (requestVolc.name === "Lunar Crater") { fileVolc = '/nvLunarCrater.html'; } 
    else if (requestVolc.name === "Yucca Mountain") { fileVolc = '/nvYuccaMountain.html'; } 
    else { console.log('An Error occured'); }
    return fileVolc;
}

// find requested volcano from the state of Colorado 
function coVolcs(requestVolc) {
    var fileVolc;
    if (requestVolc.name === "Dotsero") { fileVolc = '/coDotsero.html'; } 
    else if (requestVolc.name === "La Garita Caldera") { fileVolc = '/coLaGaritaCaldera.html'; } 
    else { console.log('An Error occured'); }
    return fileVolc;
}

// find requested volcano from the state of Wyoming 
function wyVolcs(requestVolc) {
    var fileVolc;
    if (requestVolc.name === "Yellowstone Caldera") { fileVolc = '/wyYellowstoneCaldera.html'; } 
    else { console.log('An Error occured'); }
    return fileVolc;
}

// funct to find which of the 12 states the requested volcano is in
function findVolc(request) {
    if (request.state === "ak") { return alVolcs(request) }
    else if (request.state === "ca") { return caVolcs(request) }
    else if (request.state === "or") { return orVolcs(request) }
    else if (request.state === "wa") { return waVolcs(request) }
    else if (request.state === "hi") { return hiVolcs(request) }
    else if (request.state === "ut") { return utVolcs(request) }
    else if (request.state === "id") { return idVolcs(request) }
    else if (request.state === "nm") { return nmVolcs(request) }
    else if (request.state === "az") { return azVolcs(request) }
    else if (request.state === "nv") { return nvVolcs(request) }
    else if (request.state === "co") { return coVolcs(request) }
    else if (request.state === "wy") { return wyVolcs(request) }
    else { console.log('An Error occured'); }
}

// route handler to send volcano results
app.post('/displayResults', (req, res) => {
    const requestVolc = JSON.parse(req.body.volcano);
    const dir = '/volcanoes';
    var fileName = findVolc(requestVolc);

    res.sendFile(path.join(__dirname, dir, fileName));
});

app.listen(PORT1, () => {
    console.log(`Server listening on port ${PORT1}...`);
});

