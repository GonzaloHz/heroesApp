const express = require("express")
const { validationResult } = require("express-validator")

const createUser = (req, res)=>{

    try{
    
    // if(req.body.name.length<5){
    //     return res.status(400).json({
    //         ok: false,
    //         msg:"The name is not valid"
    //     })
    // }
    //Error with expressValidator
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: error.mapped()
        })
    }

    res.json({
        msg: "register",
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    }catch(error){
        console.log(error)
    }
}

const userLogin = (req, res)=>{
    
    try{
        //Error with expressValidator
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({
                ok: false,
                errors: error.mapped()
            })
    }
        const { email, password } =req.body;

        res.json({
            ok: true,
            msg: "login",
            email,
            password
        })
    }catch(error){
        console.log(error)
    }
}

const renewToken = (req, res)=>{
    res.json({
        ok:true,
        msg: "renew"
    })
}

module.exports= {
    createUser,
    userLogin,
    renewToken
}