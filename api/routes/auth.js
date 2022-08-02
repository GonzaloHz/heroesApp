const express = require("express");
const { check } = require("express-validator")
const { createUser,
        userLogin, 
        renewToken
    } = require("../controllers/auth");
const { fieldsValidate } = require("../middlewares/fieldsValidate");

const router = express.Router();

router.post(
    "/new", 
    //middlewares
    [
        check("name", "The name is required").not().isEmpty(),
        check("password", "The password is required").isLength({min:6}),
        check("email", "The email is required").isEmail(),
        fieldsValidate
    ], 
    createUser )

router.post(
    "/", 
    //middlewares
    [
        check("password", "The password is required").isLength({min:6}),
        check("email", "The email is required").isEmail(),
        fieldsValidate
    ], 
    userLogin)

router.get("/renew", renewToken)

module.exports = router;