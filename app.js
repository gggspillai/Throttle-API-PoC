const express = require('express');
const app = express();
const cookies = require('cookie-parser');
const Router = require('../Throttle-API-PoC/route/userRoute');
const throattleRouter = new Router().getRouter();
const cors = require('cors');

app.use((req, res, next) => {
    let send = res.send;
    console.log(req.path);
   res.send = c => {
        console.log(`Code: ${res.statusCode}`);
        console.log("Body: ", c);
        res.send = send;
        return res.send(c);
    }
    next();
});

app.use(cookies());
app.use(
    cors({
      credentials: true,
      origin: `http://localhost:${process.env.PORT}`,
      optionsSuccessStatus: 200,
    })
  );
app.get("/about",(req,res)=>{
    res.send("This is a Throttle  API");
});

app.use('/throttle',throattleRouter)

module.exports =app;
