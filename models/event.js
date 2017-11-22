module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    event_name: {
      type: DataTypes.STRING,
      allowNull: true,
      len:[0, 30]
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
      len:[0, 30]
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: true,
      len:[0,50]
    }
  });

  Event.associate = function(models) {
    // We're saying that a Event should belong to an User
    // A Event can't be created without an User due to the foreign key constraint
    Event.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Event;
};
