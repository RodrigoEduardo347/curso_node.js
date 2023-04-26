const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemvc2", "root", "", {
    host: "localhost",
    dialect: "mysql",
})

try {
    sequelize.authenticate();
    console.log("Conectado com sucesso!");
} catch (error) {
    console.log(`Não foi possível se conectar ao banco de dados! Erro: ${error}`);
}

module.exports = sequelize 