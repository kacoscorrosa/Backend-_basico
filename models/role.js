const { Schema, model } = require('mongoose');

const RoleSchema = Schema({
    rol: {
        type: String,
        required: [true, 'Rol is requerid']
    }
});

module.exports = model('Role', RoleSchema);