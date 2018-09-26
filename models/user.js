module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    caloricGoal: DataTypes.INTEGER
  });

  User.associate = models => {
    User.hasMany(models.allegry, {
      onDelete: "cascade"
    });
    User.hasOne(models.mealPlan);
  };

  return User;
};