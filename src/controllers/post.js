const {Post} = require('./../db');

module.exports = {
    async getPosts (req, res)
    {
        const posts = await Post.findAll();

        res.json(posts);
    },

    async postAPost(req, res)
    {
        const {title, content, category, image, creationDate} = req.body;

        if(title, content, category, image, creationDate)
        {
            const post = Post.create(req.body);

            res.json(post);
        }
        else
        {
            res.json("Error. Faltan propiedades");
        }
    }
}