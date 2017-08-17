module.exports = function (sequelize, DataTypes) {
    var Staff = sequelize.define("Staff", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        preferred_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        birthday:{
            type: DataTypes.STRING,
            allowNull: true
        },
        address:{
            type: DataTypes.STRING,
            allowNull: true
        },
        phone_number: {
            type: DataTypes.INT,
            allowNull: false
        }, 
        emergency_contact_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        emergency_contact_phone:{
            type: DataTypes.STRING,
            allowNull: false
        },
        comment:{
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Staff;
}