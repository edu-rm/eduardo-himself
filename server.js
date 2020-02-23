const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express: server
})



server.get("/", function(req, res){
    return res.render("sobre")
})

server.get("/projetos", function(req,res){
    return res.render("projetos")
})

server.listen(5000, function(){
    console.log("server is running")
})
