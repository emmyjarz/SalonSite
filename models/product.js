module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        product_line: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        product_name: {
            type: DataTypes.STRING,
            allowNULL: false

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
        }
    });
    return Product;
}
