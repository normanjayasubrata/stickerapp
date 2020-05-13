require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const path = require("path");

const normilizePort = port => parseInt(port, 10);
const port = normilizePort(process.env.PORT || "3000");

const app = express();
const dev = app.get("env") !== "production";

console.log("environtment",process.env)

if (!dev) {
    app.disable("x-powered-by");
    app.use(compression());
    app.use(morgan("common"));

    app.use(express.static(path.resolve(__dirname, "build")));

    app.get("*", (req, res) => {
        res.sendfile(path.resolve(__dirname, "build", "index.html"))
    })
}

if (dev) {
    app.use(morgan("dev"))
}

app.listen(port, () => console.log("server is up"))