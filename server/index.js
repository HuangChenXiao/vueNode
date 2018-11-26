// node 后端服务器
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('./utils/log4js')

app.use(express.static('public'));//静态文件夹
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 后端api路由
const userApi = require('./api/userApi');
app.use('/api/user', userApi);

//上传模块
const upload = require('./utils/upload')
app.use('/api', upload)


// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');