export default function Profile() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-6">我的</h1>

      <div className="bg-white rounded-xl p-6 shadow text-center mb-6">
        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3" />
        <div className="font-semibold">未登录</div>
        <div className="text-sm text-gray-500">登录后查看余额和订单</div>
      </div>

      <div className="space-y-2">
        <div className="bg-white rounded-xl p-4 shadow flex justify-between items-center">
          <span>📋 我的订单</span>
          <span className="text-gray-400">→</span>
        </div>
        <div className="bg-white rounded-xl p-4 shadow flex justify-between items-center">
          <span>💰 我的钱包</span>
          <span className="text-gray-400">→</span>
        </div>
        <div className="bg-white rounded-xl p-4 shadow flex justify-between items-center">
          <span>🏃 成为跑腿员</span>
          <span className="text-gray-400">→</span>
        </div>
      </div>
    </div>
  )
}
