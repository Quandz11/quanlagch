const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000
const { Console } = require('console')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        fs.readFile('index.html', (err, data) =>{
            if(err) {
                console.error(err)
            }else{
                res.write(data)
            }
        })
    }else if(req.url === '/hn'){
        fs.readFile('hn.html', (err, hn) =>{
            if(err) {
                console.error(err)
            }else{
                res.write(hn)
            }
        })

    }else if(req.url === '/hcm'){
        fs.readFile('hcm.html', (err, hcm) =>{
            if(err) {
                console.error(err)
            }else{
                res.write(hcm)
            }
        })

    }else if(req.url === '/ct'){
        fs.readFile('ct.html', (err, ct) =>{
            if(err) {
                console.error(err)
            }else{
                res.write(ct)
            }
        })

    }
    else if(req.url === '/dn'){
        fs.readFile('dn.html', (err, dn) =>{
            if(err) {
                console.error(err)
            }else{
                res.write(dn)
            }
        })

    }
    
    
    else{
        res.write("404 Not Found")
        res.end()
    }

})
server.listen(port, () => {
    console.log("http://localhost:3000")
})