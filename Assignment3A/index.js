/*
	Program to list all the files in the directory using Node.js server
 */

// Importing required libraries
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

// Server port
const PORT = 3000;

// Defining file types
const mimeType = {
	'.ico': 'image/x-icon',
	'.html': 'text/html',
	'.js': 'text/javascript',
	'.json': 'application/json',
	'.css': 'text/css',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.wav': 'audio/wav',
	'.mp3': 'audio/mpeg',
	'.svg': 'image/svg+xml',
	'.pdf': 'application/pdf',
	'.doc': 'application/msword',
	'.eot': 'application/vnd.ms-fontobject',
	'.ttf': 'application/font-sfnt'
};

// Creating server
http.createServer((req, res) => {
	// Parsing the requested URL
	const parsedURL = new URL(req.url);

	if(parsedURL === '/') {
		let filesLink = "<ul>";
		res.setHeader('Content-Type', 'text/html');

		// Walking the current directory
		let filesList = fs.readdirSync("./");

		filesList.forEach(element => {
			if(fs.statSync("./" + element).isFile()) {
				filesLink += `<br/><li><a href='./${element}'>${element}</a></li>`;
			}
		});
		filesLink += "</ul>";

		res.end("<h1>List of files:</h1> " + filesLink);

		const sanitizedPath = path.normalize(parsedURL.pathname).replace("/^(\.\.[\/\\])+/", "");

		let pathname = path.join(__dirname, sanitizedPath);
	}
}).listen(PORT);

