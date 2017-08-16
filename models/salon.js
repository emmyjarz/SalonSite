module.exports = function(sequelize, DataTypes) {
  var Salon = sequelize.define("salons", {
    salon_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true
  });

//   Burger.associate = function(models) {
//     Burger.belongsTo(models.customers, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

  return Salon;
};