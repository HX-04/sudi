import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PICKUP_PLACES = ['菜鸟驿站', '丰巢柜', '京东快递点', '顺丰站点', '校门口快递架']
const BUILDINGS = ['A栋（学生公寓）', 'B栋（学生公寓）', 'C栋（学生公寓）', 'D栋（教学楼）', 'E栋（行政楼）']

export default function Publish() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    pickup: '',
    building: '',
    room: '',
    fee: 5,
    note: '',
    size: 'small',
  })

  const handleSubmit = () => {
    if (!form.pickup) return alert('请选择取件地点')
    if (!form.building) return alert('请选择送达楼栋')
    alert('✅ 订单发布成功！等待跑腿员接单')
    navigate('/orders')
  }

  return (
    <div className="p-4 max-w-lg mx-auto">
      {/* 头部 */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl p-5 mb-6 shadow-lg">
        <h1 className="text-xl font-bold mb-1">📮 发布订单</h1>
        <p className="text-sm text-blue-100">填写快递信息，跑腿员帮你送到楼下</p>
      </div>

      {/* 表单卡片 */}
      <div className="bg-white rounded-2xl p-5 shadow-sm space-y-5">
        {/* 取件地点 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">取件地点</label>
          <div className="grid grid-cols-2 gap-2">
            {PICKUP_PLACES.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setForm({ ...form, pickup: p })}
                className={`text-sm py-2.5 rounded-xl border transition ${
                  form.pickup === p
                    ? 'bg-blue-50 text-blue-600 border-blue-300 font-medium'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-blue-200'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* 送达楼栋 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">送达楼栋</label>
          <select
            className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 outline-none text-sm focus:border-blue-400 focus:bg-white transition"
            value={form.building}
            onChange={(e) => setForm({ ...form, building: e.target.value })}
          >
            <option value="">请选择楼栋</option>
            {BUILDINGS.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>

        {/* 房号 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">房号（选填）</label>
          <input
            className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 outline-none text-sm focus:border-blue-400 focus:bg-white transition"
            placeholder="如：302 / 放门口即可"
            value={form.room}
            onChange={(e) => setForm({ ...form, room: e.target.value })}
          />
        </div>

        {/* 物品大小 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">物品大小</label>
          <div className="flex gap-2">
            {[
              { value: 'small', label: '小件', desc: '快递/文件' },
              { value: 'medium', label: '中件', desc: '鞋盒大小' },
              { value: 'large', label: '大件', desc: '行李箱' },
            ].map((s) => (
              <button
                key={s.value}
                type="button"
                onClick={() => setForm({ ...form, size: s.value })}
                className={`flex-1 py-3 rounded-xl border text-center transition ${
                  form.size === s.value
                    ? 'bg-blue-50 text-blue-600 border-blue-300'
                    : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-blue-200'
                }`}
              >
                <div className="text-sm font-medium">{s.label}</div>
                <div className="text-xs opacity-60">{s.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 跑腿费 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">跑腿费</label>
          <div className="flex gap-2">
            {[3, 4, 5, 6, 8, 10].map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setForm({ ...form, fee: f })}
                className={`flex-1 py-2.5 rounded-xl border text-sm font-medium transition ${
                  form.fee === f
                    ? 'bg-orange-50 text-orange-500 border-orange-300'
                    : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-orange-200'
                }`}
              >
                ¥{f}
              </button>
            ))}
          </div>
        </div>

        {/* 备注 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">备注（选填）</label>
          <textarea
            className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 outline-none text-sm focus:border-blue-400 focus:bg-white transition"
            rows={2}
            placeholder="取件码、物品描述等"
            value={form.note}
            onChange={(e) => setForm({ ...form, note: e.target.value })}
          />
        </div>
      </div>

      {/* 发布按钮 */}
      <button
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl py-3.5 font-semibold mt-5 hover:shadow-lg hover:shadow-blue-200 transition active:scale-[0.98]"
      >
        发布订单
      </button>
    </div>
  )
}
