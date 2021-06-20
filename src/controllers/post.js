const { Post } = require("./../db");

module.exports = {
  async getPosts(req, res) {
    var posts = await Post.findAll({
      attributes: ["id", "title", "image", "category", "creationDate"],
    });

    posts = posts.sort((a, b) => b.creationDate > a.creationDate);
    res.json(posts);
  },

  async getPost(req, res) {
    const id = req.params.id;
    const post = await Post.findByPk(id);

    if (post) {
      res.json({ Post: post });
    } else {
      res.json("Error. No existe un recurso con esa id");
    }
  },

  async postAPost(req, res) {
    const { title, content, category, image, creationDate } = req.body;

    if (title && content && category && image && creationDate) {
      const imageValidation = await validarImagen(image);

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
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      res.json("Error. No existe un recurso con esa id.");
    } else {
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
    }
  },

  async deletePost(req, res) {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      res.json("Error. No existe un recurso con ese id.");
    } else {
      await Post.destroy({
        where: { id: req.params.id },
      });

      res.json({ Succes: "Post has been deleted" });
    }
  },
};

async function validarImagen(url) {
  const regExp = /\.(jpg|png|)$/i;
  if (!regExp.test(url)) {
    return false;
  } else {
    var http = require("https");
    var valid = await http
      .get(url, (res) => {
        valid = true;
      })
      .on("error", (err) => {
        console.log("Error: " + err.message);
        valid = false;
      });

    if (valid) {
      return true;
    } else {
      return false;
    }
  }
}
