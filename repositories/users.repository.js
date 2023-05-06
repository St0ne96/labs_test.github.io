const { User } = require('../models'); 
const sequelize = require("sequelize");
// const Op = sequelize.Op;

class UserRepository {

    findAllUser = async () => {
        const users = await User.findAll(); 

        return users; 
    };

    createUser = async (userId,ID,pwd,userName,userEmail,userPhone,userAddress,userPoint,userGrade) => {
        const createUserData = await User.create({
            userId,
            ID,
            pwd,
            userName,
            userEmail,
            userPhone,
            userAddress,
            userPoint,
            userGrade
        });

        return createUserData; 
    };

    // 유저 메인 페이지 
    findUserById = async (userId) => {
        const user = await User.findByPk(userId);  
    
        return user;
    };

    
}


module.exports = UserRepository;




  