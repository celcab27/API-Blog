const routes = require('express').Router();
const { getPosts, getPost, postAPost, deletePost, updatePost  } = require('./controllers/post');

routes.get('/api/posts', getPosts );
routes.get('/api/posts/:id', getPost );
routes.post('/api/posts', postAPost)
routes.delete('/api/posts/:id', deletePost); 
routes.patch('/api/posts/:id', updatePost);



module.exports = routes;