import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Publish from './pages/Publish'
import Orders from './pages/Orders'
import Profile from './pages/Profile'
import Video from './pages/Video'
import AIChat from './components/AIChat'

const NAV_ITEMS = [
  { path: '/', icon: '🏠', label: '首页' },
  { path: '/publish', icon: '📮', label: '发布' },
  { path: '/orders', icon: '📋', label: '订单' },
  { path: '/video', icon: '🎬', label: '宣传' },
  { path: '/profile', icon: '👤', label: '我的' },
]

export default function App() {
  const location = useLocation()
  const [aiOpen, setAiOpen] = useState(false)

  // 登录页不显示底部导航
  const isLoginPage = location.pathname === '/login'

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pb-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/video" element={<Video />} />
      </Routes>

      {/* AI 客服浮动按钮 */}
      <AIChat open={aiOpen} onToggle={() => setAiOpen(!aiOpen)} />

      {/* 底部导航 */}
      {!isLoginPage && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-blue-100 flex justify-around py-2 z-40">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center transition-colors ${
                location.pathname === item.path
                  ? 'text-blue-500'
                  : 'text-gray-400 hover:text-blue-400'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs mt-0.5">{item.label}</span>
            </Link>
          ))}
        </nav>
      )}
    </div>
  )
}
