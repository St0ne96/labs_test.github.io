const UserService = require('../services/users.service');

class Usercontroller {
  UserService = new UserService();

    getUsers = async (req, res, next) => {
      const users = await this.UserService.findAllUser(); 

      res.status(200).json({ data: users });
    };

    createUser = async (req, res, next) => {
      const {userId,ID,pwd,userName,userEmail,userPhone,userAddress,userPoint,userGrade} = req.body;
      const createUserData = await this.UserService.createUser(
        userId,
        ID,
        pwd,
        userName,
        userEmail,
        userPhone,
        userAddress,
        userPoint,
        userGrade,
      );

      res.status(201).json({ data: createUserData });
    }; 

    // 유저 메인페이지 
    getUserById = async (req, res, next) => {
      //const { id } = res.locals.user;
      const  id  = 1;
      const user = await this.UserService.findUserById(id);
      const userName = user.userName;
      const userPoint = user.userPoint;
      
      res.render('user', { userName, userPoint});

      // res.status(200).json({data: user}); 
    };

};


module.exports = Usercontroller;