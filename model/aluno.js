const database = require('../database/db');
const Sequelize = require('sequelize');

const Aluno = database.define(
	'aluno',
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		rga: {
			type: Sequelize.STRING(15),
			allowNull: false,
			unique: true,
			validate: {
				is: /^\d{4}.\d{4}.\d{3}-\d{1}$/,
			},
		},
		nome: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		curso: Sequelize.STRING,
		situacao: {
			type: Sequelize.DataTypes.ENUM('ativo', 'inativo'),
			defaultValue: 'ativo',
		},
		registrado_em: {
			type: Sequelize.DATE,
			defaultValue: Sequelize.NOW,
		},
	},
	{ timestamps: false }
);

module.exports = Aluno;
