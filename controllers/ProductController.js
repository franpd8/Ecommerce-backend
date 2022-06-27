const { Product, Category, Sequelize } = require("../models/index");
const { Op } = Sequelize;

const ProductController = {
    addProduct(req, res, next) {
      if (req.file)req.body.Image = (req.file.destination + req.file.filename);
      console.log(req.file)  
      Product.create({...req.body })
            .then(product => {
              product.addCategory(req.body.CategoryId)
              res.status(201).send({ message: 'Producto añadido exitosamente.', product })
            })
            .catch(error => {
              error.origin = 'Product';
              next(error);              
          });
    },
    getAll(req, res) {
        Product.findAll({
          include: [{model: Category, through: { attributes: [] } }],
        })
          .then((products) => res.send(products))
          .catch((err) => {
            console.log(err);
            res.status(500).send({
              message: "Ha habido un problema al cargar los productos",
            });
          });
    },
    async delete(req, res) {
        await Product.destroy({
          where: {
            id: req.params.id,
          },
        });
        res.send("El libro ha sido eliminada con éxito");
      },
    getById(req, res) {
    Product.findByPk(req.params.id, {
      include: [],
    })
      .then((product) => res.send(product))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar el producto",
        });
      });
  },

  getByName(req, res) {
    Product.findAll({
      where: {
        name: {
          [Op.like]: `%${req.params.name}%`,
        },
      },
      include: [],
    })
      .then((post) => 

      res.send(post))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al buscar el producto",
        });
      });
  },
  getByPrice(req, res) {
    Product.findAll({
      where: {
        price: {
          [Op.like]: `%${req.params.price}%`,
        },
      },
      include: [],
    })
      .then((post) => res.send(post))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar el libro",
        });
      });
  },
  
  getAllOrdered(req, res) {
    Product.findAll({
      order: [['price', 'DESC']]
    })
      .then((products) => res.send(products))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar los productos",
        });
      });
  },
  getAllOrderedASC(req, res) {
    Product.findAll({
      order: [['price', 'ASC']]
    })
      .then((products) => res.send(products))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar los productos",
        });
      });
  },
  async update(req, res) {
    try {
      await Product.update(
        { ...req.body },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      const product = await Product.findByPk(req.params.id);
      product.setCategories(req.body.CategoryId); //actualiza el género en la tabla intermedia
      res.send("Producto actualizado con éxito");
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "no ha sido posible actualizar el producto" });
    }
  }
}

module.exports = ProductController