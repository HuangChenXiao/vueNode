var fs = require("fs");//操作文件
var express = require("express");//server服务
var multer = require('multer');//接收图片

var upload = multer({
    dest: './uploads',
    limits: {
        //在这里设置最多能上传多少个文件，那么就不用在下面upload.array('field1', 5)设置了
        // files: 1, //一次只允许上传一个文件
        fileSize: 1000 * 1024  // 设置文件大小不能超过1000*1024
    }
});//定义图片上传的临时目录

var app = express();

// 单域多文件上传：input[file]的 multiple=="multiple"
app.post('/uploads', upload.array('imageFile', 5), function (req, res, next) {
    // req.files 是 前端表单name=="imageFile" 的多个文件信息（数组）,限制数量5，应该打印看一下
    for (var i = 0; i < req.files.length; i++) {
        // 图片会放在uploads目录并且没有后缀，需要自己转存，用到fs模块
        // 对临时文件转存，fs.rename(oldPath, newPath,callback);
        fs.rename(req.files[i].path, "upload/" + req.files[i].originalname, function (err) {
            if (err) {
                throw err;
            }
            console.log('done!');
        })
    }

    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"//允许跨域。。。
    });
    // req.body 将具有文本域数据, 如果存在的话
    res.end(JSON.stringify(req.files) + JSON.stringify(req.body));
})

// 单域单文件上传：input[file]的 multiple != "multiple"
app.post('/upload', upload.single('imageFile'), function (req, res, next) {
    // req.file 是 前端表单name=="imageFile" 的文件信息（不是数组）

    // fs.rename(req.file.path, "upload/" + req.file.originalname, function (err) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log('上传成功!');
    // })
    // res.writeHead(200, {
    //     "Access-Control-Allow-Origin": "*"
    // });
    res.end(JSON.stringify(req.file));
})
app.use(function (err, req, res, next) {
    if (err.code === 'LIMIT_FILE_SIZE') {
        res.send({ result: 'fail', error: { code: 1001, message: 'File is too big' } })
        return
    }

    // Handle any other errors
})
module.exports = app