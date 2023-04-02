const req = require("express/lib/request")
const res = require("express/lib/response");
const { dirs } = require("nodemon/lib/config");
var requestCount = 1;


const getResults = (req, res) => {
    let currentRequestCount = 0
    let Cookies = JSON.stringify(req.cookies)
    if (parseInt(req.cookies.cookieCounter)){
        currentRequestCount = parseInt(req.cookies.cookieCounter);
    }else{
        requestCount = 1;
    }
    console.log( ` requestCount: ${currentRequestCount} `);
    if(currentRequestCount>=process.env.LIMIT){
res.status(429).setHeader("Retry-After",process.env.COOKIELIFE).cookie('cookieCounter',requestCount++,{maxAge:process.env.COOKIELIFE}).sendFile(__dirname+'/htmlResponses/errorPage.html');
console.log( `XXXXXXXXXXXXX Request blocked XXXXXXXXXXXXXXXXXX`);
}else{
        res.cookie('cookieCounter',requestCount++,{maxAge:process.env.COOKIELIFE}).sendFile(__dirname+'/htmlResponses/resultPage.html');
    }
};
module.exports = {getResults};