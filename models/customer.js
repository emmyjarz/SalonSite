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
        birthday: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            isUnique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Customer.associate = (models) => {
        Customer.hasMany(models.Appointment, {
            onDelete: "cascade"
        });
    };

    Customer.associate = (models) => {
        Customer.hasMany(models.Password, {
            onDelete: "cascade"
        });
    };

    Customer.associate = (models) =>{
        Customer.hasMany(models.Product,{
            onDelete:"cascade"
        });
    };
    
    Customer.associate = (models) => {
        Customer.hasMany(models.Purchase, {
            onDelete: "cascade"
        });
    };

    return Customer;
}