import { useState } from 'react'

const SCENE_VIDEOS = [
  { id: 'full', title: '🎬 完整宣传片', file: '宿递_宣传片_完整版.mp4', duration: '完整版' },
  { id: 's1', title: '🏫 校园全景', file: '01_校园全景.mp4' },
  { id: 's2', title: '📦 快递站排队', file: '02_快递站排队.mp4' },
  { id: 's3', title: '🏃 配送宿舍', file: '03_配送宿舍.mp4' },
  { id: 's4', title: '🛵 跨校配送', file: '04_跨校电瓶车.mp4' },
  { id: 's5', title: '✅ 学生签收', file: '05_学生签收.mp4' },
  { id: 's6', title: '🌅 航拍收尾', file: '06_航拍收尾.mp4' },
]

export default function Video() {
  const [current, setCurrent] = useState(SCENE_VIDEOS[0])
  const [error, setError] = useState(false)

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-1">🎬 宿递宣传片</h1>
      <p className="text-gray-500 text-sm mb-5">AI 生成的校园物流宣传片，了解我们如何帮你足不出舍搞定快递</p>

      {/* 视频播放器 */}
      <div className="bg-black rounded-2xl overflow-hidden shadow-xl mb-5 aspect-video relative">
        {error ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-gray-900">
            <div className="text-5xl mb-3">📽️</div>
            <p className="text-gray-400 text-sm">视频文件未找到</p>
            <p className="text-gray-600 text-xs mt-1">请将视频文件放入 G:\\CURSOR 00\\videos\\ 目录</p>
          </div>
        ) : (
          <video
            key={current.id}
            className="w-full h-full object-contain"
            controls
            autoPlay
            onError={() => setError(true)}
          >
            <source src={`/api/video/${encodeURIComponent(current.file)}`} type="video/mp4" />
            您的浏览器不支持视频播放
          </video>
        )}
      </div>

      {/* 当前视频标题 */}
      <h2 className="font-semibold text-lg mb-3">{current.title}</h2>

      {/* 场景选择 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {SCENE_VIDEOS.map((v) => (
          <button
            key={v.id}
            onClick={() => { setCurrent(v); setError(false) }}
            className={`text-left px-3.5 py-3 rounded-xl text-sm font-medium transition border ${
              current.id === v.id
                ? 'bg-blue-500 text-white border-blue-500 shadow-md'
                : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-500'
            }`}
          >
            <div className="text-xs opacity-80">{v.title}</div>
          </button>
        ))}
      </div>

      {/* 视频目录说明 */}
      <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-gray-600">
        <p className="font-medium text-blue-700 mb-1">💡 视频文件存放位置</p>
        <p className="text-xs">所有视频文件位于 <code className="bg-white px-1.5 py-0.5 rounded text-blue-500">G:\CURSOR 00\videos\</code> 目录</p>
        <p className="text-xs mt-1">完整宣传片：<code className="bg-white px-1.5 py-0.5 rounded text-blue-500">宿递_宣传片_完整版.mp4</code></p>
      </div>
    </div>
  )
}
