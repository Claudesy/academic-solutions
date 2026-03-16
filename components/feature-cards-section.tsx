"use client"

import { motion } from "framer-motion"
import { Monitor, ArrowRight } from "lucide-react"
import { PCChatDemo } from "./pc-chat-demo"

export function FeatureCardsSection() {
  return (
    <div id="fitur" className="relative z-20 py-32 scroll-mt-20" style={{ backgroundColor: "#09090B" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(39,39,42,0.12) 0%, transparent 70%)" }} />
      
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Monitor className="w-5 h-5 text-zinc-500" />
              <span className="text-zinc-600 text-xs uppercase tracking-[0.2em]">Integrated System</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-zinc-100 max-w-3xl mx-auto mb-6" style={{ fontWeight: 538, lineHeight: 1.1 }}>
              Comprehensive Academic Support System
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Seven specialized agents operating in coordinated workflow to provide end-to-end research guidance, from conceptualization to defense.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <PCChatDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
            {[
              { title: "Methodological Rigor", desc: "Evidence-based study design and analytical framework" },
              { title: "Academic Integrity", desc: "Comprehensive quality audit and plagiarism detection" },
              { title: "Publication Ready", desc: "Manuscript preparation adhering to international standards" },
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }} className="group bg-zinc-900/20 border border-zinc-800 hover:border-zinc-700 rounded-xl p-6 transition-all">
                <h3 className="text-zinc-300 font-medium mb-2">{item.title}</h3>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-12 text-center">
            <a href="#agent-detail" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-900 rounded-lg font-medium hover:bg-white transition-colors text-sm">
              Explore Agent Specifications
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
