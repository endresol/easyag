module.exports = (sequelize, DataTypes) => {
  const Competition = sequelize.define('Competition', {
    name: DataTypes.STRING,
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE,
    registrationdeadline: DataTypes.DATE,
    description: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    club_id: DataTypes.INTEGER,
  });

  return Competition;
};
