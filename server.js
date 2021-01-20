const express = require("express");
const bodyParser = require("body-parser");
const httpProxy = require("http-proxy");
const http = require('http');
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, `.env/.env.${process.env.NODE_ENV}`),
});

const proxy = httpProxy.createProxyServer();

const PORT = process.env.PORT || 3000;
const API = process.env.API;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "dist")));

app.get("/api/*", (req, res) => {
  proxy.web(req, res, { target: API }, (e) => {
    console.log(e.message);
    return res.status(500).send({
      error: true,
      message: e.message,
    });
  });
});

/* redirect all requests to index.html so we can download all js files (include react-router) */
app.all("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./dist/index.html"), (err) => {
    res.status(500).send(err);
  });
});

// const httpServer = http.createServer(app);
// httpServer.listen(PORT);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
