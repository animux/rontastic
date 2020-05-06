const Express = require('express');
const BodyParser = require('body-parser');

let PORT = process.env.PORT || 80;

const App = Express();

App.use(Express.static('./dist'));
App.use('/project', Express.static('./dist/img/projects'));

App.listen(PORT, () => console.log('Listening on port 3000'));