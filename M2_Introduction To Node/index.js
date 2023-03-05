const { add, reduce } = require("./other.js");
const http = require("http")
const sum = add(10, 20)
const sub = reduce(30, 20)
console.log();

const server = http.createServer((req, res) => {
    res.end("thats my server :(")
    console.log(req.url);
})
const port = 3210;
server.listen(port, console.log(`server is running port - ${port}`))

