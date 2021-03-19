@echo off
 
title GIT一键提交
color 3
echo 当前目录是：%cd%
echo;
 
echo 开始添加变更：git add .
git add .
echo;

git commit -m "update"
echo;
 
echo 将变更情况提交到远程主分支：git push origin master
git push origin master
echo;
 
echo 执行完毕！
echo;
 
pause
