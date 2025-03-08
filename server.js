const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { sendEmailController } = require("./controllers/sendEmailController");
const path =require('path')

//dotenv configuartion
dotenv.config();

//rest object
const app = express();

//midlewares
app.use(cors());
app.use(express.json());

//static files
app.use(express.static(path.join(__dirname, './project/build')))

//routes
app.post("/api/v1/portfolio/sendEmail", sendEmailController);

app.get('*', function(req,res){
  res.sendFile(path.join(__dirname, './project/build/index.html'))
});


//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});