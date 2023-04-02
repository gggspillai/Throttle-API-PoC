
const env = require('dotenv');
env.config({path:'./.env'});
const port = process.env.PORT;
const app = require('./app');

app.listen(port,()=>{
    console.log(`Listening ${port}`);
})
