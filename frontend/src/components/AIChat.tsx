import { useState, useRef, useEffect } from 'react'

// ─── 关键词匹配的 AI 回复 ───
function getAIReply(input: string): string {
  const text = input.toLowerCase()
  if (text.includes('下单') || text.includes('怎么用'))
    return '📝 点底部「发布」按钮，填写取件地点和送达楼栋，设置跑腿费提交即可！跑腿员接单后会帮你送到楼下。'
  if (text.includes('多久') || text.includes('时间'))
    return '⏱️ 平均30分钟内送达！发布后附近跑腿员会立即接单，取件到送达一般在20-40分钟。'
  if (text.includes('费用') || text.includes('价格') || text.includes('钱'))
    return '💰 小件3元起，根据距离和物品大小定价。发布时你可以自己设置跑腿费，系统也会给出建议价。'
  if (text.includes('丢失') || text.includes('损坏'))
    return '🛡️ 每单都有配送保障，如快递丢失或损坏可联系平台处理。建议贵重物品在备注中说明。'
  if (text.includes('范围') || text.includes('哪里'))
    return '📍 目前覆盖校内所有区域：学生公寓A/B/C栋、教学楼、行政楼。取件点包括菜鸟驿站、丰巢柜、京东快递点等。'
  if (text.includes('你好') || text.includes('hi') || text.includes('hello'))
    return '你好呀！我是宿递小助手 😊 有什么可以帮你的？你可以问我下单流程、配送时间、费用等问题！'
  return '你好！我是宿递 AI 助手 😊 你可以问我关于下单、配送、费用、服务范围等问题！试试看～'
}

const QUICK_QUESTIONS = [
  '怎么下单？',
  '配送多久到？',
  '费用怎么算？',
  '覆盖哪些范围？',
]

export default function AIChat({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: '你好！我是宿递 AI 助手 😊 有什么可以帮你的？' },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleSend = (text: string) => {
    if (!text.trim()) return
    setMessages((prev) => [...prev, { role: 'user', text }])
    setInput('')
    setIsTyping(true)

    // 模拟 AI 打字延迟
    setTimeout(() => {
      const reply = getAIReply(text)
      setMessages((prev) => [...prev, { role: 'ai', text: reply }])
      setIsTyping(false)
    }, 600 + Math.random() * 400)
  }

  return (
    <>
      {/* 浮动按钮 */}
      <button
        onClick={onToggle}
        className="fixed bottom-20 right-4 z-50 w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg shadow-blue-300 hover:bg-blue-600 transition-all active:scale-95 flex items-center justify-center"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        )}
      </button>

      {/* 聊天窗口 */}
      {open && (
        <div className="fixed bottom-36 right-4 z-50 w-80 sm:w-96 h-96 bg-white rounded-2xl shadow-2xl border border-blue-100 flex flex-col overflow-hidden animate-slide-up">
          {/* 头部 */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">🤖</div>
            <div>
              <div className="font-semibold text-sm">宿递 AI 助手</div>
              <div className="text-xs text-blue-100">在线 · 随时为您服务</div>
            </div>
          </div>

          {/* 消息列表 */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-blue-500 text-white rounded-br-md'
                      : 'bg-white text-gray-700 shadow-sm rounded-bl-md border border-gray-100'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* 输入状态 */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-gray-100">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full dot-pulse" />
                    <div className="w-2 h-2 bg-blue-400 rounded-full dot-pulse" />
                    <div className="w-2 h-2 bg-blue-400 rounded-full dot-pulse" />
                  </div>
                </div>
              </div>
            )}

            {/* 快捷问题（仅首次显示） */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="text-xs bg-white border border-blue-200 text-blue-600 rounded-full px-3 py-1.5 hover:bg-blue-50 transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* 输入框 */}
          <div className="p-3 border-t border-gray-100 bg-white">
            <div className="flex gap-2">
              <input
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
                placeholder="输入问题..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
              />
              <button
                onClick={() => handleSend(input)}
                className="bg-blue-500 text-white rounded-xl px-4 py-2.5 hover:bg-blue-600 transition disabled:opacity-50"
                disabled={!input.trim()}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 0l-7 7m7-7l7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
