// app.js file should be maeant for the configorations and call to the server

const path = require("path");
const express = require("express");
const app = express();
const router = require("./router");
// Express Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.set("views", "views"); // install any view engine for the views: js, hbs etc
app.set("view engine", "hbs");
app.use("/", router);

app.listen(3000, () => console.log("The server is now running"));
