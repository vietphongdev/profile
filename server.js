const http = require("http");
const fs = require("node:fs");
var path = require("path");

const server = http.createServer();

server.on("request", (req, res) => {
	try {
		if(req.url === "/"){
			res.writeHead(200, { "Content-Type": "text/html" });
			  const src = fs.createReadStream("./public/index.html");
			  src.pipe(res);
		}
		else if(req.url.match("\.css$")){
			const cssPath = path.join(__dirname, 'public', req.url);
			// console.log('cssPath', cssPath);
			const cssFileStream = fs.createReadStream(cssPath, "UTF-8");
			res.writeHead(200, { "Content-Type": "text/css" });
			cssFileStream.pipe(res);
		}
		else if(req.url.match("\.js$")){
			const jsPath = path.join(__dirname, 'public', req.url);
			// console.log('jsPath', jsPath);
			const jsFileStream = fs.createReadStream(jsPath, "UTF-8");
			res.writeHead(200, { "Content-Type": "text/javascript" });
			jsFileStream.pipe(res);
		}
		else if(req.url.match("\.svg$")){
			const svgPath = path.join(__dirname, 'public', req.url);
			const svgFileStream = fs.createReadStream(svgPath, "UTF-8");
			res.writeHead(200, { "Content-Type": "image/svg+xml" });
			svgFileStream.pipe(res);
		}
		else if(req.url.match("\.png$")){
			const imagePath = path.join(__dirname, 'public', req.url);
			// console.log('imagePath', imagePath);
			const imgFileStream = fs.createReadStream(imagePath);
			res.writeHead(200, {"Content-Type": "image/png"});
			imgFileStream.pipe(res);
		}
		else if(req.url.match("\.woff$")){
			const iconPath = path.join(__dirname, 'public', req.url);
			const iconFileStream = fs.createReadStream(iconPath);
			res.writeHead(200, {"Content-Type": "application/font-woff"});
			iconFileStream.pipe(res);
		}
		else if(req.url.match("\.woff2$")){
			const iconPath = path.join(__dirname, 'public', req.url);
			const iconFileStream = fs.createReadStream(iconPath);
			res.writeHead(200, {"Content-Type": "application/font-woff"});
			iconFileStream.pipe(res);
		}
		else if(req.url.match("\.eot$")){
			const iconPath = path.join(__dirname, 'public', req.url);
			const iconFileStream = fs.createReadStream(iconPath);
			res.writeHead(200, {"Content-Type": "application/vnd.ms-fontobject"});
			iconFileStream.pipe(res);
		}
		else if(req.url.match("\.ttf$")){
			const iconPath = path.join(__dirname, 'public', req.url);
			const iconFileStream = fs.createReadStream(iconPath);
			res.writeHead(200, {"Content-Type": "application/font-ttf"});
			iconFileStream.pipe(res);
		}
		else if(req.url.match("\.otf$")){
			const iconPath = path.join(__dirname, 'public', req.url);
			const iconFileStream = fs.createReadStream(iconPath);
			res.writeHead(200, {"Content-Type": "application/font-otf"});
			iconFileStream.pipe(res);
		}
		else{
			res.writeHead(404, {"Content-Type": "text/html"});
			res.end("No Page Found");
		}
	} catch (error) {
		console.log(error);
	}
	
  
});

server.listen(8080, () => console.log("Server is running on PORT 8080"));
