module.exports = function (sequelize, DataTypes) {
    var Service = sequelize.define("Service", {
        name: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        duration: {
            type: DataTypes.STRING,
            allowNULL: true
        },
        member_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNULL: true,
            validate: {
                isDecimal: true
            }
        },
        nonmember_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNULL: true,
            validate: {
                isDecimal: true
            }
        },
        cost: {
            type: DataTypes.DECIMAL(10, 2),
            allowNULL: true,
            validate: {
                isDecimal: true
            }
        },
        photo: {
            type: DataTypes.STRING,
        }, 
        comment: {
            type: DataTypes.TEXT,
        }, 
    });

    Service.associate = (models) => {
        Service.belongsToMany(models.Staff, { through: models.Staff_service });
    };
    return Service;
};