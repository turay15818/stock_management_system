const { Sequelize } = require ("sequelize");
const db = require ("../config/Database");
const Users = require ("./UserModel");

const { DataTypes } = Sequelize;

var Request = db.define('request', {
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
    staffName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [5, 100]
        }
    },


    itemName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [5, 100]
        }
    },

    descri: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,


        }
    },

    requestAt: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },
    managerApproved: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },

    directorApproved: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },


    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: false
        }
    },

// user Setting

    senderIp: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },

    senderLocation: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },


    senderAction: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },



// Manager Setting

managerName: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
        notEmpty: false,

    }
},

managerIp: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
        notEmpty: false,

    }
},


managerLocation: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
        notEmpty: false,

    }
},


managerTime: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
        notEmpty: false,

    }
},


// Director Action
directorName: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
        notEmpty: false,

    }
},


directorIp: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
        notEmpty: false,

    }
},


directorLocation: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
        notEmpty: false,

    }
},


directorTime: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
        notEmpty: false,

    }
},

// Director, Manager and User Setting End Here.

},


    {
        freezeTableName: true
    });

Users.hasMany(Request);
Request.belongsTo(Users, { foreignKey: 'userId' });

module.exports = Request;