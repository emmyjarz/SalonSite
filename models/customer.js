module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: true
        },
        balance: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                isDecimal: true
            }
        },
        lastvisit: {
            type: DataTypes.STRING,
        },
        photo: {
            type: DataTypes.STRING,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    // Customer.associate = (models) => {
    //     Customer.hasMany(models.Appointment, {
    //         onDelete: "cascade"
    //     });
    // };

    // Customer.associate = (models) => {
    //     Customer.hasMany(models.Password, {
    //         onDelete: "cascade"
    //     });
    // };

    // Customer.associate = (models) => {
    //     Customer.hasMany(models.Product, {
    //         onDelete: "cascade"
    //     });
    // };

    // Customer.associate = (models) => {
    //     Customer.hasMany(models.Purchase, {
    //         onDelete: "cascade"
    //     });
    // };

    return Customer;
}