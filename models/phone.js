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
        Phone.hasMany(models.Salon, {
            onDelete: "cascade"
        });
        Phone.hasMany(models.Customer, {
            onDelete: "cascade"
        });
        Phone.hasMany(models.Staff, {
            onDelete: "cascade"
        });
    };
    return Phone;
};