const Express = require('express');
const BodyParser = require('body-parser');

let PORT = process.env.PORT || 80;

const App = Express();

App.use(Express.static('./dist'));
App.use('/project', Express.static('./dist/img/projects'));

App.get('/instagram', (request, response) => {
	response.redirect('https://instagram.com/rontastic_im');
	return response.end();
});

App.get('/facebook', (request, response) => {
	response.redirect('https://facebook.com/im.rontastic');
	return response.end();
});

App.get('/artstation', (request, response) => {
	response.redirect('https://www.artstation.com/rontasticim');
	return response.end();
});


App.listen(PORT, () => console.log('Listening on port 3000'));