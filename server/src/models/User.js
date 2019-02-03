const bcrypt = require('bcryptjs');

function hashPassword(user) {
  const SALT_FACTOR = 10;
  if (!user.changed('password')) {
    return;
  }
  const salt = bcrypt.genSaltSync(SALT_FACTOR);
  const hash = bcrypt.hashSync(user.password, salt);
  user.setDataValue('password', hash);
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    isClub: DataTypes.BOOLEAN,
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
    },
  });

  // eslint-disable-next-line func-names
  User.prototype.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  return User;
};
