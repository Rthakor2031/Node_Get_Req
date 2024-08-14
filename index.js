const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    if(req.url == '/home'){
        res.end("Welcome to HomePage")
    }else if(req.url == '/about'){
        res.end("This is About")
    }else if(req.url == '/getproductdata'){
        fs.readFile('./db.json','utf8',(err,data)=>{
            if(err){
                console.log(err)
                res.end(err)
            }else{
                const Alldata = JSON.parse(data)
                res.end(JSON.stringify(Alldata.products))
            }
        })
    }else if(req.url == '/user'){
        fs.readFile('./db.json','utf8',(err,data)=>{
            if(err){
                res.end(err)
            }else{
                const Userdata = JSON.parse(data)
                res.end(JSON.stringify(Userdata.user))
            }
        })
    }
})


server.listen(4500, () => { console.log("Listening on port 4500"); });