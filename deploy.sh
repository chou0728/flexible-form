#!/usr/bin/env sh

# 當發生錯誤時終止腳本運行
set -e

# 打包
npm run build

# cd 到打包後的dist目錄下 
cd dist

# 初始化git 並 add 與 commit
git init
git add -A
git commit -m 'deploy'


# 部署到 https://github.com/chou0728/flexible-form.git 分支 為 gh-pages
git push -f https://github.com/chou0728/flexible-form.git gh-pages

cd -