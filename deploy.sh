#!/usr/bin/env sh

# 當發生錯誤時終止腳本運行
set -e

# 打包
npm run build

# cd 到打包後的dist目錄下 
cd dist

# # 初始化git 並 add 與 commit
git init
git add -A
git commit -m 'deploy'

# git add dist && git commit -m "Initial dist subtree commit"
# git subtree push --prefix dist origin gh-pages

# 部署到 https://github.com/chou0728/flexible-form.git 分支為 gh-pages
git push -f https://github.com/chou0728/flexible-form.git master:gh-pages 
# 用vue cli官方的這個方式行不通，因為github規定github pages不能使用gh-pages(還是我先不要建立分支?)

cd -