const http=require('http');
const server=http.createServer((req,res)=>{
        if(req.url=="/"){
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h1>bu bosh sahifa</h1>');
                res.end();
        }
        if(req.url=="/service"){
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h1>bu Service sahifa</h1>');
                res.end();
        }
        if(req.url=="/about"){
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h1>bu About sahifa</h1>');
                res.end();
        }
})
const PORT=3000;
server.listen(PORT, () => {
        console.log(`Server http://localhost:${PORT} da ishlamoqda`);
    });