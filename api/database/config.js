const mongoose = require("mongoose")

const dbConnection = () => {
    try{
        mongoose.connect(process.env.DB_CNN).then(console.log("DB Online"))
    }catch(error){
        console.log(error)
        throw new Error("Error at the database initialization");
    }
}

module.exports={
    dbConnection
}