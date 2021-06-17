const routes = require('express').Router();
const { getPosts, postAPost  } = require('./controllers/post');

routes.get('/api/posts', getPosts );
routes.get('/api/posts/:post', postAPost );
routes.post('/api/posts', postAPost)



module.exports = routes;