const express = require("express")

const User = require("../models/User")

const createUser = async(req, res)=>{
    
    try{
    
    let user = await User.findOne({email:req.body.email})
    if(user){
        return res.status(400).json({
            ok:false,
            msg:"Mail is already exist"
        })
    }

    user = new User( req.body);
    await user.save();

    res.status(201).json({
        ok:true,
        uid: user.id,
        name: user.name
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