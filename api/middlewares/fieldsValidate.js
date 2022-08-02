const {response} = require("express")
const { validationResult } = require("express-validator")


const fieldsValidate = (req, res= response, next) => {

    //Error with expressValidator
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: error.mapped()
        })
    }

    next();
}


module.exports={
    fieldsValidate
}