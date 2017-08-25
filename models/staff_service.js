module.exports = function (sequelize, DataTypes) {
    var Staff_service = sequelize.define("Staff_service", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        performDate: {
            type: DataTypes.DATE,
        }
    });
    return Staff_service;
};