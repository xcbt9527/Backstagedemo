/**
 * Created by baird on 17/11/3.
 */
// node 后端服务器

const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件   后期部署在node上面会
app.use(express.static(path.resolve(__dirname, '../dist')))
// 后端api路由
// app.use('/api/user', userApi);

// 监听端口
app.listen(8000);
console.log('success listen at port:3000......');
