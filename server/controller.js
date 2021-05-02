const path = require("path");
const model = require("./model");
const AWS = require("aws-sdk");
const hashing = require(path.join(__dirname, "config", "hashing.js"));
const salt = require(path.join(__dirname, "config", "config.json")).salt;
AWS.config.loadFromPath(path.join(__dirname, "config", "awsConfig.json"));

const moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

const now_date = moment().format("YYYY-MM-DD HH:mm:ss");

module.exports = {
  user: {
    signIn: (req, res) => {
      const body = req.body;
      const hash_pw = hashing.enc(body.email, body.pw, salt);

      model.user.signIn(body, hash_pw, now_date, (result) => {
        res.send(result);
      });
    },
    logIn: (req, res) => {
      const body = req.body;
      const hash_pw = hashing.enc(body.email, body.pw, salt);
      console.log(body, hash_pw);
      model.user.logIn(body, hash_pw, (result) => {
        res.send(result);
      });
    },
  },
  // api: {
  //   getData: (req, res) => {
  //     model.api.getData((data) => {
  //       return res.send(data);
  //     });
  //     console.log("컨트롤러 연결 성공!");
  //   },
  //   sendPw: (req, res) => {
  //     const body = req.body;
  //     const hash = hashing.enc(body.id, body.password, salt);
  //     model.api.searchInfo(body, hash, (result) => {
  //       var obj = {};
  //       if (result[0]) {
  //         obj["suc"] = true;
  //         obj["msg"] = "로그인 성공";
  //       } else {
  //         obj["suc"] = false;
  //         obj["msg"] = "로그인 실패";
  //       }

  //       res.send(obj);
  //     });

  //   },
  // },

  // add: {
  //   board: (req, res) => {
  //     console.log(req.body);
  //     const body = req.body;

  //     model.add.board(body, (result) => {
  //       if (result) {
  //         res.send(true);
  //       }
  //     });
  //   },
  // },
  // get: {
  //   board: (req, res) => {
  //     const body = req.body;
  //     console.log("setting");

  //     model.get.board(body, (result) => {
  //       if (result) {
  //         res.send(result);
  //       }
  //     });
  //   },
  //   board_cnt: (req, res) => {
  //     const body = req.body;
  //     model.get.board_cnt(body, (cnt) => {
  //       const result = { cnt: cnt };
  //       res.send(result);
  //     });
  //   },
  //   board_data: (req, res) => {
  //     const body = req.body;

  //     model.get.board_data(body, (data) => {
  //       const result = { data: data };

  //       res.send(result);
  //     });
  //   },
  // },
};
