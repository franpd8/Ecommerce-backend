const { User, Token, Order, Product, Sequelize } = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];
const { Op } = Sequelize;
const transporter = require("../config/nodemailer");

const UserController = {
  async create(req, res, next) {
    try {
      const hash = bcrypt.hashSync(req.body.password, 10);
      const user = await User.create({
        ...req.body,
        password: hash,
        confirmed: false,
        role: "user",
      });

      //res.send({messages: 'Usuario creado correctamente', user});
      // const emailToken = jwt.sign({email:req.body.email},jwt_secret,{expiresIn:'48h'})

      // const url = 'http://localhost:3000/users/confirm/'+ emailToken

      // await transporter.sendMail({
      //     to: req.body.email,
      //     subject: "Confirme su registro",
      //     html: `<h3>Bienvenido, estás a un paso de registrarte </h3>
      //     <a href="${url}"> Click para confirmar tu registro</a>
      //     `,
      //   });

      res.status(201).send({
        message: "Te hemos enviado un correo para confirmar el registro",
        user,
      });
    } catch (err) {
      err.origin = "User";
      next(err);
    }
  },

  login(req, res) {
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (!user) {
        return res
          .status(400)
          .send({ message: "Usuario o contraseña incorrecta." });
      }
      const isMatch = bcrypt.compareSync(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .send({ message: "Usuario o contraseña incorrecta." });
      }
      if (!user.confirmed) {
        return res.status(400).send({ message: "Debes confirmar tu correo" });
      }
      token = jwt.sign({ id: user.id }, jwt_secret);
      Token.create({ token, UserId: user.id });
      res.send({ user, token });
    });
  },
  async logout(req, res) {
    try {
      await Token.destroy({
        where: {
          [Op.and]: [
            { UserId: req.user.id },
            { token: req.headers.authorization },
          ],
        },
      });
      res.send({ message: "Desconectado con éxito" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: "hubo un problema al tratar de desconectarte" });
    }
  },

  loginUserOrder(req, res) {
    User.findOne({
      where: {
        id: req.user.id,
      },
      include: [
        {
          model: Order,order: [["createdAt", "DESC"]],
          include: [{ model: Product }],
          
        },
      ],
    })
      .then((user) => res.send(user))
      .catch((err) => {
        // error.origin = 'Order';
        // next(error)
        console.log(err);
        res
          .status(500)
          .send({ message: "Error localizando productos del pedido." });
      });
  },

  async confirm(req, res) {
    try {
      const token = req.params.emailToken;
      const payload = jwt.verify(token, jwt_secret);
      await User.update(
        { confirmed: true },
        {
          where: {
            email: payload.email,
          },
        }
      );
      res.status(201).send("Usuario confirmado con éxito");
    } catch (error) {
      console.error(error);
    }
  },

  getInfo(req, res) {
    User.findOne({
      where: {
        id: req.user.id,
      },
    })
      .then((user) => res.send(user))
      .catch((err) => {
        res.status(500).send({ message: "Error info." });
      });
  },
};

module.exports = UserController;
