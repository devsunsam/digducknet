const path = require("path");
const model = require("./model");
const AWS = require("aws-sdk");
const hashing = require(path.join(__dirname, "config", "hashing.js"));
const salt = require(path.join(__dirname, "config", "db.json")).salt;
AWS.config.loadFromPath(path.join(__dirname, "config", "awsConfig.json"));

module.exports = {
  // needs: () => upload,
  api: {
    getData: (req, res) => {
      model.api.getData((data) => {
        return res.send(data);
      });
      console.log("컨트롤러 연결 성공!");
    },
    sendPw: (req, res) => {
      const body = req.body;
      const hash = hashing.enc(body.id, body.password, salt);
      model.api.searchInfo(body, hash, (result) => {
        var obj = {};
        if (result[0]) {
          obj["suc"] = true;
          obj["msg"] = "로그인 성공";
        } else {
          obj["suc"] = false;
          obj["msg"] = "로그인 실패";
        }

        res.send(obj);
      });
      console.log("1. salt 값 : ", salt);
      console.log("3. hash 결과 : ", hash);
    },
  },

  add: {
    board: (req, res) => {
      console.log(req.body);
      const body = req.body;

      model.add.board(body, (result) => {
        if (result) {
          res.send(true);
        }
      });
    },
  },
  get: {
    board: (req, res) => {
      const body = req.body;
      console.log('setting')

      model.get.board(body, result => {
        if (result) {
          res.send(result);
        }
      });
    },
    board_cnt: (req, res) => {
      const body = req.body;
      model.get.board_cnt( body, cnt => {
        const result = { cnt: cnt };
        res.send(result);
      });
    },
    board_data : (req, res) => {
      const body = req.body;
      
      model.get.board_data(body, data => {
        const result = { data : data }
        
        res.send(result)
      })
    },
  },
};
