module.exports = function (sequelize, DataTypes) {
    var Phone = sequelize.define("Phone", {
        mobile: {
            type: DataTypes.INTEGER,
            validate: {
                isInt: true
            }
        },
        home: {
            type: DataTypes.INTEGER,
            validate: {
                isInt: true
            }
        },

    });

    Phone.associate = function (models) {
        Phone.belongsTo(models.Salon, {
            foreignKey: {
                allowNull: false
            }
        });
        Phone.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false
            }
        });
        Phone.belongsTo(models.Staff, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Phone;
};