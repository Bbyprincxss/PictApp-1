const {DataTypes, Model} = require('sequelize');
const db = require('../config/database');

class Follower extends Model {
    static id
    static timestamp
    static followerId
    static followedId
}   

Follower.init({
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false   
    },
    followerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    followedId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,  
    modelName: 'Follower',
    tableName: 'follower',
    timestamps: false
});

Follower.associate = (models) => {
    Follower.belongsTo(models.User, { foreignKey: 'followerId', as: 'follower' });
    Follower.belongsTo(models.User, { foreignKey: 'followedId', as: 'followed' });
}

Follower.prototype.toJSON = function () {
    const values = {...this.get()};
    return values;
}

module.exports = Follower;

