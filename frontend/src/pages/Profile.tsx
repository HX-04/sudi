export default function Profile() {
  return (
    <div className="p-4">
      {/* 用户信息 */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
          H
        </div>
        <div className="font-semibold">未登录</div>
        <div className="text-sm text-gray-400 mb-3">登录后体验完整功能</div>
        <a href="/login" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-xl text-sm hover:bg-blue-600 transition">
          去登录
        </a>
      </div>

      {/* 功能列表 */}
      <div className="bg-white rounded-xl shadow-sm divide-y">
        {[
          { icon: '📋', label: '我的订单', desc: '查看所有订单记录' },
          { icon: '💰', label: '我的钱包', desc: '余额 ¥0.00' },
          { icon: '🏃', label: '成为跑腿员', desc: '接单赚零花钱' },
          { icon: '⭐', label: '我的评价', desc: '查看收到的评价' },
          { icon: '⚙️', label: '设置', desc: '账号与隐私设置' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer transition">
            <span className="text-xl">{item.icon}</span>
            <div className="flex-1">
              <div className="font-medium text-sm">{item.label}</div>
              <div className="text-xs text-gray-400">{item.desc}</div>
            </div>
            <span className="text-gray-300">→</span>
          </div>
        ))}
      </div>
    </div>
  )
}
