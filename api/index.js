const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();
//Express Server
const app = express();
//Database
dbConnection();
//Public Directory
app.use( express.static("public") );
//Body Parser
app.use( express.json() )


//Routes
app.use("/api/auth", require('./routes/auth'));

app.listen(process.env.PORT, ()=>
console.log( `Server on port ${process.env.PORT}` )
)