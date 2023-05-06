const express = require('express');
const app = express();
const router = require('./routes/users.routes');
app.use(express.json()); 

require("dotenv").config();
app.get('/',(req,res) => {
    res.send('Hello 꿀단지!');
}); 

app.use('/api',router);
app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT}으로 포트가 열렸어요`);
  });

module.exports = app; 