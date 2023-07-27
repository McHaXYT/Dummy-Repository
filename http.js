const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome To Our Home Page !");
    }
    if (req.url === "/about") {
        res.end("Here Is Our Short History");
    }
    res.end(`<h1>Oops!</h1>
            <p>We Can't Seem To Find The Page You Are Looking For</p>
            <a href="/">Back Home</a>`);
});

server.listen(5000);
