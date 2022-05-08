const express = require("express");
const app = express();
var path = require('path');
const bodyParser = require('body-parser'); // middlewareconst url = require('url'); //for parsing url
const fs = require('fs'); //file system

const router = express.Router();
const serverless = require('serverless-http');

app.use(express.static('views')); //to allow static files like css and js, setting to views folder

// Set EJS as templating engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
})); //fetching info from page
// configure the app to use bodyParser()

app.get('/', (req, res) => {

	res.render('index')

})

app.get('/home', (req, res) => {

	res.render('index')

})

app.get('/index', (req, res) => {

	res.render('index')

})

app.get('/portfolio', (req, res) => {

	res.render('portfolio')

})

app.get('/works', (req, res) => {

	res.render('portfolio')

})


//TODO: delete this route, just for testing
app.get('/api/cyphr/adverts', (req, res) => {

	var jsonContent = {};


	if (req.query.for != "slides") {

		const responseData = [
			{
				content: "Aprihive: Best student marketing platform.",
        		image:"https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-6/248403505_100349235792049_1906537986642622320_n.jpg?_nc_cat=111&ccb=1-6&_nc_sid=8bfeb9&_nc_eui2=AeHrwSFBpGEovlFLaMLADPumyc8o7f7tocHJzyjt_u2hwajm5fkeQU5YLvzcISqlM240DCJoT5UrVBfiPG8NdMKN&_nc_ohc=fvzhM4gaj5sAX_tbLZn&_nc_zt=23&_nc_ht=scontent.flos1-1.fna&oh=00_AT_tFmPamIXg1i1w2ZWShrL1Tx1nuudU-cpT7WxkGTpDhQ&oe=627A986E",
        		action: "Download",
        		link: "https://www.aprihive.com/download",
        		status: "ok"
        	},
        	{
    			content: "Jesulonimii William, Founder Aprihive",
        		image:"https://avatars.githubusercontent.com/u/70331030?v=4",
        		action: "Visit",
        		link: "https://www.aprihive.com/user/Jesulonimii",
        		status: "ok"
        	},
        	{
    			content: "Aprihive launching",
        		image:"https://www.aprihive.com/assets/img/ogs-image.jpg",
        		action: "Visit",
        		link: "https://www.aprihive.com/user/Jesulonimii",
        		status: "ok"
        	}
        ]

        jsonContent = JSON.stringify(responseData);
		res.status(200).end(jsonContent)


	}
	else{
		res.status(400).send({"error":"parameter 'for' missing in request's body"})
	}

	res.end()

})

app.post('/api/cyphr/adverts', (req, res) => {

	var jsonContent = [];


	if (req.body.for == "slides") {

		const responseData = [
			{
				content: "Aprihive: Best student marketing platform.",
        		image:"https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-6/248403505_100349235792049_1906537986642622320_n.jpg?_nc_cat=111&ccb=1-6&_nc_sid=8bfeb9&_nc_eui2=AeHrwSFBpGEovlFLaMLADPumyc8o7f7tocHJzyjt_u2hwajm5fkeQU5YLvzcISqlM240DCJoT5UrVBfiPG8NdMKN&_nc_ohc=fvzhM4gaj5sAX_tbLZn&_nc_zt=23&_nc_ht=scontent.flos1-1.fna&oh=00_AT_tFmPamIXg1i1w2ZWShrL1Tx1nuudU-cpT7WxkGTpDhQ&oe=627A986E",
        		action: "Download",
        		link: "https://www.aprihive.com/download",
        		status: "ok"
        	},
        	{
    			content: "Jesulonimii William, Founder Aprihive",
        		image:"https://avatars.githubusercontent.com/u/70331030?v=4",
        		action: "Visit",
        		link: "https://www.aprihive.com/user/Jesulonimii",
        		status: "ok"
        	}
        ]

        jsonContent = JSON.stringify(responseData);
		res.status(200).end(jsonContent)


	}
	else{
		res.status(200).end([{"error":"parameter 'for' missing in request's body"}])
	}

	res.end()

})



//IMPORTANT: export to server.js
module.exports = app;
module.exports.handler = serverless(app);