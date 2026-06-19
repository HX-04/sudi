import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!phone || !code) return alert('请填写手机号和验证码')
    alert('✅ 登录成功')
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-500 flex items-center justify-center p-5">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">📦</div>
          <h1 className="text-2xl font-bold text-gray-800">宿递</h1>
          <p className="text-gray-400 text-sm mt-1">登录后开始使用</p>
        </div>

        {/* 手机号 */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1.5">手机号</label>
          <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 focus-within:border-blue-400 focus-within:bg-white transition">
            <span className="pl-3 text-gray-400">+86</span>
            <input
              className="flex-1 p-3 bg-transparent outline-none text-sm"
              placeholder="请输入手机号"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        {/* 验证码 */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-1.5">验证码</label>
          <div className="flex gap-2">
            <input
              className="flex-1 border border-gray-200 rounded-xl p-3 bg-gray-50 outline-none text-sm focus:border-blue-400 focus:bg-white transition"
              placeholder="输入验证码"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button className="bg-gray-100 text-gray-500 rounded-xl px-4 text-xs font-medium hover:bg-gray-200 transition whitespace-nowrap">
              获取验证码
            </button>
          </div>
        </div>

        {/* 登录按钮 */}
        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl py-3.5 font-semibold hover:shadow-lg hover:shadow-blue-200 transition active:scale-[0.98]"
        >
          登录 / 注册
        </button>

        <p className="text-center text-xs text-gray-400 mt-5">演示模式 · 任意手机号均可登录</p>
      </div>
    </div>
  )
}
