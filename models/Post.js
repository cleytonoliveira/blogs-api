module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  });

  Posts.associate = (models) => {
    Posts.belongsTo(models.Users,
      { foreignKey: 'userId', as: 'posts' });
  };

  return Posts;
};
