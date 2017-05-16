module.exports = function(sequelize, Sequelize) {

    var User = sequelize.define('user', {

            id: {
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            firstname: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },

            lastname: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },

            username: {
                type: Sequelize.TEXT,
                allowNull: true,
                validate: {
                    notEmpty: true
                }
            },

            password: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },

            email: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    isEmail: true
                }
            },

            phoneNumber: {
                type: Sequelize.STRING,
                allowNull: true

            },

            photo: {
                type: Sequelize.STRING
            },


            about: {
                type: Sequelize.TEXT
            },

            last_login: {
                type: Sequelize.DATE
            },

            status: {
                type: Sequelize.ENUM('active', 'inactive'),
                defaultValue: 'active'
            }


        });

    return User;

};
