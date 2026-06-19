import { Link } from 'react-router-dom'

const MOCK_ORDERS = [
  { id: '1', from: '菜鸟驿站', to: 'A栋302', fee: 5, status: '待接单', time: '5分钟前' },
  { id: '2', from: '丰巢柜', to: 'B栋506', fee: 4, status: '待接单', time: '12分钟前' },
  { id: '3', from: '京东快递点', to: 'C栋201', fee: 6, status: '配送中', time: '25分钟前' },
  { id: '4', from: '菜鸟驿站', to: 'A栋105', fee: 3, status: '已接单', time: '30分钟前' },
]

export default function Home() {
  return (
    <div>
      {/* 蓝色渐变 Hero 区 */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-500 text-white px-5 pt-10 pb-16 rounded-b-3xl shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">📦 宿递</h1>
            <p className="text-sm text-blue-100 mt-0.5">校园快递代取平台</p>
          </div>
          <Link to="/login" className="glass text-sm px-4 py-2 rounded-full hover:bg-white/20 transition">
            登录
          </Link>
        </div>

        <p className="text-lg font-medium mb-1">没空去取快递？</p>
        <p className="text-sm text-blue-100 mb-6">发布任务，跑腿员帮你送到楼下 🏃</p>

        {/* 快捷入口卡片 */}
        <div className="grid grid-cols-2 gap-3">
          <Link to="/publish" className="glass rounded-2xl p-4 text-center hover:bg-white/20 transition">
            <span className="text-3xl block mb-1">📮</span>
            <span className="text-sm font-medium">发布订单</span>
          </Link>
          <Link to="/orders" className="glass rounded-2xl p-4 text-center hover:bg-white/20 transition">
            <span className="text-3xl block mb-1">📋</span>
            <span className="text-sm font-medium">我的订单</span>
          </Link>
        </div>
      </div>

      {/* 数据统计 */}
      <div className="flex justify-around mx-4 -mt-6 mb-6 bg-white rounded-2xl shadow-lg py-4 px-2 relative z-10">
        {[
          { num: '500+', label: '累计订单' },
          { num: '98%', label: '好评率' },
          { num: '30+', label: '跑腿员' },
          { num: '2min', label: '平均响应' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-lg font-bold text-blue-500">{s.num}</div>
            <div className="text-xs text-gray-400">{s.label}</div>
          </div>
        ))}
      </div>

      {/* 功能介绍 */}
      <div className="px-4 mb-6">
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-1">
          <span className="w-1 h-4 bg-blue-500 rounded inline-block" />
          服务流程
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {[
            { step: '1', icon: '📝', label: '发布需求' },
            { step: '2', icon: '🤝', label: '跑腿接单' },
            { step: '3', icon: '📍', label: '取件配送' },
            { step: '4', icon: '✅', label: '送达签收' },
          ].map((s) => (
            <div key={s.step} className="bg-white rounded-xl p-3 text-center shadow-sm">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 附近待接单 */}
      <div className="px-4">
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-1">
          <span className="w-1 h-4 bg-blue-500 rounded inline-block" />
          附近待接单
        </h3>
        <div className="space-y-3">
          {MOCK_ORDERS.map((order) => (
            <Link
              key={order.id}
              to="/orders"
              className="block bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition border border-gray-50"
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  order.status === '待接单' ? 'bg-yellow-50 text-yellow-600 border border-yellow-200'
                  : order.status === '配送中' ? 'bg-blue-50 text-blue-600 border border-blue-200'
                  : 'bg-green-50 text-green-600 border border-green-200'
                }`}>
                  {order.status}
                </span>
                <span className="text-orange-500 font-bold">¥{order.fee}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">📦</div>
                <div>
                  <div className="text-gray-700">{order.from}</div>
                  <div className="text-gray-400 text-xs">→ {order.to} · {order.time}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 宣传片入口 */}
      <div className="mx-4 mt-6 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg mb-1">📺 观看宣传片</h3>
            <p className="text-sm text-blue-100">了解宿递如何帮你足不出舍搞定快递</p>
          </div>
          <Link to="/video" className="glass px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/20 transition whitespace-nowrap">
            ▶ 播放
          </Link>
        </div>
      </div>

      <div className="h-6" />
    </div>
  )
}
