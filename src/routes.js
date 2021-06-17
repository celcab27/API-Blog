const routes = require('express').Router();
const { getPosts  } = require('./controllers/post');

routes.get('/api/posts', getPosts );
routes.get('/api/posts/:post', );




module.exports = routes;