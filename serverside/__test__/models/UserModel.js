
const { Sequelize } = require("sequelize");
const db = require("../config/Database");


const { DataTypes } = Sequelize;

var Users = db.define('users', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    uid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
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
    staffid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
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


    staffStatus: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },

    department: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },





    password: {
        type: DataTypes.STRING,
         allowNull: true,
        validate: {
            notEmpty: false,
        }
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,
        }
    },


    ipAddress: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },


    location: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },


    creator: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },

    createdTime: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },
    actionPerformed: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,
        }
    },


    updatorIpAddress: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,
        }
    },


    updatorLocation: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,
        }
    },


    updator: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },

    updatedTime: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },
    updatePerformed: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },


    verifytoken: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,
        }
    },
    token: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,
        }
    },

    passwordResetExpireTime: {
        type: DataTypes.DATE
    }



}, {
    freezeTableName: true
});

module.exports = Users;