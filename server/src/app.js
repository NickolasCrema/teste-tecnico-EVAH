import express from "express";
import jsonwebtoken from 'jsonwebtoken';
import bodyParser from "body-parser";
import cors from 'cors';

process.env.SECRET = '123';

const app = express();
app.use(cors());

app.post('/login', bodyParser.json(), (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if(email === '123@gmail.com' && password === '12345'){
        const id = 1
        const token = jsonwebtoken.sign({id}, process.env.SECRET, {
            expiresIn: 300
        });
        res.status(200).send({"auth": true, "user": {"id": id, "name": 'usuario1', "email": req.body.email}, "token": token});
    }
    res.status(200).send({"auth": false, "message": "Login ou senha inválido! Verifique e tente novamente."})
})

export default app;