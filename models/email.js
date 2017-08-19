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
        Email.hasMany(models.Salon, {
            onDelete: "cascade"
        });
        Email.hasMany(models.Customer, {
            onDelete: "cascade"
        });
        Email.hasMany(models.Staff, {
            onDelete: "cascade"
        });
    };
    return Email;
};