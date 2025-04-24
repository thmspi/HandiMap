const { Sequelize } = require("sequelize");
// Connect to your MySQL database in XAMPP/phpMyAdmin
const sequelize = new Sequelize("HandiMap", "root", "Ammouna1012", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  logging: false,
  define: {
    timestamps: false,
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to MySQL:", error);
  }
})();

module.exports = sequelize;
