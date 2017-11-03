var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
var crypto = require('crypto');

function md5(text) {
  return crypto.createHash('md5').update(text).digest('hex');
};
// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function (res, ret, code, msg) {
  if (typeof ret === 'undefined') {
    res.json({
      code: 10001,
      msg: '操作失败',
      data: null
    });
  } else {
    res.json({
      code: code,
      msg: msg,
      data: ret
    });
  }
};

// 增加用户接口
router.post('/addUser', (req, res) => {
  var sql = $sql.user.add;
  var params = req.body;
  conn.query(sql, [params.username, params.age], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result, 10000, '新增成功');
    }
  })
});
// 登录
router.post('/login', (req, res) => {
  var sql = $sql.user.select;
  var params = req.body;
  console.log(req.cookies.islogin); //登录cookies
  if (!params.password || !params.username) {
    jsonWrite(res, null, 10001, '账号密码不能为空');
    return;
  }
  var password = params.password + 'momo';
  conn.query(sql, [params.username], function (err, result) {
    if (err) {
      // console.log(err);
      jsonWrite(res, result);
    } else {
      if (result.length == 0) {
        jsonWrite(res, null, 10001, '此人未注册');
      } else if (result.length == 1) {
        if (result[0].password == md5(password)) {
          res.cookie('islogin',md5(params.username + 'momo'), {maxAge: 6000000});
          jsonWrite(res, result[0], 10000, '操作成功');
        } else {
          jsonWrite(res, null, 10001, '密码错误');
        }
      } else {
        jsonWrite(res, null, 10001, '请联系管理员');
      }
    }
  })
});

module.exports = router;
