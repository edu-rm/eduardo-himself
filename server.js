const express = require("express")
const nunjucks = require("nunjucks")


const server = express()
const projetos = require("./data.js")


server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})



server.get("/", function(req, res){
    return res.render("sobre")
})

server.get("/projetos", function(req,res){
    
    return res.render("projetos", {itens : projetos})
})

server.listen(5000, function(){
    console.log("server is running")
})
