const {Post} = require('./../db');

module.exports = {
    async getPosts (req, res)
    {
        const posts = await Post.findAll(
            {
                attributes: ['id', 'title', 'category']
            }
        );

        res.json(posts);
    },

    async postAPost(req, res)
    {
        const {title, content, category, image, creationDate} = req.body;

        if(title && content && category && image && creationDate)
        {
            const post = Post.create(req.body);

            res.json(post);
        }
        else
        {
            res.json("Error. Faltan propiedades");
        }
    },

    async updatePost(req, res)
    {
            const update = req.body;
            Post.update(
              update,
              {
                where: { id: req.params.id },
              }
            )
            .then( () => {
                res.json('El post ha sido actualizado correctamente');
            })
            .catch( (err) =>
            {
                console.log(err);
                res.json({Error: err})
            })          
    },

    async deletePost(req, res)
    {
        await Post.destroy({
            where: {id: req.params.id}
        });
        
        res.json({Succes: 'Post has been deleted'});
    }
}