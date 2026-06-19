import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Publish() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    pickup: '',
    building: '',
    room: '',
    fee: 5,
    note: '',
  })

  const handleSubmit = () => {
    if (!form.pickup || !form.building) return alert('请填写取件地点和送达楼栋')
    alert('✅ 订单发布成功！等待跑腿员接单')
    navigate('/orders')
  }

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-6">📮 发布订单</h1>

      <div className="bg-white rounded-xl p-5 shadow-sm space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1.5">取件地点</label>
          <select
            className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 outline-none focus:border-blue-500"
            value={form.pickup}
            onChange={(e) => setForm({ ...form, pickup: e.target.value })}
          >
            <option value="">请选择取件点</option>
            <option>菜鸟驿站</option>
            <option>丰巢柜</option>
            <option>京东快递点</option>
            <option>顺丰站点</option>
            <option>校门口快递架</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1.5">送达楼栋</label>
          <select
            className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 outline-none focus:border-blue-500"
            value={form.building}
            onChange={(e) => setForm({ ...form, building: e.target.value })}
          >
            <option value="">请选择楼栋</option>
            <option>A栋（学生公寓）</option>
            <option>B栋（学生公寓）</option>
            <option>C栋（学生公寓）</option>
            <option>D栋（教学楼）</option>
            <option>E栋（行政楼）</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1.5">房号（选填）</label>
          <input
            className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 outline-none focus:border-blue-500"
            placeholder="如：302 / 放门口即可"
            value={form.room}
            onChange={(e) => setForm({ ...form, room: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1.5">跑腿费</label>
          <div className="flex gap-2">
            {[3, 4, 5, 6, 8].map((f) => (
              <button
                key={f}
                onClick={() => setForm({ ...form, fee: f })}
                className={`flex-1 py-2 rounded-xl border transition ${
                  form.fee === f
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-blue-300'
                }`}
              >
                ¥{f}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1.5">备注（选填）</label>
          <textarea
            className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 outline-none focus:border-blue-500"
            rows={2}
            placeholder="取件码、物品描述等"
            value={form.note}
            onChange={(e) => setForm({ ...form, note: e.target.value })}
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white rounded-xl py-3.5 font-semibold mt-5 hover:bg-blue-600 transition shadow-lg shadow-blue-200"
      >
        发布订单
      </button>
    </div>
  )
}
