const express = require("express")
const nunjucks = require("nunjucks")


const server = express()
const projetos = require("./data.js")
const info = {
    avatar_url : "https://i.imgur.com/iCmED2B.jpg",
    name : "Eduardo Rampon Meireles",
    bio : "Um eterno aprendiz",
    links : [
        { name : "GitHub", url : "https://github.com/EduardoRamponMeireles"},
        { name : "Instagram", url : "https://www.instagram.com/eduardo.rampon/"},
        { name : "LinkedIn", url : "https://github.com/EduardoRamponMeireles"},
    ]
}

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape:false,
    noCache:true
})



server.get("/", function(req, res){
    

    return res.render("sobre", { info : info})
})

server.get("/projetos", function(req,res){
    
    return res.render("projetos", {itens : projetos})
})

server.get("/pesquisa", function(req,res){
    const repo = req.query.repo

    const repositorio = projetos.find(function(repositorio){
        if(repositorio.title == repo){
            return true;
        }   
    })

    if(!repositorio){
        return res.send("Repository not found");
    }

    return res.render("pesquisa",{item:repositorio})
})

server.listen(5000, function(){
    console.log("server is running")
})
