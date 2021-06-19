const { Post } = require("./../db");

module.exports = {
  async getPosts(req, res) {
    var posts = await Post.findAll({
      attributes: ["id", "title", "image", "category", "creationDate"],
    });

    posts = posts.sort((a, b) => b.creationDate > a.creationDate);
    res.json(posts);
  },

  async postAPost(req, res) {
    const { title, content, category, image, creationDate } = req.body;

    if (title && content && category && image && creationDate) {

      const imageValidation = validarImagen(image);

      if (!imageValidation) {
        console.log("Imagen no validada");
        res.json("Error. El dato ingresado no es una imagen");
      } else {
        const post = Post.create(req.body);
        res.json({ Post: post });
      }
    } else {
      res.json("Error. Faltan propiedades");
    }
  },

  async updatePost(req, res) {
    const update = req.body;
    Post.update(update, {
      where: { id: req.params.id },
    })
      .then(() => {
        res.json("El post ha sido actualizado correctamente");
      })
      .catch((err) => {
        console.log(err);
        res.json({ Error: err });
      });
  },

  async deletePost(req, res) {
    await Post.destroy({
      where: { id: req.params.id },
    });

    res.json({ Succes: "Post has been deleted" });
  },
};

function validarImagen(url) {
  const regExp = /\.(jpg|png|)$/i;
  if (!regExp.test(url)) {
    return false;
  } else {
    return true;
  }
}
