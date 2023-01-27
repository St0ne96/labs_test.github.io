const express = require("express");
const router = express.Router();


const Usercontroller = require("../controllers/user.controller");
const usercontroller = new Usercontroller(); 



// 임시 테스트 회원가입 구현 
router.get("/customeruser", usercontroller.getUsers);
router.post("/customeruser", usercontroller.createUser);


module.exports = router;
