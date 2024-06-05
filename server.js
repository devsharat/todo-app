import https from 'https';
import app from './app.js';
import fs from 'fs'


let server=https.createServer({
    cert:fs.readFileSync("./cert.pem"),
    key:fs.readFileSync("./key.pem")
},app);


server.listen(5000,(err)=>{
    if(err)console.log(err);
    console.log("server is on 5000...");
})