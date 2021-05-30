const router = require('express').Router();
const alunos = require('./alunos');

router.use('/alunos/', alunos);

router.use((req, res, next) => {
	res.status(404).send({ error: 'Serviço não encontrado' });
});

module.exports = router;
