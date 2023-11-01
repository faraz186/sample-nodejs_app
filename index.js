const express = require('express');
const app = express();
app.get('/', (req,res)=>{
 res.send('hello from app runner!');
});
app.listen(8080);
