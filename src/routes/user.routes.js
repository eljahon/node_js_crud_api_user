const express = require('express')
const router = express.Router();
const {UsersValidation} = require('../validations/user.validation')
const {getAllUsers, getUserById,createUser, updateUser, deleteUser} = require('../controllers/user.controller');
const routerName = '/user';
router.get(routerName,getAllUsers);
router.get(`${routerName}/:id`, getUserById);
router.post(routerName, UsersValidation(), createUser);
router.put(`${routerName}/:id`,UsersValidation(), updateUser)
router.delete(`${routerName}/:id`, deleteUser);

module.exports = router;
