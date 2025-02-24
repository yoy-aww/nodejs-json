const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// 启用 CORS
app.use(cors());
app.use(express.json());

// 读取 mock 数据文件夹
const mockDataPath = path.join(__dirname, 'mock');

// 自动注册路由
fs.readdirSync(mockDataPath).forEach(file => {
    if (file.endsWith('.json')) {
        const apiPath = '/json/report/alarm/statement/' + file.replace('.json', '');
        const jsonData = require(path.join(mockDataPath, file));
        
        app.get(apiPath, (req, res) => {
            res.json(jsonData);
        });
        
        console.log(`已注册路由: ${apiPath}`);
    }
});

app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
}); 