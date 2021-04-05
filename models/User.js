module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  Users.associate = (models) => {
    Users.hasMany(models.Posts,
      { foreignKey: 'userId', as: 'posts' });
  };

  return Users;
};
