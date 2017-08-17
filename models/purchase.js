module.exports = function (sequelize, DataTypes) {
    var Purchase = sequelize.define("Purchase", {
        purchase_type: {
            //service or product
            type: DataTypes.STRING,
            allowNULL: false
        },
        name: {
            //name of product/service
            type: DataTypes.STRING,
            allowNULL: false
        },
        product_size: {
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
        quantity: {
            type: DataTypes.INTEGER,
            allowNULL: false,
            validate: {
                isInt: true
            }
        },
    });

    Purchase.associate = (models)=>{
        Purchase.belongsTo(models.Customer, {
            foreignKey:{
                allowNull: false
            }
        });
    };
    return Purchase;
};