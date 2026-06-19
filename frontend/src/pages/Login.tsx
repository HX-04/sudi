import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const navigate = useNavigate()

  const handleSendCode = () => {
    alert('验证码已发送（开发模式：123456）')
  }

  const handleLogin = () => {
    // TODO: 真实登录逻辑
    navigate('/')
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-8 mt-12">登录宿递</h1>

      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-1">手机号</label>
        <input
          type="tel"
          className="w-full border rounded-lg p-3"
          placeholder="请输入手机号"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-1">验证码</label>
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border rounded-lg p-3"
            placeholder="输入验证码"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            onClick={handleSendCode}
            className="bg-gray-100 text-gray-600 rounded-lg px-4 text-sm whitespace-nowrap"
          >
            获取验证码
          </button>
        </div>
      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white rounded-lg py-3 font-semibold mt-4"
      >
        登录 / 注册
      </button>
    </div>
  )
}
