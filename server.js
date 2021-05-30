const bodyParser = require('body-parser');
const multer = require('multer')();
const app = require('express')();
const database = require('./database/db');
const root = require('./routes/root');

(async () => {
	await database.sync();
})();

app.use(bodyParser.json());
app.use(multer.array());
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);

app.use((req, res, next) => {
	res.contentType('application/json');
	next();
});

app.use('/', root);

app.listen(8080, () => console.log('Server listen on http://localhost:8080'));
