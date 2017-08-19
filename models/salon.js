module.exports = function(sequelize, DataTypes) {
  var Salon = sequelize.define("Salon", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    password:{
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type:DataTypes.TEXT
    }, 
    photo:{
      type:DataTypes.STRING,
      }
    });

  Salon.associate =  (models)=> {
   
    Salon.belongsTo(models.Email, {
      foreignKey: {
        allowNull: false
      }
    });
    Salon.belongsTo(models.Phone, {
      foreignKey: {
        allowNull: false
      }
    });
    Salon.belongsTo(models.Address, {
      foreignKey: {
        allowNull: false
      }
    });
  };




  return Salon;
};