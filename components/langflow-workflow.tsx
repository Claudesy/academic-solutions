"use client"

import { motion } from "framer-motion"
import { 
  GraduationCap, 
  PenTool, 
  Search, 
  BarChart3, 
  BookOpen, 
  Mic, 
  LayoutDashboard,
  User,
  FileText,
  CheckCircle
} from "lucide-react"

// Monochrome Professional Theme
const MONO_BG = "#09090B"
const MONO_CARD = "#0F0F10"
const MONO_BORDER = "#27272A"
const MONO_TEXT = "#A1A1AA"
const MONO_ACCENT = "#52525B"
const MONO_WHITE = "#FAFAFA"

// 7 Professional Agents - shifted left to prevent text cutoff
const agents = [
  {
    id: "user",
    type: "input",
    label: "Researcher",
    description: "Input research inquiry",
    icon: User,
    x: 5,
    y: 50,
  },
  {
    id: "supervisor",
    type: "agent",
    label: "Agent Pembimbing Principal",
    description: "Formulasi masalah & desain penelitian",
    icon: GraduationCap,
    x: 22,
    y: 20,
    inputs: ["Research Question"],
    outputs: ["Research Design"],
  },
  {
    id: "literature",
    type: "agent",
    label: "Agent Kurator Referensi",
    description: "Analisis literatur & evidence synthesis",
    icon: BookOpen,
    x: 22,
    y: 50,
    inputs: ["Keywords"],
    outputs: ["Literature Matrix"],
  },
  {
    id: "writing",
    type: "agent",
    label: "Agent Ahli Penulisan Akademik",
    description: "Penulisan naskah ilmiah",
    icon: PenTool,
    x: 22,
    y: 80,
    inputs: ["Outline"],
    outputs: ["Manuscript"],
  },
  {
    id: "quality",
    type: "agent",
    label: "Agent Auditor Kualitas Naskah",
    description: "Review & validasi akademik",
    icon: Search,
    x: 45,
    y: 32,
    inputs: ["Draft"],
    outputs: ["Assessment"],
  },
  {
    id: "statistics",
    type: "agent",
    label: "Agent Analis Data & Metodologi",
    description: "Analisis statistik & interpretasi",
    icon: BarChart3,
    x: 45,
    y: 68,
    inputs: ["Dataset"],
    outputs: ["Analysis"],
  },
  {
    id: "defense",
    type: "agent",
    label: "Agent Simulasi Penguji",
    description: "Persiapan & simulasi sidang",
    icon: Mic,
    x: 68,
    y: 50,
    inputs: ["Final Manuscript"],
    outputs: ["Defense Ready"],
  },
  {
    id: "dashboard",
    type: "output",
    label: "Agent Sistem Monitoring Progres",
    description: "Tracking & evaluasi progres",
    icon: LayoutDashboard,
    x: 88,
    y: 50,
  },
]

// Connections
const connections = [
  { from: "user", to: "supervisor" },
  { from: "user", to: "literature" },
  { from: "user", to: "writing" },
  { from: "supervisor", to: "quality" },
  { from: "literature", to: "writing" },
  { from: "writing", to: "quality" },
  { from: "writing", to: "statistics" },
  { from: "quality", to: "defense" },
  { from: "statistics", to: "defense" },
  { from: "defense", to: "dashboard" },
  { from: "user", to: "dashboard", dashed: true },
]

function ConnectionWire({ from, to, dashed = false, index }: { 
  from: { x: number; y: number }
  to: { x: number; y: number }
  dashed?: boolean
  index: number
}) {
  // Convert percentage to actual coordinates (0-100 scale)
  const midX = (from.x + to.x) / 2
  
  // Create bezier curve path
  const path = `M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`
  
  return (
    <svg 
      className="absolute inset-0 pointer-events-none" 
      style={{ zIndex: 1, width: '100%', height: '100%' }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#DC2626" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#EA580C" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#DC2626" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      
      {/* Glow effect underneath */}
      <motion.path
        d={path}
        fill="none"
        stroke="#EA580C"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeDasharray={dashed ? "2,1" : "none"}
        opacity="0.3"
        filter="blur(1px)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: index * 0.08 }}
      />
      
      {/* Main wire */}
      <motion.path
        d={path}
        fill="none"
        stroke={`url(#grad-${index})`}
        strokeWidth="0.4"
        strokeLinecap="round"
        strokeDasharray={dashed ? "2,1" : "none"}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: index * 0.08 }}
      />
      
      {/* Connection dots at ends */}
      <motion.circle
        cx={from.x}
        cy={from.y}
        r="0.8"
        fill="#EA580C"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
      />
      <motion.circle
        cx={to.x}
        cy={to.y}
        r="0.8"
        fill="#EA580C"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
      />
    </svg>
  )
}

function NodeCard({ node, index }: { node: typeof agents[0]; index: number }) {
  const Icon = node.icon
  const isInput = node.type === "input"
  const isOutput = node.type === "output"
  
  return (
    <motion.div
      className="absolute"
      style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)", zIndex: 10 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
    >
      <div
        className="relative p-4 rounded-xl border min-w-[180px] max-w-[200px] transition-all duration-300 hover:border-zinc-600"
        style={{
          background: `linear-gradient(145deg, ${MONO_CARD}, #0A0A0B)`,
          borderColor: isInput || isOutput ? "#3F3F46" : MONO_BORDER,
          borderWidth: isInput || isOutput ? "2px" : "1px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.03)",
        }}
      >
        <div className="relative flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-lg bg-zinc-800/80 border border-zinc-700 flex items-center justify-center">
            <Icon className="w-4 h-4 text-zinc-400" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-zinc-200 font-medium text-xs leading-tight truncate">{node.label}</h3>
            <span className="text-[9px] text-zinc-600 uppercase tracking-wider">
              {isInput ? "Input" : isOutput ? "Output" : "Processing"}
            </span>
          </div>
        </div>
        
        <p className="text-zinc-500 text-[10px] leading-snug mb-2">{node.description}</p>
        
        {node.inputs && (
          <div className="flex flex-wrap gap-1">
            {node.inputs.map((input, i) => (
              <span key={i} className="text-[8px] px-1.5 py-0.5 rounded bg-zinc-800/60 text-zinc-500 border border-zinc-800">← {input}</span>
            ))}
          </div>
        )}
        
        {/* Connector handles */}
        {!isInput && (
          <div className="absolute -left-1.5 top-1/2 w-3 h-3 rounded-full bg-zinc-700 border border-zinc-600 -translate-y-1/2" style={{ boxShadow: '0 0 8px rgba(82,82,91,0.5)' }} />
        )}
        {!isOutput && (
          <div className="absolute -right-1.5 top-1/2 w-3 h-3 rounded-full bg-zinc-700 border border-zinc-600 -translate-y-1/2" style={{ boxShadow: '0 0 8px rgba(82,82,91,0.5)' }} />
        )}
      </div>
    </motion.div>
  )
}

export function LangflowWorkflow() {
  return (
    <section className="relative py-20 px-6 overflow-hidden" style={{ backgroundColor: MONO_BG }}>
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #71717A 1px, transparent 1px),
            linear-gradient(to bottom, #71717A 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Radial gradient overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(63,63,70,0.08) 0%, transparent 70%)",
        }}
      />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-zinc-700" />
            <span className="text-zinc-600 text-xs uppercase tracking-[0.2em]">System Architecture</span>
            <div className="h-px w-12 bg-zinc-700" />
          </div>
          <h2 className="text-3xl md:text-4xl text-zinc-100 font-medium mb-3 tracking-tight">Integrated Multi-Agent Workflow</h2>
          <p className="text-zinc-500 text-sm max-w-xl mx-auto">Seven specialized agents operating in coordinated sequence to deliver comprehensive academic guidance.</p>
        </motion.div>

        <div className="relative w-full" style={{ height: "480px" }}>
          {connections.map((conn, index) => {
            const fromNode = agents.find(n => n.id === conn.from)
            const toNode = agents.find(n => n.id === conn.to)
            if (!fromNode || !toNode) return null
            return <ConnectionWire key={index} from={{ x: fromNode.x, y: fromNode.y }} to={{ x: toNode.x, y: toNode.y }} dashed={conn.dashed} index={index} />
          })}
          
          {agents.map((node, index) => <NodeCard key={node.id} node={node} index={index} />)}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="mt-12 flex flex-wrap justify-center gap-6 text-zinc-600 text-xs">
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-zinc-600" /><span>Data Flow</span></div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-zinc-500" /><span>Processing Node</span></div>
          <div className="flex items-center gap-2"><div className="w-6 h-px bg-zinc-700" /><span>Connection</span></div>
        </motion.div>
      </div>
    </section>
  )
}
