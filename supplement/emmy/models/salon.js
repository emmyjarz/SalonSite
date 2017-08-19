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
   
    Salon.hasMany(models.Email, {
      onDelete: "cascade"
    });
    Salon.hasMany(models.Phone, {
      onDelete: "cascade"
    });
  };




  return Salon;
};