module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        product_line: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        product_sku: {
            type: DataTypes.INTEGER,
            allowNULL: true,
            validate: {
                isInt: true
            }
        },
        product_name: {
            type: DataTypes.STRING,
            allowNULL: false

        },
        product_description: {
            type: DataTypes.TEXT,
            allowNULL: true
        },
        product_size:{
            type: DataTypes.STRING,
            allowNULL: true
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNULL: false,
            validate: {
                isDecimal: true
            }
        },
        stock_quantity: {
            type: DataTypes.INTEGER,
            allowNULL: false,
            validate: {
                isInt: true
            }
        },
        cost: {
            type: DataTypes.DECIMAL(10, 2),
            allowNULL: false,
            validate: {
                isDecimal: true
            }
        },
        vendor: {
            type: DataTypes.STRING,
            allowNULL: true

        }
        
    });

    Product.associate = (models) => {
        Product.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Product;
}
