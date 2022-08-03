const express = require("express")

const User = require("../models/User")

const createUser = async(req, res)=>{

    
    try{
    
    const user = new User( req.body);
    await user.save();

    res.json({
        msg: "register",
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:"Check the characters"
        })
    }
}

const userLogin = (req, res)=>{
    
    try{

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