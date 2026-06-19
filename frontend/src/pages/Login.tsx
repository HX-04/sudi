import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!phone || !code) return alert('请填写手机号和验证码')
    alert('✅ 登录成功（演示模式）')
    navigate('/')
  }

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold text-center mt-16 mb-8">登录宿递</h1>

      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-1">手机号</label>
        <input
          className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 focus:bg-white focus:border-blue-500 outline-none transition"
          placeholder="请输入手机号"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm text-gray-600 mb-1">验证码</label>
        <div className="flex gap-2">
          <input
            className="flex-1 border border-gray-200 rounded-xl p-3 bg-gray-50 focus:bg-white focus:border-blue-500 outline-none transition"
            placeholder="输入验证码"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button className="bg-gray-100 text-gray-600 rounded-xl px-4 text-sm whitespace-nowrap hover:bg-gray-200 transition">
            获取验证码
          </button>
        </div>
      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white rounded-xl py-3 font-semibold hover:bg-blue-600 transition shadow-lg shadow-blue-200"
      >
        登录 / 注册
      </button>

      <p className="text-center text-xs text-gray-400 mt-4">演示模式，任意手机号即可登录</p>
    </div>
  )
}
