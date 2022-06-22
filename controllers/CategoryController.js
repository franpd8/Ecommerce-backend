const { Category, Sequelize, Product } = require("../models/index");
const { Op } = Sequelize;

const CategoryController = {
    addCategory(req, res) {
        Category.create({...req.body })
            .then(category => res.status(201).send({ message: 'Categoría añadida exitosamente.', category }))
            .catch(console.error)
    },

    categoryById(req, res) {
        Category.findByPk(req.params.id,{
          include: [{model: Product, through: { attributes: [] } }],
        })
        .then(category => res.send(category))
    },
    
    categoryByName(req, res) {
        Category.findOne({
            where: {
                name: {
                    [Op.like]: `%${req.params.name}%`
                }
            },
        })
        .then(category => res.send(category))
    },
    getCategoryWithProducts(req, res) {
        Category.findAll({
          include: [{model: Product, through: { attributes: [] } }],
        })
          .then((categories) => res.send(categories))
          .catch((err) => {
            console.log(err);
            res.status(500).send({
              message: "Ha habido un problema al cargar los products",
            });
          });
    },
    getAll(req, res) {
        Category.findAll()
          .then((categories) => res.send(categories))
          .catch((err) => {
            console.log(err);
            res.status(500).send({
              message: "Ha habido un problema al cargar los productos",
            });
          });
    },
    async delete(req, res) {
        await Category.destroy({
          where: {
            id: req.params.id,
          },
        });
        res.send("La categoría ha sido eliminada con éxito.");
      }
}

module.exports = CategoryController;