import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Publish() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    pickupLocation: '',
    deliveryBuilding: '',
    deliveryRoom: '',
    deliveryFee: 5,
    note: '',
  })

  const handleSubmit = async () => {
    // TODO: 调用API创建订单
    alert('订单发布成功！等待跑腿员接单')
    navigate('/')
  }

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-6">📮 发布代取订单</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">取件地点 *</label>
          <input
            className="w-full border rounded-lg p-3"
            placeholder="如：菜鸟驿站、丰巢柜"
            value={form.pickupLocation}
            onChange={(e) => setForm({ ...form, pickupLocation: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">送达楼栋 *</label>
          <input
            className="w-full border rounded-lg p-3"
            placeholder="如：学生公寓A栋"
            value={form.deliveryBuilding}
            onChange={(e) => setForm({ ...form, deliveryBuilding: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">房间号</label>
          <input
            className="w-full border rounded-lg p-3"
            placeholder="如：302室 / 放门口"
            value={form.deliveryRoom}
            onChange={(e) => setForm({ ...form, deliveryRoom: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">跑腿费 (元) *</label>
          <input
            type="number"
            className="w-full border rounded-lg p-3"
            value={form.deliveryFee}
            onChange={(e) => setForm({ ...form, deliveryFee: Number(e.target.value) })}
          />
          <p className="text-xs text-gray-400 mt-1">建议：小件3-5元，大件5-10元</p>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">备注</label>
          <textarea
            className="w-full border rounded-lg p-3"
            rows={3}
            placeholder="取件码、物品描述等"
            value={form.note}
            onChange={(e) => setForm({ ...form, note: e.target.value })}
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white rounded-lg py-3 font-semibold mt-6"
      >
        发布订单
      </button>
    </div>
  )
}
