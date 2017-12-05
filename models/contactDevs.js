//Dependencies
module.exports = function(sequelize, DataTypes) {
  var contacts = sequelize.define("contacts", {
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false
    },
    comment:{
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  // contacts.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   contacts.belongsTo(models.users, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return contacts;
};