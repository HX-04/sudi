import { Link } from 'react-router-dom'

const MENU_ITEMS = [
  { icon: '📋', label: '我的订单', desc: '查看所有订单记录', link: '/orders' },
  { icon: '🤖', label: 'AI 助手', desc: '有问题随时问我', link: '/', action: 'ai' as const },
  { icon: '🎬', label: '宣传片', desc: '观看宿递宣传视频', link: '/video' },
  { icon: '🏃', label: '成为跑腿员', desc: '接单赚零花钱' },
  { icon: '⭐', label: '我的评价', desc: '查看收到的评价' },
  { icon: '⚙️', label: '设置', desc: '账号与隐私设置' },
]

export default function Profile() {
  return (
    <div className="p-4">
      {/* 用户卡片 */}
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold backdrop-blur-sm">
            H
          </div>
          <div>
            <div className="text-xl font-bold">未登录</div>
            <div className="text-sm text-blue-100 mt-0.5">登录后体验完整功能</div>
            <Link
              to="/login"
              className="inline-block mt-2 glass text-sm px-4 py-1.5 rounded-full hover:bg-white/20 transition"
            >
              去登录
            </Link>
          </div>
        </div>

        {/* 统计数据 */}
        <div className="flex justify-around mt-6 pt-4 border-t border-white/20">
          <div className="text-center">
            <div className="text-lg font-bold">0</div>
            <div className="text-xs text-blue-100">订单</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">0</div>
            <div className="text-xs text-blue-100">积分</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">-</div>
            <div className="text-xs text-blue-100">身份</div>
          </div>
        </div>
      </div>

      {/* 功能菜单 */}
      <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-50 overflow-hidden">
        {MENU_ITEMS.map((item, i) => (
          <Link
            key={i}
            to={item.link || '#'}
            className="flex items-center gap-3.5 p-4 hover:bg-blue-50/50 transition group"
          >
            <span className="text-2xl">{item.icon}</span>
            <div className="flex-1">
              <div className="font-medium text-sm text-gray-800 group-hover:text-blue-600 transition">
                {item.label}
              </div>
              <div className="text-xs text-gray-400">{item.desc}</div>
            </div>
            <span className="text-gray-300 group-hover:text-blue-400 transition">→</span>
          </Link>
        ))}
      </div>

      {/* AI 助手浮窗提示 */}
      <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-lg">🤖</div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-700">需要帮助？</div>
            <div className="text-xs text-gray-400">点击右下角气泡，AI 助手随时在线</div>
          </div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
        </div>
      </div>

      <div className="h-6" />
    </div>
  )
}
