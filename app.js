require('express-async-errors');
require("./db")
let express = require("express");
//处理日志
let morgan = require("morgan");
let app = express();

//使用全局加强的response中间件
app.use(require("./middleware/response_md"))

//使用日志功能
app.use(morgan('combined'))
//解析json格式的数据
app.use(express.json())

//处理全局异常的中间件
app.use((err, request, response, next) => {
    response.fail(err);
})

app.listen(3000);