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
        bio: {
            type: DataTypes.TEXT,

        },
        station: {
            type: DataTypes.STRING,

        },
        day: {
            type: DataTypes.STRING,

        },
        hour: {
            type: DataTypes.STRING,

        },
        emergency_contact_name: {
            type: DataTypes.STRING,

        },
        emergency_contact_phone: {
            type: DataTypes.STRING,
            
        },
        comment: {
            type: DataTypes.STRING,

        }
    });
    Staff.associate = (models) => {
        Staff.belongsToMany(models.Service, {
            through: models.Staff_service
        });
        Staff.belongsTo(models.Email, {
            foreignKey: {
                allowNull: false
            }
        });
        Staff.belongsTo(models.Phone, {
            foreignKey: {
                allowNull: false
            }
        });
        Staff.belongsTo(models.Address, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Staff;
}