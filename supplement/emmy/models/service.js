module.exports = function (sequelize, DataTypes) {
    var Service = sequelize.define("Service", {
        name: {

            type: DataTypes.STRING,
            // allowNULL: false
        },
        duration: {

            type: DataTypes.INTEGER,
            // allowNULL: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            // allowNULL: false,
            validate: {
                isDecimal: true
            }
        },
        cost: {
            type: DataTypes.DECIMAL(10, 2),
            // allowNULL: false,
            validate: {
                isDecimal: true
            }
        },
        photo: {
            type: DataTypes.INTEGER,
            
           
        }
    });

    Service.associate = (models) => {
        Service.belongsToMany(models.Staff, {through: models.Staff_service});
    };
    return Service;
};