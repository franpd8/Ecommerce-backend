const { Order, Product, User } = require("../models/index");

const OrderController = {
  create(req, res) {
    Order.create({ ...req.body, UserId: req.user.id })
      .then((order) => {
        order.addProduct(req.body.ProductId);
        res.status(201).send({ message: "Pedido añadido con éxito", order });
      })
      .catch(console.error);
  },
  getAll(req, res) {
    Order.findAll({
      order: [['createdAt', 'DESC']],
      include: [{ model: Product, through: { attributes: [] } }, User],
    })
      .then((orders) => res.send(orders))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema",
        });
      });
  },

  getById(req, res) {
    Order.findByPk(req.params.id, {
      include: [],
    })
      .then((order) => res.send(order))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar el pedido",
        });
      });
  },

  
};

module.exports = OrderController;
