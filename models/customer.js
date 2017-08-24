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
            type: DataTypes.DATE,
        },
        photo: {
            type: DataTypes.STRING,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Customer.associate = (models) => {
        Customer.belongsTo(models.Email, {
            foreignKey: {
                allowNull: false
            }
        });
        Customer.belongsTo(models.Phone, {
            foreignKey: {
                allowNull: false
            }
        });
        Customer.belongsTo(models.Address, {
            foreignKey: {
                allowNull: false
            }
        });
    };
 
    return Customer;
}