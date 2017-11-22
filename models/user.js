module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the User model a name of type STRING
    name: {
      type: DataTypes.STRING
      allowNull: false,
      len:[1,30]
    },
    email: {
      type: DataTypes.STRING
      allowNull: false,
      len:[1,30]
    },
    password: {
      type: DataTypes.STRING
      allowNull: false,
      len:[1,30]
    },
    category:{                 // this is the category of events the user would like to attend to to be linked to events
      type: DataTypes.STRING   // are available.
      allowNull: false         // maybe we could create up to three categories, show user categories saved andd use function find one
    }                          // that would match user option
  });

  User.associate = function(models) {
    // Associating User with Events
    // When an User is deleted, also delete any associated Events
    User.hasMany(models.Event, {
      onDelete: "cascade"
    });
  };

  return User;
};
