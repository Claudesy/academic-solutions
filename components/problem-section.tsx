"use client"

import { motion } from "framer-motion"
import { ChevronRight, AlertCircle, Clock, TrendingUp } from "lucide-react"

export function ProblemSection() {
  const painPoints = [
    {
      icon: AlertCircle,
      title: "Rumusan Masalah Tidak Jelas",
      description: "Topik sudah dipilih, tapi formulasi masalah, desain penelitian, dan kerangka teori masih membingungkan.",
      impact: "Tertunda 3-6 bulan",
      color: "from-red-500/10 to-red-500/5 border-red-800/20",
    },
    {
      icon: Clock,
      title: "Pembimbing Tidak Selalu Tersedia",
      description: "Feedback yang Anda butuhkan tidak datang tepat waktu. Menunggu konsultasi menghabiskan momentum kerja.",
      impact: "Menunggu rata-rata 2 minggu",
      color: "from-yellow-500/10 to-yellow-500/5 border-yellow-800/20",
    },
    {
      icon: TrendingUp,
      title: "Analisis Data Sangat Kompleks",
      description: "Uji statistik apa yang tepat? Bagaimana menginterpretasi hasil? Database sudah lengkap tapi bingung melanjutkan.",
      impact: "Sering kesalahan interpretasi",
      color: "from-orange-500/10 to-orange-500/5 border-orange-800/20",
    },
  ]

  return (
    <div id="tantangan" className="relative z-20 py-32 scroll-mt-20" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-6xl">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-zinc-400 text-sm">Tantangan Nyata</span>
            <ChevronRight className="w-4 h-4 text-zinc-600" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-3xl mb-6"
            style={{
              letterSpacing: "-0.0325em",
              fontVariationSettings: '"opsz" 28',
              fontWeight: 538,
              lineHeight: 1.1,
            }}
          >
            Mengapa Penulisan Karya Ilmiah Terasa Berat?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-zinc-400 mb-16 max-w-2xl text-lg"
          >
            Anda tidak sendirian. 73% mahasiswa Ilmu Kesehatan menghadapi hambatan ini — dan semuanya dapat diselesaikan dengan bimbingan yang tepat.
          </motion.p>

          {/* Pain Points Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className={`relative bg-gradient-to-br ${point.color} border rounded-2xl p-6 hover:border-opacity-100 transition-all duration-300 group`}
                >
                  {/* Background accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
                    <Icon className="w-full h-full" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
                      <span className="text-xs font-semibold text-zinc-500 bg-zinc-800/50 px-3 py-1 rounded-full">
                        {point.impact}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-semibold text-lg mb-3 leading-tight">
                      {point.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                      {point.description}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-zinc-700/50 via-zinc-700/20 to-transparent mb-4" />

                    {/* Impact indicator */}
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                      <span className="text-zinc-500">Dampak langsung pada timeline</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-12 border-t border-zinc-800/50 text-center"
          >
            <p className="text-zinc-300 text-base leading-relaxed max-w-2xl mx-auto">
              <span className="text-white font-semibold">Itulah mengapa SAS dirancang</span> — untuk mengubah setiap hambatan menjadi peluang belajar, dan mengakselerasi perjalanan akademik Anda menuju kesuksesan.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="w-1 h-1 rounded-full bg-green-500" />
              <span className="text-xs text-zinc-500">Dengan 7 Agent untuk 1 Mahasiswa yang bekerja untuk Anda 24/7</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
