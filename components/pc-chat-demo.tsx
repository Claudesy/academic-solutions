"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { 
  GraduationCap, 
  PenTool, 
  Search, 
  BarChart3, 
  BookOpen, 
  Mic, 
  LayoutDashboard,
  Send,
  Bot,
  Minimize2,
  Maximize2,
  X
} from "lucide-react"

// Monochrome theme
const MONO_BG = "#09090B"
const MONO_CARD = "#0F0F10"
const MONO_BORDER = "#27272A"

// 7 Professional Agents with titles
const agents = [
  { id: "supervisor", name: "Agent Pembimbing Principal", shortName: "Principal", icon: GraduationCap, x: -12, y: 10 },
  { id: "writing", name: "Agent Ahli Penulisan Akademik", shortName: "Scripta", icon: PenTool, x: -10, y: 35 },
  { id: "quality", name: "Agent Auditor Kualitas Naskah", shortName: "Veritas", icon: Search, x: -8, y: 60 },
  { id: "literature", name: "Agent Kurator Referensi", shortName: "Biblio", icon: BookOpen, x: 108, y: 10 },
  { id: "statistics", name: "Agent Analis Data & Metodologi", shortName: "Statia", icon: BarChart3, x: 110, y: 35 },
  { id: "defense", name: "Agent Simulasi Penguji", shortName: "Viva", icon: Mic, x: 108, y: 60 },
  { id: "dashboard", name: "Agent Sistem Monitoring Progres", shortName: "Monitora", icon: LayoutDashboard, x: 50, y: 90 },
]

// Intellectual discussion scenario
const chatScenario = [
  {
    id: 1,
    sender: "user",
    text: "Selamat pagi. Saya sedang menyusun proposal penelitian mengenai diabetes mellitus tipe 2 pada populasi lansia dan memerlukan asistensi dalam merumuskan research question yang sesuai dengan hierarki evidence-based medicine.",
    time: "08:45",
  },
  {
    id: 2,
    agent: "supervisor",
    text: "Selamat pagi. Terima kasih atas inquiry Anda. Untuk merumuskan research question yang valid secara metodologis, perlu kita pertimbangkan beberapa parameter: population, intervention/exposure, comparison, dan outcome (PICO). Apakah Anda bermaksud melakukan observational study atau experimental design?",
    time: "08:46",
  },
  {
    id: 3,
    sender: "user",
    text: "Saya berencana melakukan cross-sectional study untuk mengidentifikasi faktor risiko. Namun saya ragu apakah desain ini memadai untuk menetapkan causal inference.",
    time: "08:47",
  },
  {
    id: 4,
    agent: "supervisor",
    text: "Kekhawatiran Anda valid. Cross-sectional study memang memiliki keterbatasan dalam menetapkan temporal relationship. Namun, untuk exploratory analysis dan hypothesis generation, desain ini tetap relevan. Alternatifnya, pertimbangkan cohort study jika resources dan timeline memungkinkan.",
    time: "08:48",
  },
  {
    id: 5,
    agent: "literature",
    text: "Berdasarkan systematic search yang saya lakukan terhadap database PubMed, Scopus, dan Garuda (SINTA) untuk 5 tahun terakhir, terdapat 34 studi sejenis namun hanya 8 yang menggunakan metodologi rigorous dengan CASP score ≥7. Terdapat research gap yang signifikan.",
    time: "08:49",
  },
  {
    id: 6,
    sender: "user",
    text: "Excellent. Apakah Anda dapat membantu menyusun literature matrix untuk critical appraisal studi-studi tersebut? Saya perlu mengevaluasi quality of evidence.",
    time: "08:50",
  },
  {
    id: 7,
    agent: "writing",
    text: "Tentu. Saya akan membantu menyusun kerangka argumentasi dengan struktur yang sesuai standar akademik. Berikut draft research question dalam format SMART: 'What is the association between dietary patterns and Type 2 Diabetes Mellitus incidence among elderly population aged ≥60 years in [specific region], controlling for confounding variables including BMI and physical activity?'",
    time: "08:51",
  },
  {
    id: 8,
    agent: "statistics",
    text: "Untuk analytical approach, berdasarkan data type yang Anda miliki, saya rekomendasikan menggunakan multiple logistic regression jika outcome biner, atau multiple linear regression jika continuous. Pastikan untuk melakukan assumption checking: linearity, normality of residuals, homoscedasticity, dan multicollinearity assessment.",
    time: "08:52",
  },
  {
    id: 9,
    sender: "user",
    text: "Acknowledged. Saya akan menyiapkan draft proposal lengkap dengan theoretical framework dan ethical considerations. Terima kasih atas konsultasinya.",
    time: "08:53",
  },
  {
    id: 10,
    agent: "quality",
    text: "Sebagai closing, perlu diingatkan untuk melakukan similarity check dan memastikan adherence terhadap reporting guideline (STROBE untuk observational study). Silakan submit draft Anda untuk peer review.",
    time: "08:54",
  },
]

function FloatingAgent({ agent, index }: { agent: typeof agents[0]; index: number }) {
  const Icon = agent.icon
  
  return (
    <motion.div
      className="absolute"
      style={{ left: `${agent.x}%`, top: `${agent.y}%`, zIndex: 20 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
      transition={{ 
        opacity: { delay: 0.3 + index * 0.08, duration: 0.4 },
        scale: { delay: 0.3 + index * 0.08, duration: 0.4 },
        y: { delay: 0.8 + index * 0.15, duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <div className="relative group cursor-pointer">
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center border border-zinc-700 bg-zinc-900/90"
          whileHover={{ scale: 1.08 }}
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.6)" }}
        >
          <Icon className="w-5 h-5 text-zinc-400" />
        </motion.div>
        
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-1.5 whitespace-nowrap">
            <p className="text-zinc-300 text-xs font-medium">{agent.name}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function PCChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [currentAgent, setCurrentAgent] = useState<string | null>(null)

  useEffect(() => {
    let index = 0
    
    const showNext = () => {
      if (index >= chatScenario.length) {
        setTimeout(() => {
          setVisibleMessages([])
          index = 0
          setTimeout(showNext, 1000)
        }, 6000)
        return
      }

      const msg = chatScenario[index]
      
      if (msg.agent) {
        setIsTyping(true)
        setCurrentAgent(msg.agent)
        setTimeout(() => {
          setIsTyping(false)
          setCurrentAgent(null)
          setVisibleMessages(prev => [...prev, msg.id])
          index++
          setTimeout(showNext, 2000)
        }, 1800)
      } else {
        setVisibleMessages(prev => [...prev, msg.id])
        index++
        setTimeout(showNext, 1500)
      }
    }

    const timer = setTimeout(showNext, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Floating Agents */}
      <div className="absolute inset-0 pointer-events-none">
        {agents.map((agent, index) => (
          <div key={agent.id} className="pointer-events-auto">
            <FloatingAgent agent={agent} index={index} />
          </div>
        ))}
      </div>

      {/* PC Monitor */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative mx-auto" style={{ maxWidth: "900px" }}>
        {/* Monitor Frame */}
        <div className="rounded-2xl p-3 bg-zinc-900 border border-zinc-800" style={{ boxShadow: "0 32px 64px -12px rgba(0,0,0,0.9)" }}>
          {/* Screen */}
          <div className="bg-[#0A0A0B] rounded-xl overflow-hidden border border-zinc-800">
            {/* Window Header */}
            <div className="bg-zinc-900/50 border-b border-zinc-800 px-4 py-3 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-zinc-500 text-xs">SAS Academic Interface</span>
              </div>
              <div className="flex gap-2 text-zinc-600">
                <Minimize2 className="w-4 h-4" />
                <Maximize2 className="w-4 h-4" />
                <X className="w-4 h-4" />
              </div>
            </div>

            {/* Chat Area */}
            <div className="h-[380px] overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800">
              <AnimatePresence>
                {chatScenario.map((msg) => (
                  visibleMessages.includes(msg.id) && (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} gap-3`}
                    >
                      {msg.agent && (
                        <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                          {(() => {
                            const AgentIcon = agents.find(a => a.id === msg.agent)?.icon || Bot
                            return <AgentIcon className="w-4 h-4 text-zinc-500" />
                          })()}
                        </div>
                      )}
                      
                      <div className={`max-w-[80%] ${msg.sender === "user" ? "items-end" : "items-start"} flex flex-col`}>
                        {msg.agent && (
                          <span className="text-[10px] text-zinc-600 mb-1 ml-1">
                            {agents.find(a => a.id === msg.agent)?.name}
                          </span>
                        )}
                        <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                          msg.sender === "user"
                            ? "bg-zinc-800 text-zinc-200 rounded-br-md border border-zinc-700"
                            : "bg-zinc-900 text-zinc-300 rounded-bl-md border border-zinc-800"
                        }`}>
                          {msg.text}
                        </div>
                        <span className="text-[10px] text-zinc-600 mt-1">{msg.time}</span>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isTyping && currentAgent && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                    {(() => {
                      const Icon = agents.find(a => a.id === currentAgent)?.icon || Bot
                      return <Icon className="w-4 h-4 text-zinc-500" />
                    })()}
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1">
                    <span className="text-zinc-600 text-xs">{agents.find(a => a.id === currentAgent)?.shortName} is responding</span>
                    <span className="flex gap-0.5 ml-2">
                      <motion.span className="w-1 h-1 bg-zinc-500 rounded-full" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity }} />
                      <motion.span className="w-1 h-1 bg-zinc-500 rounded-full" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} />
                      <motion.span className="w-1 h-1 bg-zinc-500 rounded-full" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} />
                    </span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="bg-zinc-900/30 border-t border-zinc-800 px-4 py-3 flex items-center gap-3">
              <div className="flex-1 bg-zinc-800/50 rounded-lg px-4 py-2.5 border border-zinc-800">
                <span className="text-zinc-600 text-sm">Type your inquiry...</span>
              </div>
              <button className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-zinc-700 transition-colors">
                <Send className="w-4 h-4 text-zinc-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Stand */}
        <div className="flex flex-col items-center mt-2">
          <div className="w-20 h-2 bg-zinc-800 rounded-full" />
          <div className="w-32 h-1.5 bg-zinc-800/50 rounded-b-lg mt-0.5" />
        </div>

        {/* Status */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-zinc-600 text-xs">
          <motion.span className="w-1.5 h-1.5 bg-zinc-500 rounded-full" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          <span>7 Agent untuk 1 Mahasiswa • End-to-End Academic Support</span>
        </div>
      </motion.div>
    </div>
  )
}
