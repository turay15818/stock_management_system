const { Sequelize } = require ("sequelize");
const db = require ("../config/Database");
const Users = require ("./UserModel");

const { DataTypes } = Sequelize;

var List = db.define('list', {
    uid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
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

        }
    },
    staffName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

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

    // userId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     validate: {
    //         notEmpty: true
    //     }
    // }
},



    {
        freezeTableName: true
    });

Users.hasMany(List);
List.belongsTo(Users, { foreignKey: 'userId' });

module.exports = List;

// // (async () => {
// //     await db.sync();
// // })();