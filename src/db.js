const Sequelize = require('sequelize');

const postModel = require('./models/post');

const sequelize = new Sequelize('i1nsihyoKj', 'i1nsihyoKj', 'xr0ptXvElh', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

const Post = postModel(sequelize, Sequelize);

sequelize.sync({force: false})
.then( () =>
{
    console.log('Tables are sincronized');
})

module.exports = {Post}