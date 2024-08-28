const express = require('express');
const express = require('mysql2');
const app = express();
const port = 3000;;
app.use (express.json());


app.listen(PORT,()=>{
    console.log(app)
})