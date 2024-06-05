import express from 'express';
import { matchedData, query,validationResult } from 'express-validator';
import helmet from 'helmet';

let app=express()

app.use(helmet())
app.use(express.json());

app.get('/hello',query(["person","age"]).notEmpty().escape(),(req, res) => {
    let result=validationResult(req)
    if(result.isEmpty()){
        let data=matchedData(req)
        console.log("data",data);
        return res.send(`Hello, ${data.person} your age is ${data.age}!`);
    }
    res.json({
        message:result.array()[0].msg
    })
});

export default app;