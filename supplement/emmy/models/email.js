module.exports = function (sequelize, DataTypes) {
    var Email = sequelize.define("Email", {
        email: {
            type: DataTypes.STRING,
            isUnique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    });
    Email.associate = function (models) {
        Email.belongsTo(models.Salon, {
            foreignKey: {
                allowNull: false
            }
        });
        Email.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false
            }
        });
        Email.belongsTo(models.Staff, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Email;
};