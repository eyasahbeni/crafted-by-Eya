// models/TechStack.js
module.exports = (sequelize, DataTypes) => {
    const TechStack = sequelize.define('TechStack', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      tableName: 'tech_stack',
      timestamps: false,
    });
  
    return TechStack;
  };
  