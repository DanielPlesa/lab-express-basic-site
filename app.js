const { request, response } = require("express");
const express = require ("express");

const app = express ();

app.use(express.static('public'));

app.get("/", (request, response, next) => {
    console.log("this is homepage")
    //response.send("hello world");

    response.sendFile(__dirname + "/views/index.html");

});

app.get("/about", (request, response, next) => {
    console.log("this is about page")
    //response.send("hello world");

    response.sendFile(__dirname + "/views/about.html");

});

app.get("/works", (request, response, next) => {
    console.log("this is work page")
    //response.send("hello world");

    response.sendFile(__dirname + "/views/works.html");

});

app.get("/gallery", (request, response, next) => {
    console.log("this is work page")
    //response.send("hello world");

    response.sendFile(__dirname + "/views/gallery.html");

});






app.listen(3001, () => console.log('My first app listening on port 3001! '));