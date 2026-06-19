import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">宿递</h1>
        <Link to="/login" className="text-blue-500">登录</Link>
      </header>

      <div className="bg-blue-500 text-white rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold mb-2">📦 校园快递代取</h2>
        <p className="text-sm opacity-90">没时间去菜鸟驿站？发布任务，跑腿员帮你送到楼下</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Link to="/publish" className="bg-white rounded-xl p-4 shadow text-center">
          <div className="text-3xl mb-2">📮</div>
          <div className="font-semibold">发布订单</div>
        </Link>
        <Link to="/orders" className="bg-white rounded-xl p-4 shadow text-center">
          <div className="text-3xl mb-2">📋</div>
          <div className="font-semibold">我的订单</div>
        </Link>
      </div>

      <div className="bg-white rounded-xl p-4 shadow">
        <h3 className="font-semibold mb-3">⚡ 待接单</h3>
        <div className="text-gray-500 text-center py-8">
          暂无待接单任务
        </div>
      </div>
    </div>
  )
}
