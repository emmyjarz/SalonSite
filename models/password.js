module.exports = function (sequelize, DataTypes) {
    var Password = sequelize.define("Password", {
        password_u: {
            type: DataTypes.STRING,
            allowNull: false
        }
   
        
    });
    Password.associate = (models) =>{
        Password.belongsTo(models.Customer,{
            foreignKey:{
                allowNull: false
            }
        });
    };
    return Password;
};