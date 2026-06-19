import { Link } from 'react-router-dom'

const MOCK_ORDERS = [
  { id: '1', from: '菜鸟驿站', to: 'A栋302', fee: 5, status: '待接单' },
  { id: '2', from: '丰巢柜', to: 'B栋506', fee: 4, status: '待接单' },
  { id: '3', from: '京东快递点', to: 'C栋201', fee: 6, status: '配送中' },
]

export default function Home() {
  return (
    <div className="p-4">
      {/* 顶部 */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">📦 宿递</h1>
        <Link to="/login" className="text-sm text-blue-500">登录</Link>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-5 mb-6 shadow-lg">
        <h2 className="text-lg font-bold mb-1">校园快递代取</h2>
        <p className="text-sm opacity-90">没空去驿站？发布任务，跑腿员送到楼下</p>
      </div>

      {/* 快捷入口 */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <Link to="/publish" className="bg-white rounded-xl p-4 shadow-sm text-center hover:shadow-md transition">
          <span className="text-3xl block mb-1">📮</span>
          <span className="font-medium text-sm">发布订单</span>
        </Link>
        <Link to="/orders" className="bg-white rounded-xl p-4 shadow-sm text-center hover:shadow-md transition">
          <span className="text-3xl block mb-1">📋</span>
          <span className="font-medium text-sm">我的订单</span>
        </Link>
      </div>

      {/* 待接单列表 */}
      <h3 className="font-semibold mb-3 flex items-center gap-1">
        <span className="w-1 h-4 bg-blue-500 rounded inline-block" />
        附近待接单
      </h3>
      <div className="space-y-3">
        {MOCK_ORDERS.map((order) => (
          <Link
            key={order.id}
            to={`/orders`}
            className="block bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-start mb-2">
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                order.status === '待接单' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'
              }`}>
                {order.status}
              </span>
              <span className="text-orange-500 font-bold">¥{order.fee}</span>
            </div>
            <div className="text-sm">
              <div>📍 {order.from}</div>
              <div className="text-gray-400">→ {order.to}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
