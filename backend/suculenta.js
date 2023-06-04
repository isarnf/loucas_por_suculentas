const banco = require("./db.js");
const Sequelize = require("sequelize");

const Suculenta = banco.define("suculenta", {
    id: {type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_popular: {type:Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    }, 
    nome_cientifico: {type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    },
    data_aquisicao: {type: Sequelize.DATE,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    },
    cor: {type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    }
});




module.exports = Suculenta;