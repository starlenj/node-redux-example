import express =require("express");
import bodyParser = require('body-parser');
import dotenv = require('dotenv');
import cors = require('cors');
const app:express.Application=express();
import * as Users from './users.json';

//Server Config
dotenv.config();
const PORT = process.env.PORT || 3000;

//body-parser config
app.use(bodyParser.urlencoded({extended :false}));
app.use(bodyParser.json());

//cors app
app.use(cors());
app.get("/users",async(req,res,next)=>{
  
  res.send({ Users })
})

app.listen(PORT,()=>{ console.log(`App Listen ${PORT} `) });
