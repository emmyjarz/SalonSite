module.exports = function (sequelize, DataTypes) {
    var Address = sequelize.define("Address", {
        address1: {
            type: DataTypes.STRING,
            // allowNULL: false
        },
        address2: {
            type: DataTypes.STRING,
        },
        city:{
            type: DataTypes.STRING,
        },
        state:{
            type: DataTypes.STRING,
        },
        zip:{
            type: DataTypes.INTEGER(5),
            validate: {
                isInt: true
            }
        }

    });

    Address.associate = (models) => {
    
        
     
            Address.belongsTo(models.Salon, {
                foreignKey: {
                    allowNull: false
                }
            });
            Address.belongsTo(models.Customer, {
                foreignKey: {
                    allowNull: false
                }
            });
            Address.belongsTo(models.Staff, {
                foreignKey: {
                    allowNull: false
                }
            });
        
    };

    return Address;
};