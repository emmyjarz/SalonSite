module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        line: {
            type: DataTypes.STRING,
             // allowNULL: false
        },
        brand: {
            type: DataTypes.STRING,
            // allowNULL: false,
           
        },
        name: {
            type: DataTypes.STRING,
            // allowNULL: false

        },
        description: {
            type: DataTypes.TEXT,
            allowNULL: true
        },
        size:{
            type: DataTypes.STRING,
            allowNULL: true
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            // allowNULL: false,
            validate: {
                isDecimal: true
            }
        },
        stock_quantity: {
            type: DataTypes.INTEGER,
            // allowNULL: false,
            validate: {
                isInt: true
            }
        },
        cost: {
            type: DataTypes.DECIMAL(10, 2),
            // allowNULL: false,
            validate: {
                isDecimal: true
            }
        },
        vendor: {
            type: DataTypes.STRING,
            allowNULL: true

        }, 
        photo: {
            type: DataTypes.STRING,
            allowNULL: true

        }
        
    });

    // Product.associate = (models) => {
    //     Product.belongsTo(models.Customer, {
    //         foreignKey: {
    //             // allowNULL: false
    //         }
    //     });
    // };
    return Product;
}
