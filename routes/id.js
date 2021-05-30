const router = require('express').Router();
const Aluno = require('../controller/aluno');

function isIdValido(id) {
	return /^[0-9]/.test(id);
}

async function validaAluno(req, res) {
	if (!isIdValido(req.params.id)) {
		res.status(400).send({
			error: 'O id deve ser um inteiro maior positivo',
		});
	}

	let aluno = await Aluno.pesquisarPorId(req.params.id);

	if (!aluno) {
		res.status(404).send({
			error: `Nenhum aluno com o id ${req.params.id} encontrado`,
		});
	}

	return aluno;
}

router.get('/:id', async (req, res) => {
	const aluno = await validaAluno(req, res);
	res.send({ aluno: aluno });
});

router.put('/:id', async (req, res) => {
	const aluno = await validaAluno(req, res);
	const { nome, rga, curso, situacao } = req.body;
	const request = { nome, rga, curso, situacao };

	Object.keys(request).map((key) => {
		if (request[key]) aluno[key] = request[key];
	});

	res.send({ aluno: await aluno.save() });
});

router.delete('/:id', async (req, res) => {
	const aluno = await validaAluno(req, res);
	res.send({ aluno: await aluno.destroy() });
});

router.post('/:id', (req, res) => {
	res.status(405).send({
		error: 'Método POST não é permitido',
	});
});

module.exports = router;
