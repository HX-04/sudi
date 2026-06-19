# 初始化脚本
# 在 Windows 上运行：
# 1. 安装 Node.js 20+
# 2. 安装 Docker Desktop
# 3. 运行本脚本

Write-Host "🚀 初始化宿递项目..." -ForegroundColor Green

# 后端
Write-Host "`n📦 安装后端依赖..." -ForegroundColor Yellow
Set-Location backend
npm install
Copy-Item .env.example .env -ErrorAction SilentlyContinue
npx prisma generate

# 前端
Write-Host "`n📦 安装前端依赖..." -ForegroundColor Yellow
Set-Location ../frontend
npm install

Write-Host "`n✅ 初始化完成！" -ForegroundColor Green
Write-Host "`n启动开发服务器："
Write-Host "  后端: cd backend && npm run start:dev"
Write-Host "  前端: cd frontend && npm run dev"
Write-Host "  Docker: docker-compose up -d"
