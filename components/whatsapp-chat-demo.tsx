"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { GraduationCap, PenTool, BarChart3, X } from "lucide-react"

const simulations = [
  {
    id: "supervisor",
    agent: "Academic Supervisor",
    icon: GraduationCap,
    color: "#3b82f6",
    scenario: [
      { sender: "user", text: "Kak, saya bingung rumusan masalahnya 😭" },
      { sender: "agent", text: "Halo! Santai, kita rumuskan bareng ya 👋" },
      { sender: "agent", text: "Topik kamu tentang apa?" },
      { sender: "user", text: "Diabetes di lansia" },
      { sender: "agent", text: "Oke! Fokus ke faktor risiko, treatment, atau komplikasi?" },
      { sender: "user", text: "Faktor risiko kak" },
      { sender: "agent", text: "Perfect! Berikut 3 opsi rumusan SMART:" },
      { sender: "agent", text: "📌 Hubungan pola makan tinggi gula dengan DM tipe 2 pada lansia" },
    ],
  },
  {
    id: "writing",
    agent: "Writing Assistant",
    icon: PenTool,
    color: "#10b981",
    scenario: [
      { sender: "user", text: "Kak bantu Bab 1 dong 🙏" },
      { sender: "agent", text: "Siap! Writing Assistant siap bantu ✍️" },
      { sender: "agent", text: "Latar belakangnya tentang apa?" },
      { sender: "user", text: "Stres kerja perawat" },
      { sender: "agent", text: "Oke, saya buatkan struktur:" },
      { sender: "agent", text: "1️⃣ Prevalensi stres di Indonesia\n2️⃣ Dampak ke kesehatan\n3️⃣ Gap penelitian" },
      { sender: "user", text: "Kirim draftnya kak" },
      { sender: "agent", text: "[Draft Latar Belakang]\n\nStres kerja merupakan masalah serius..." },
    ],
  },
  {
    id: "statistics",
    agent: "Statistical Agent",
    icon: BarChart3,
    color: "#8b5cf6",
    scenario: [
      { sender: "user", text: "Kak data saya normal gak?" },
      { sender: "agent", text: "Halo! Statistical Agent here 📊" },
      { sender: "agent", text: "Coba cek dengan Shapiro-Wilk test dulu ya" },
      { sender: "user", text: "Hasilnya p<0.05 kak" },
      { sender: "agent", text: "Berarti data tidak normal. Uji apa yang cocok?" },
      { sender: "user", text: "Hubungan umur sama tekanan darah" },
      { sender: "agent", text: "Pakai Korelasi Spearman!" },
      { sender: "agent", text: "rs = 0.724, p = 0.001 → Ada korelasi positif kuat" },
    ],
  },
]

export function WhatsAppChatDemo() {
  const [activeSim, setActiveSim] = useState(0)
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const currentSim = simulations[activeSim]
  const Icon = currentSim.icon

  // Reset when switching simulation
  useEffect(() => {
    setVisibleMessages([])
    setMessageIndex(0)
    setIsTyping(false)
    setIsPaused(false)
  }, [activeSim])

  // Play messages
  useEffect(() => {
    if (isPaused || messageIndex >= currentSim.scenario.length) {
      if (messageIndex >= currentSim.scenario.length) {
        // Auto switch after delay
        const switchTimer = setTimeout(() => {
          setActiveSim((prev) => (prev + 1) % simulations.length)
        }, 4000)
        return () => clearTimeout(switchTimer)
      }
      return
    }

    const currentMessage = currentSim.scenario[messageIndex]
    const isAgent = currentMessage.sender === "agent"

    const timer = setTimeout(() => {
      if (isAgent) {
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          setVisibleMessages((prev) => [...prev, messageIndex])
          setMessageIndex((prev) => prev + 1)
        }, 1200)
      } else {
        setVisibleMessages((prev) => [...prev, messageIndex])
        setMessageIndex((prev) => prev + 1)
      }
    }, messageIndex === 0 ? 500 : 1800)

    return () => clearTimeout(timer)
  }, [messageIndex, currentSim, isPaused])

  return (
    <div className="w-full h-full flex flex-col bg-[#0B141A] rounded-[24px] overflow-hidden">
      {/* Agent Selector Tabs */}
      <div className="flex border-b border-zinc-800">
        {simulations.map((sim, idx) => {
          const SimIcon = sim.icon
          return (
            <button
              key={sim.id}
              onClick={() => setActiveSim(idx)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-[10px] font-medium transition-all ${
                activeSim === idx
                  ? "bg-zinc-800/50 text-white"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/30"
              }`}
            >
              <SimIcon className="w-3 h-3" style={{ color: activeSim === idx ? sim.color : "#71717a" }} />
              <span className="hidden sm:inline">{sim.agent.split(" ")[0]}</span>
            </button>
          )
        })}
      </div>

      {/* Chat Header */}
      <div className="bg-[#1F2C34] px-3 py-2 flex items-center gap-2 border-b border-zinc-800">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${currentSim.color}30` }}
        >
          <Icon className="w-3.5 h-3.5" style={{ color: currentSim.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white text-xs font-medium truncate">{currentSim.agent}</h4>
          <p className="text-[10px] text-emerald-400">online</p>
        </div>
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="text-zinc-500 hover:text-white text-[10px] px-2 py-1 rounded bg-zinc-800"
        >
          {isPaused ? "▶" : "⏸"}
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 px-3 py-2 overflow-hidden relative">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h300v300H0z' fill='none'/%3E%3Cpath d='M20 20h260v260H20z' fill='%23fff'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Date */}
        <div className="flex justify-center mb-2">
          <span className="bg-[#1F2C34] text-zinc-500 text-[9px] px-2 py-0.5 rounded">
            Sekarang
          </span>
        </div>

        {/* Messages */}
        <div className="space-y-1.5">
          <AnimatePresence mode="popLayout">
            {currentSim.scenario.map((msg, idx) => {
              if (!visibleMessages.includes(idx)) return null
              const isUser = msg.sender === "user"

              return (
                <motion.div
                  key={`${activeSim}-${idx}`}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-2.5 py-1.5 rounded-lg text-[11px] leading-snug ${
                      isUser
                        ? "bg-emerald-600 text-white rounded-br-sm"
                        : "bg-zinc-800 text-zinc-100 rounded-bl-sm border border-zinc-700"
                    }`}
                  >
                    <div className="whitespace-pre-line">{msg.text}</div>
                    <div className={`text-[8px] mt-0.5 text-right ${isUser ? "text-emerald-200" : "text-zinc-500"}`}>
                      {new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}
                      {isUser && " ✓✓"}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg rounded-bl-sm px-3 py-2">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.1s]" />
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-[#1F2C34] px-3 py-2 flex items-center gap-2">
        <div className="flex-1 bg-zinc-800 rounded-full px-3 py-1.5 flex items-center gap-2">
          <span className="text-zinc-500 text-xs">Ketik pesan...</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 flex gap-1">
        {simulations.map((_, idx) => (
          <div
            key={idx}
            className={`w-1 h-1 rounded-full transition-all ${
              activeSim === idx ? "bg-white w-3" : "bg-zinc-600"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
