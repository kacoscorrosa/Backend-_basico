const Role = require('../models/role');
const User = require('../models/user');

const isValidRole = async(rol = '') => {
    rol = rol.toLowerCase();

    const existRol = await Role.findOne({ rol });
    if (!existRol) {
        throw new Error('Invalid Role');
    }
}

const validEmail = async(email = '') => {

    const existEmail = await User.findOne({email});
    if (existEmail) {
        throw new Error('The email is already registered');
    }
}

const validateUserByID = async(id = '') =>  {

    const existUserByID = await User.findById(id);
    if ( !existUserByID ) {
        throw new Error('Invalid ID');
    }
}  

module.exports = {
    isValidRole,
    validEmail,
    validateUserByID
}