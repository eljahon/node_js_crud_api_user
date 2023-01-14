const UserModel = require('../models/model.user')
class UserService {
    async getAllUser() {
        const data =await UserModel.find();
        const count =await UserModel.find().count();
        // const total_count = data.count()
        return await {data,count};
    }
    async getUserById(id) {
        try {
            return await UserModel.findById(id)
        } catch(err) {
            return err
        }
    }
    async createUser(user) {
        console.log('model ==>>', user);
        return await UserModel.create(user)
    }
    async updateUser(id, newdata) {
        try {
            console.log(newdata)
                  return await UserModel.findByIdAndUpdate(id, newdata)
        } catch(err) {
            return err
            
        }
    }
    async deleteUser(id) {
        return await UserModel.findByIdAndDelete(id)
    }

};
module.exports = new UserService();