const sequelize = require("./models").sequelize;

const {
  Admin,
  Board,
  User,
  Sequelize: { Op },
} = require("./models");

sequelize.query("SET NAMES utf8;");

module.exports = {
  user: {
    signIn: (body, hash_pw, now_date, callback) => {
      console.log(body, hash_pw, now_date);
      User.create({
        email: body.email,
        userID: body.id,
        userPW: hash_pw,
        createdDate: now_date,
      })
        .then((data) => {
          callback(data);
        })
        .catch((err) => {
          throw err;
        });
    },
    logIn: (body, hash_pw, callback) => {
      User.findAll({
        where: {
          [Op.and]: [{ email: body.email, userPW: hash_pw }],
        },
      })
        .then((data) => {
          callback(data);
        })
        .catch((err) => {
          throw err;
        });
    },
  },
  // api: {
  //   searchInfo: (body, hash, callback) => {
  //     Admin.findAll({
  //       where: { [Op.and]: [{ user_id: body.id, password: hash }] },
  //     })
  //       .then((data) => {
  //         callback(data);
  //       })
  //       .catch((err) => {
  //         throw err;
  //       });
  //   },
  // },
  // add: {
  //   board: (body, callback) => {
  //     Board.create({
  //       title: body.title,
  //       contents: body.contents,
  //       date: new Date(86400000),
  //     })
  //       .then((data) => {
  //         callback(true);
  //       })
  //       .catch((err) => {
  //         throw err;
  //       });
  //   },
  // },
  // get: {
  //   board: (body, callback) => {
  //     let search = "%%";

  //     if (body.search) {
  //       search = "%" + body.search + "%";
  //     }

  //     Board.findAll({
  //       where: {
  //         title: {
  //           [Op.like]: search,
  //         },
  //         contents: {
  //           [Op.like]: search,
  //         },
  //       },
  //       limit: body.page * body.limit,
  //       offset: (body.page - 1) * body.limit,
  //       order: sequelize.literal("board_id DESC"),
  //     })
  //       .then((data) => {
  //         callback(data);
  //       })
  //       .catch((err) => {
  //         throw err;
  //       });
  //   },
  //   board_cnt: (body, callback) => {
  //     let search = "%%";

  //     if (body.search) {
  //       search = "%" + body.search + "%";
  //     }

  //     Board.count({
  //       where: {
  //         title: {
  //           [Op.like]: search,
  //         },
  //         contents: {
  //           [Op.like]: search,
  //         },
  //       },
  //     })
  //       .then((data) => {
  //         callback(data);
  //       })
  //       .catch((err) => {
  //         throw err;
  //       });
  //   },
  //   board_data: (body, callback) => {
  //     Board.findAll({
  //       where: { board_id: body.id },
  //     })
  //       .then((result) => {
  //         callback(result);
  //       })
  //       .catch((err) => {
  //         throw err;
  //       });
  //   },
  // },
};
