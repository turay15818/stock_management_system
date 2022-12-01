const { Sequelize } = require ("sequelize");
const db = require ("../config/Database");
const Users = require ("./UserModel");

const { DataTypes } = Sequelize;

var LoginReset = db.define('loginReset', {
    uid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    staffid: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    staffName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [5, 100]
        }
    },


    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },

    ipAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,


        }
    },

    loginTime: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },

    location: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },

    
},


    {
        freezeTableName: true
    });

Users.hasMany(LoginReset);
LoginReset.belongsTo(Users, { foreignKey: 'userId' });

module.export= LoginReset;