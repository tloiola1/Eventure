//Dependencies
module.exports = function(sequelize, DataTypes) {
  var events = sequelize.define("events", {
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    location:{
      type: DataTypes.STRING,
      allowNull: false
    },
    dateTime:{
      type: DataTypes.STRING,
      allowNull: false
    },
    numberOfAttends:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  // events.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   events.belongsTo(models.users, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return events;
};