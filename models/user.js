module.exports = function (sequelize, DataTypes) {
    var users = sequelize.define("users", {
        // Giving the User model a name of type STRING
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        survey: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return users;
};
