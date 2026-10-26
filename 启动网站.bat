@echo off
cd /d "%~dp0"
echo 正在启动简历网站开发服务器...
echo.
start "" cmd /c "npm run dev & pause"
timeout /t 6 >nul
start "" http://localhost:5173/
echo 浏览器即将打开 http://localhost:5173/
echo 关闭那个命令行窗口即可停止服务器。
timeout /t 3 >nul
