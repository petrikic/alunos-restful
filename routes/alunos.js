const router = require('express').Router();
const id = require('./id');
const Aluno = require('../controller/aluno');

function isRgaValido(rga) {
	return /^\d{4}.\d{4}.\d{3}-\d{1}$/.test(rga);
}

router.get('/', async (req, res) => {
	const limite = req.body.limite ? req.body.limite : 25;
	const pagina = req.body.pagina ? req.body.pagina : 1;
	const nome = req.body.nome ? req.body.nome : '';

	if (limite < 1) {
		res.status(400).send({
			error: 'O limite deve ser um inteiro maior que zero',
		});
	}

	if (pagina < 1) {
		res.status(400).send({
			error: 'A página deve ser um inteiro maior que zero',
		});
	}

	const alunos = await Aluno.pesquisar(nome, pagina, limite);

	if (alunos.rows.length <= 0)
		res.status(404).send({ error: 'Nenhum aluno encontrado' });

	res.status(200).send({ alunos: alunos.rows });
});

router.post('/', async (req, res) => {
	const { nome, rga, curso, situacao } = req.body;
	const aluno = { nome, rga, curso, situacao };

	console.log(req.body)
	console.log(req.params)

	if (!aluno.rga) {
		res.status(400).send({
			error: 'O RGA do aluno é obrigatório',
		});
	}

	if (!isRgaValido(aluno.rga)) {
		res.status(400).send({
			error: 'O RGA deve estar no formato NNNN.NNNN.NNN-N',
		});
	}

	if (!aluno.nome) {
		res.send({
			error: 'O nome do aluno é obrigatório',
		});
	}

	if (await Aluno.pesquisarPorRga(aluno.rga)) {
		res.status(400).send({
			error: 'Já existe um aluno cadastrado com o mesmo RGA',
		});
	}

	res.status(201).send(await Aluno.inserir(aluno));
});

router.put('/', (req, res) => {
	res.status(405).send({
		error: 'Método PUT não é permitido',
	});
});

router.delete('/', (req, res) => {
	res.status(405).send({
		error: 'Método DELETE não é permitido',
	});
});

router.use('/', id);

module.exports = router;
