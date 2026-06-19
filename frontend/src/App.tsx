import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Publish from './pages/Publish'
import Orders from './pages/Orders'
import Profile from './pages/Profile'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* 底部导航 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
        <NavLink to="/" icon="🏠" label="首页" />
        <NavLink to="/publish" icon="📮" label="发布" />
        <NavLink to="/orders" icon="📋" label="订单" />
        <NavLink to="/profile" icon="👤" label="我的" />
      </nav>
    </div>
  )
}

function NavLink({ to, icon, label }: { to: string; icon: string; label: string }) {
  return (
    <Link to={to} className="flex flex-col items-center text-gray-400 hover:text-blue-500 transition-colors">
      <span className="text-xl">{icon}</span>
      <span className="text-xs mt-1">{label}</span>
    </Link>
  )
}
