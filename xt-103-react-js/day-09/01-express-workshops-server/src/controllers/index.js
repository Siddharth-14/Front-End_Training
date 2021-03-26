const path = require('path')
function getHome(req,res){
    //process.cwd() -> folder the Node folder
    res.sendFile(path.join(process.cwd(),'src/views/index.html'))
}

function getAbout(req,res){
    res.sendFile(path.join(process.cwd(),'src/views/about.html'))
}

module.exports = {getHome, getAbout};