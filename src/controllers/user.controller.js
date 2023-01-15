const userModel = require('../models/model.user');
const UserService = require('../services/user.services')
const { validationResult } = require('express-validator');
class Users {
    async getAllUsers(req, res) {
        try {
            const users = await UserService.getAllUser();
            return res.json({ data: users.data, total_count: users.count })
        }
        catch (err) {
            return res.status(500).json({ error: err.message })
        }
        // console.log(req);

    }
    async getUserById(req, res) {
        try {
            const { id } = req.params;
            const user = await UserService.getUserById(id)
            if (user.message) {
                return await res.json({ message: 'user not fount or this user create' })
            }
            return res.json(user);
        } catch (err) {
            return await res.json({ error: err })
            console.log(err)
        }

    }
    async createUser(req, res) {
        console.log(req.body);
        // return res.json(req.body)
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() })
        }
        return res.status(200).json({ data: await UserService.createUser(req.body) })

    }
    async updateUser(req, res) {
        try {
            const error = validationResult(req);
            const { id } = req.params;
            if (!error.isEmpty()) return res.status(400).json({ error: error.array() })
            const user = await UserService.updateUser(id, req.body)
            const userId = await UserService.getUserById(id)
            return res.status(200).json(userId)
        } catch (err) {
            return await res.json({ message: 'Internal Server error' })
        }

    }
    async deleteUser(req, res) {
        const { id } = req.params;
        console.log(id)
        const userById = await UserService.deleteUser(id);
        return await res.json({ userById })



    }
};
module.exports = new Users()