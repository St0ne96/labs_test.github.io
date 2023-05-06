const express = require("express");
const router = express.Router();


const Usercontroller = require("../controllers/user.controller");
const usercontroller = new Usercontroller(); 



// 임시 테스트 회원가입 구현 
router.get("/register", usercontroller.getUsers);
router.post("/register", usercontroller.createUser);

// 손님 메인 페이지 
router.get("/user", usercontroller.getUserById);

module.exports = router;
