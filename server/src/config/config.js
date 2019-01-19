module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'easyag',
    user: process.env.DB_USER || 'easyag',
    password: process.env.DB_PASSWORD || 'easyag',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './easyag.sqlite',
      operatorsAliases: false,
    },
  },
};
