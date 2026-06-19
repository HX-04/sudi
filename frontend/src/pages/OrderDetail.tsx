import { useParams } from 'react-router-dom'

export default function OrderDetail() {
  const { id } = useParams()

  // TODO: 从API获取订单详情
  const order = null

  if (!order) {
    return (
      <div className="p-4 text-center text-gray-500 mt-20">
        <div className="text-4xl mb-4">📋</div>
        <p>订单 #{id}</p>
        <p className="text-sm mt-2">加载中...</p>
      </div>
    )
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">订单详情</h1>
      {/* TODO: 订单信息展示 */}
    </div>
  )
}
