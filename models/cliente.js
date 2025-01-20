import Sequelize from "sequelize";
import db from "../config/db.js";

export const Cliente = db.define('Cliente', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Asegura que el `id` sea autoincremental
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,  // Asegura que el campo `nombre` no sea nulo
    },
    apellidos: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    correoelectronico: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // Para asegurar que no haya correos duplicados
    },
    telefono: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    tableName: 'clientes', // Asegúrate de que la tabla se llame 'clientes'
    // timestamps: false, // Si no deseas los campos `createdAt` y `updatedAt`
});

// Sincroniza la base de datos
Cliente.sync({ alter: true }).catch(console.error);


