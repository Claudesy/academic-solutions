"use client"

import { motion } from "framer-motion"
import { Clock, Sparkles } from "lucide-react"

export function PricingSection() {
  return (
    <div id="harga" className="relative z-20 py-32 scroll-mt-20" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, transparent 100%)",
        }}
      />

      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-4xl">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
            <span className="text-zinc-500 text-xs uppercase tracking-[0.2em]">Pricing</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-zinc-100 text-center mb-4"
            style={{ fontWeight: 538, lineHeight: 1.1 }}
          >
            Investasi untuk Kesuksesan Akademik
          </motion.h2>

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <div className="relative bg-zinc-900/30 border border-zinc-800 rounded-3xl p-16 max-w-2xl mx-auto">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
              
              {/* Icon */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-20 h-20 rounded-2xl bg-zinc-800/50 border border-zinc-700 flex items-center justify-center mx-auto mb-8"
              >
                <Clock className="w-10 h-10 text-zinc-400" />
              </motion.div>

              {/* Coming Soon Text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-4xl md:text-5xl font-medium text-zinc-200 mb-4 tracking-tight">
                  Coming Soon
                </h3>
                <p className="text-zinc-500 text-base max-w-md mx-auto leading-relaxed mb-8">
                  Kami sedang menyiapkan paket harga yang kompetitif dan transparan. 
                  Nantikan pengumuman resmi dalam waktu dekat.
                </p>
              </motion.div>

              {/* Features teaser */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {[
                  "7 Agent untuk 1 Mahasiswa",
                  "Akses Lifetime", 
                  "Garansi 30 Hari",
                  "Support 24/7"
                ].map((item, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-zinc-800/30 border border-zinc-800 rounded-full text-zinc-400 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>

              {/* Notification hint */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-10 text-zinc-600 text-xs"
              >
                <Sparkles className="w-3 h-3 inline-block mr-1" />
                Daftar sekarang untuk early access dan diskon khusus
              </motion.p>
            </div>
          </motion.div>

          {/* Bottom stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-medium text-zinc-300 mb-2">7</div>
              <p className="text-zinc-500 text-xs uppercase tracking-wider">Agent Spesialis</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-medium text-zinc-300 mb-2">24/7</div>
              <p className="text-zinc-500 text-xs uppercase tracking-wider">Dukungan Akademik</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-medium text-zinc-300 mb-2">100%</div>
              <p className="text-zinc-500 text-xs uppercase tracking-wider">Fokus Ilmu Kesehatan</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
