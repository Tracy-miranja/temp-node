const http= require('http');

const server= http.createServer((req,res)=>{
    if(req.url=== '/'){
        res.end('Hello, Welcome to my server')
    }
    if(req.url==='/about'){
        res.end('Here is my about page')
    }

    res.end(`
        <h1>Ooops! page not found</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back home</a>
    `)

})

//port server is listening to
server.listen(5200);