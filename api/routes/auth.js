const express = require("express");
const { createUser,
        userLogin, 
        renewToken
    } = require("../controllers/auth");
const router = express.Router();

router.post("/new", createUser )

router.post("/", userLogin)

router.get("/renew", renewToken)

module.exports = router;