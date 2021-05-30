const Aluno = require('../model/aluno');
const Sequelize = require('sequelize');
const like = Sequelize.Op.like;

async function pesquisar(nome, pagina, limite) {
	let resultado;
	try {
		resultado = await Aluno.findAndCountAll({
			where: {
				nome: {
					[like]: `%${nome}%`,
				},
			},
			limit: limite,
			offset: (pagina - 1) * limite,
		});
	} catch (error) {
		console.log(error);
	}
	return resultado;
}

async function pesquisarPorRga(rga) {
	let resultado;
	try {
		resultado = await Aluno.findOne({
			where: { rga: rga },
		});
	} catch (error) {
		console.log(error);
	}
	return resultado;
}

async function pesquisarPorId(id) {
	let resultado;
	try {
		resultado = await Aluno.findByPk(id)
	} catch (error) {
		console.log(error);
	}
	return resultado;
}

async function inserir(aluno) {
	let resultado;
	try {
		resultado = await Aluno.create(aluno);
	} catch (error) {
		console.log(error);
	}
	return resultado;
}

module.exports.pesquisar = pesquisar;
module.exports.pesquisarPorRga = pesquisarPorRga;
module.exports.pesquisarPorId = pesquisarPorId;
module.exports.inserir = inserir;
