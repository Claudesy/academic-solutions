"use client"

import { motion } from "framer-motion"

const partners = [
  { name: "Institut Ilmu Kesehatan", abbr: "IIK" },
  { name: "Sentra Healthcare AI", abbr: "SHAI" },
  { name: "Anthropic Claude", abbr: "Claude" },
  { name: "OpenAI", abbr: "OpenAI" },
  { name: "Gemini", abbr: "Gemini" },
  { name: "Perplexity", abbr: "Perplexity" },
]

export function TechLogoCloud() {
  return (
    <div className="w-full py-12 bg-zinc-900/30 border-y border-zinc-800/50">
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-zinc-500 text-xs uppercase tracking-[0.2em] mb-8"
          >
            Didukung teknologi AI terbaik saat ini, Claude Agentic
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-10"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300"
              >
                {/* Initial letter avatar */}
                <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                  <span className="text-zinc-400 text-sm font-semibold">
                    {partner.abbr.charAt(0)}
                  </span>
                </div>
                
                {/* Partner name */}
                <span className="text-zinc-500 text-sm font-medium group-hover:text-zinc-400 transition-colors">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Subtle separator line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
          />
        </div>
      </div>
    </div>
  )
}
