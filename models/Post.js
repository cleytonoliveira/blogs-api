module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  });

  Posts.associate = (models) => {
    Posts.belongsTo(models.User,
      { foreignKey: 'userId', as: 'users' });
  };

  return Posts;
};
