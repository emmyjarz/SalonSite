module.exports = function (sequelize, DataTypes) {
    var Email = sequelize.define("Email", {
        name: {

            type: DataTypes.STRING,
            // allowNULL: false
        }
    });

    Email.associate = (models) => {
        Email.belongsToMany(models.Staff, { through: models.Staff_Email });
    };
    return Email;
};