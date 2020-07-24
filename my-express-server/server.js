const express = require("express");

const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello World!</h1>")
})

app.get("/contact", function(req, res){
    res.send("Contact me at: derek.lau.contact@gmail.com")
})

app.get("/about", function(req, res){
    res.send("The website is owned by Derek :)")
})

app.get("/hobbies", function(req, res){
    res.send("Coffee, gym, travel")
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

