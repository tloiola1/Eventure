module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    // Giving the User model a name of type STRING
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len:[1,30]
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      len:[1,30]
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      len:[1,30]
    },
    category:{                 // this is the category of events the user would like to attend to to be linked to events
      type: DataTypes.STRING,  // are available.
      allowNull: true,         // maybe we could create up to three categories, show user categories saved andd use function find one
      default: null
    }                          // that would match user option
  });

  // users.associate = function(models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   users.hasMany(models.events, {
  //     onDelete: "cascade"
  //   });
  // };

  return users;
};
