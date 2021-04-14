module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    timestamps: false,
  });

  Posts.associate = (models) => {
    Posts.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return Posts;
};
