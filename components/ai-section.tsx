"use client"

import { motion } from "framer-motion"
import { ChevronRight, Check, Paperclip, Globe, Lightbulb, BookOpen, Users, Clock, Target } from "lucide-react"

const agents = [
  { name: "Agent Pembimbing Principal", isAgent: true, selected: true, icon: "◇" },
  { name: "Agent Ahli Penulisan Akademik", isAgent: true, selected: false, icon: "◉" },
  { name: "Agent Auditor Kualitas Naskah", isAgent: true, selected: false, icon: "◈" },
  { name: "Agent Analis Data & Metodologi", isAgent: true, selected: false, icon: "○" },
  { name: "Agent Kurator Referensi", isAgent: true, selected: false, icon: "◎" },
  { name: "Agent Simulasi Penguji", isAgent: true, selected: false, icon: "◆" },
  { name: "Agent Sistem Monitoring Progres", isAgent: false, selected: false, icon: "■" },
]

export function AISection() {
  return (
    <div id="ai" className="relative z-20 py-40 scroll-mt-20" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-zinc-500" />
            <span className="text-zinc-500 text-xs uppercase tracking-[0.2em]">Multi-Agent System</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-zinc-100 max-w-3xl mb-6"
            style={{ fontWeight: 538, lineHeight: 1.1 }}
          >
            Seven Specialized Agents Operating in Coordinated Sequence
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-500 max-w-lg mb-8 text-sm leading-relaxed"
          >
            From research conceptualization to final defense, each agent provides domain-specific expertise, 
            working in harmonized workflow to deliver comprehensive academic guidance.
          </motion.p>

          {/* Two Column Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Left column - Intelligent Progress Tracking */}
              <div className="border-t border-r border-b border-zinc-800/60 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                    <Target className="w-5 h-5 text-zinc-400" />
                  </div>
                  <h3 className="text-zinc-200 font-medium text-lg">Intelligent Progress Tracking</h3>
                </div>
                <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                  Automated milestone monitoring with evidence-based guidance. Agents analyze completion status, 
                  identify bottlenecks, and suggest methodological next steps aligned with research timelines.
                </p>

                {/* Progress Simulation Card */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-zinc-500" />
                      <span className="text-zinc-400 text-sm">Research Milestone Analysis</span>
                    </div>
                    <span className="text-zinc-600 text-xs">Live</span>
                  </div>

                  {/* Current Phase */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                      <span className="text-zinc-500 text-xs uppercase tracking-wider">Current Phase</span>
                    </div>
                    <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/50">
                      <p className="text-zinc-300 text-sm font-medium">Literature Review & Critical Appraisal</p>
                      <p className="text-zinc-500 text-xs mt-1">CASP evaluation of 12 selected studies</p>
                    </div>
                  </div>

                  {/* Upcoming Phases */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2 rounded-lg opacity-50">
                      <div className="w-4 h-4 border border-zinc-600 rounded" />
                      <span className="text-zinc-500 text-sm">Methodology Design</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg opacity-30">
                      <div className="w-2 h-2 bg-zinc-600 rounded-full" />
                      <span className="text-zinc-600 text-sm">Data Collection</span>
                    </div>
                  </div>

                  {/* Recommendation */}
                  <div className="mt-4 pt-4 border-t border-zinc-800">
                    <p className="text-zinc-500 text-xs mb-2">Agent Recommendation</p>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      Based on your research domain, prioritize recent systematic reviews (2022-2024) 
                      and perform quality assessment using CASP checklist before synthesis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right column - Faculty Oversight */}
              <div className="border-t border-b border-zinc-800/60 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                    <Users className="w-5 h-5 text-zinc-400" />
                  </div>
                  <h3 className="text-zinc-200 font-medium text-lg">Faculty Oversight</h3>
                </div>
                <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                  Supervisors maintain comprehensive visibility into student progression through 
                  real-time dashboards, automated alerts for delays, and integrated feedback mechanisms.
                </p>

                {/* Faculty Dashboard Simulation */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 font-mono text-sm">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-zinc-600 text-xs">// Supervisory Dashboard</p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 animate-pulse" />
                      <span className="text-zinc-500 text-[10px]">LIVE</span>
                    </div>
                  </div>

                  {/* Student Overview */}
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center justify-between py-2 border-b border-zinc-800">
                      <span className="text-zinc-500 text-xs">Active Supervisees</span>
                      <span className="text-zinc-300 text-sm">8</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-zinc-800">
                      <span className="text-zinc-500 text-xs">Pending Review</span>
                      <span className="text-amber-500/70 text-sm">3</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-zinc-500 text-xs">Alerts</span>
                      <span className="text-red-400/70 text-sm">1</span>
                    </div>
                  </div>

                  {/* Student Detail Card */}
                  <div className="bg-zinc-800/40 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs text-zinc-400">
                        RA
                      </div>
                      <div>
                        <p className="text-zinc-300 text-sm">Researcher A</p>
                        <p className="text-zinc-500 text-xs">Chapter 3 • 85% Complete</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-zinc-600" />
                      <span className="text-zinc-500 text-xs">Revision pending: 3 days</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button className="flex-1 flex items-center justify-center gap-1.5 border border-zinc-700/60 text-zinc-500 text-xs px-3 py-2 rounded-md hover:bg-zinc-800/50 transition-colors">
                      <Paperclip className="w-3 h-3" />
                      Review
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-1.5 border border-zinc-700/60 text-zinc-500 text-xs px-3 py-2 rounded-md hover:bg-zinc-800/50 transition-colors">
                      <Globe className="w-3 h-3" />
                      Analytics
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-1.5 border border-zinc-700/60 text-zinc-500 text-xs px-3 py-2 rounded-md hover:bg-zinc-800/50 transition-colors">
                      <Lightbulb className="w-3 h-3" />
                      Feedback
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
