const UserRepository = require('../repositories/users.repository');

class UserService {
    userRepository = new UserRepository();

    findAllUser = async (user) => {
        const allUsers = await this.userRepository.findAllUser();
        console.log({allUsers});
        
        return allUsers.map((user) => {
            return {
                UserId: user.UserId,
                ID: user.ID, 
                pwd: user.pwd,   
                userName: user.userName,
                userEmail: user.userEmail,  
                userPhone: user.userPhone,   
                userAddress: user.userAddress,  
                userPoint: user.userPoint, 
                userGrade:user.userGrade,
                createdAt: user.createAt,
             };  
        }); 
    };

    createUser = async (userId,ID,pwd,userName,userEmail,userPhone,userAddress,userPoint,userGrade) => {
        const createUserData = await this.userRepository.createUser(
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

        return {
                userId: createUserData.null,
                ID: createUserData.ID,
                pwd: createUserData.pwd,
                userName: createUserData.userName,
                userEmail: createUserData.userEmail,  
                userPhone: createUserData.userPhone,   
                userAddress: createUserData.userAddress,  
                userPoint: createUserData.userPoint, 
                userGrade: createUserData.userGrade,
                createdAt: createUserData.createAt,
            }; 
    };

    // 유저 메인페이지 
    findUserById = async (userId) => {
        const findUser = await this.userRepository.findUserById(userId);

        return {
            userName: findUser.userName,
            userPoint: findUser.userPoint, 
        };
    };

}

module.exports = UserService;