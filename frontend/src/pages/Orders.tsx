import { useState } from 'react'

const MOCK_ORDERS = [
  { id: '1', pickup: '菜鸟驿站', building: 'A栋302', fee: 5, status: '待接单', time: '10分钟前' },
  { id: '2', pickup: '丰巢柜', building: 'B栋506', fee: 4, status: '待接单', time: '30分钟前' },
  { id: '3', pickup: '京东快递点', building: 'C栋201', fee: 6, status: '配送中', time: '1小时前' },
  { id: '4', pickup: '菜鸟驿站', building: 'A栋105', fee: 3, status: '已完成', time: '昨天' },
  { id: '5', pickup: '顺丰站点', building: 'D栋303', fee: 8, status: '已完成', time: '2天前' },
]

const TABS = ['全部', '待接单', '进行中', '已完成']

export default function Orders() {
  const [tab, setTab] = useState('全部')

  const filtered = tab === '全部' ? MOCK_ORDERS
    : tab === '待接单' ? MOCK_ORDERS.filter(o => o.status === '待接单')
    : tab === '进行中' ? MOCK_ORDERS.filter(o => o.status === '配送中')
    : MOCK_ORDERS.filter(o => o.status === '已完成')

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">📋 我的订单</h1>

      {/* 标签切换 */}
      <div className="flex gap-1 mb-4 bg-gray-100 rounded-xl p-1">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
              tab === t ? 'bg-white shadow text-blue-500' : 'text-gray-500'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* 订单列表 */}
      <div className="space-y-3">
        {filtered.map((order) => (
          <div key={order.id} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                order.status === '待接单' ? 'bg-yellow-100 text-yellow-700'
                : order.status === '配送中' ? 'bg-blue-100 text-blue-700'
                : 'bg-green-100 text-green-700'
              }`}>
                {order.status}
              </span>
              <span className="text-orange-500 font-bold">¥{order.fee}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-xs">📦</div>
              <div>
                <div className="font-medium">{order.pickup} → {order.building}</div>
                <div className="text-gray-400 text-xs">{order.time}</div>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            <div className="text-4xl mb-2">📭</div>
            <p>暂无订单</p>
          </div>
        )}
      </div>
    </div>
  )
}
