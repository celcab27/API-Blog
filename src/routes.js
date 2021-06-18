const routes = require('express').Router();
const { getPosts, postAPost, deletePost, updatePost  } = require('./controllers/post');

routes.get('/api/posts', getPosts );
routes.get('/api/posts/:post', postAPost );
routes.post('/api/posts', postAPost)
routes.delete('/api/posts/:id', deletePost); 
routes.patch('/api/posts/:id', updatePost);



module.exports = routes;