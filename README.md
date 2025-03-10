# Node.js JSON 数据处理项目

## 项目概述
本项目是一个用于处理 JSON 数据的 Node.js 应用程序。它包含多个 mock 数据文件，可用于开发和测试目的。

## 安装说明
1. 确保已安装 Node.js (建议版本 18.x 或更高)
2. 安装 pnpm 包管理器：
   ```bash
   npm install -g pnpm
   ```
3. 克隆本仓库
4. 安装依赖：
   ```bash
   pnpm install
   ```

## 使用说明
1. 运行主程序：
   ```bash
   node index.js
   ```
2. 程序将处理 mock 目录下的 JSON 数据文件

3. 访问接口
    ``` base
    http://localhost:5000/json/mock/users
    ```

## 项目结构
```
.
├── index.js            # 主程序文件
├── package.json        # 项目配置和依赖
├── pnpm-lock.yaml      # pnpm 锁文件
├── .gitignore          # Git 忽略文件
└── mock/               # Mock 数据目录
    └── users.json
```

## 贡献指南
欢迎提交 Pull Request。请确保：
1. 代码符合项目风格
2. 包含必要的测试
3. 更新相关文档

## 许可证
MIT License
