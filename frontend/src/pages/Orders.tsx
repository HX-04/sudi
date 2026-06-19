import { useState } from 'react'

const MOCK_ORDERS = [
  { id: '1', pickup: '菜鸟驿站', building: 'A栋302', fee: 5, status: '待接单', time: '10分钟前' },
  { id: '2', pickup: '丰巢柜', building: 'B栋506', fee: 4, status: '待接单', time: '30分钟前' },
  { id: '3', pickup: '京东快递点', building: 'C栋201', fee: 6, status: '配送中', time: '1小时前' },
  { id: '4', pickup: '菜鸟驿站', building: 'A栋105', fee: 3, status: '已接单', time: '2小时前' },
  { id: '5', pickup: '顺丰站点', building: 'D栋303', fee: 8, status: '已完成', time: '昨天' },
  { id: '6', pickup: '菜鸟驿站', building: 'B栋208', fee: 5, status: '已完成', time: '2天前' },
]

const TABS = [
  { key: 'all', label: '全部' },
  { key: 'pending', label: '待接单' },
  { key: 'active', label: '进行中' },
  { key: 'done', label: '已完成' },
]

const STATUS_STYLES: Record<string, string> = {
  '待接单': 'bg-yellow-50 text-yellow-600 border-yellow-200',
  '已接单': 'bg-blue-50 text-blue-600 border-blue-200',
  '配送中': 'bg-indigo-50 text-indigo-600 border-indigo-200',
  '已完成': 'bg-green-50 text-green-600 border-green-200',
}

export default function Orders() {
  const [tab, setTab] = useState('all')

  const filtered = MOCK_ORDERS.filter((o) => {
    if (tab === 'all') return true
    if (tab === 'pending') return o.status === '待接单'
    if (tab === 'active') return o.status === '已接单' || o.status === '配送中'
    if (tab === 'done') return o.status === '已完成'
    return true
  })

  return (
    <div className="p-4">
      {/* 头部 */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl p-5 mb-5 shadow-lg">
        <h1 className="text-xl font-bold">📋 我的订单</h1>
        <p className="text-sm text-blue-100 mt-0.5">共 {MOCK_ORDERS.length} 个订单</p>
      </div>

      {/* 标签栏 */}
      <div className="flex gap-1 mb-4 bg-white rounded-xl p-1 shadow-sm border border-gray-100">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition ${
              tab === t.key
                ? 'bg-blue-500 text-white shadow-sm'
                : 'text-gray-500 hover:text-blue-500'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* 订单列表 */}
      <div className="space-y-3">
        {filtered.map((order) => (
          <div key={order.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-50 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-3">
              <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${STATUS_STYLES[order.status] || ''}`}>
                {order.status}
              </span>
              <span className="text-orange-500 font-bold text-lg">¥{order.fee}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center text-blue-500">
                📦
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-700 font-medium truncate">{order.pickup}</span>
                  <span className="text-gray-300">→</span>
                  <span className="text-gray-700 truncate">{order.building}</span>
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{order.time}</div>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-5xl mb-3">📭</div>
            <p className="text-gray-400">暂无订单</p>
            <a href="/publish" className="inline-block mt-3 text-blue-500 text-sm font-medium">去发布一个 →</a>
          </div>
        )}
      </div>
    </div>
  )
}
