const req = require("express/lib/request")
const res = require("express/lib/response")
var requestCount = 1;


const getResults = (req, res) => {
    let currentRequestCount = 0
    let Cookies = JSON.stringify(req.cookies)
    if (parseInt(req.cookies.cookieCounter)){
        currentRequestCount = parseInt(req.cookies.cookieCounter);
    }else{
        requestCount = 1;
    }
    console.log(currentRequestCount);
    console.log( `Cookies ${Cookies} requestCount: ${requestCount} `);
    if(currentRequestCount>=process.env.LIMIT){
res.status(429).cookie('cookieCounter',requestCount++,{maxAge:process.env.COOKIELIFE}).send('Maximum limit exceeds');
    }else{
        res.cookie('cookieCounter',requestCount++,{maxAge:process.env.COOKIELIFE}).send(`Welcome`);
    }
};
module.exports = {getResults};