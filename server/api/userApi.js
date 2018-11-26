var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
var log4js = require('../utils/log4js.js')

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.username, params.age], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            var logger = log4js.getLogger('product')
            logger.warn('新增用户成功')
            jsonWrite(res, result);
        }
    })
});

module.exports = router;