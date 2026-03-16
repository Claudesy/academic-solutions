"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function ComparisonSection() {
  const comparisonData = [
    { feature: "Multi-Agent Terintegrasi", chatGpt: false, paperpal: false, jenni: false, paperguide: false, sas: true },
    { feature: "Spesialis Ilmu Kesehatan", chatGpt: false, paperpal: false, jenni: false, paperguide: false, sas: true },
    { feature: "Konsultasi Statistik", chatGpt: false, paperpal: false, jenni: false, paperguide: false, sas: true },
    { feature: "Simulator Sidang/Ujian", chatGpt: false, paperpal: false, jenni: false, paperguide: false, sas: true },
    { feature: "Dashboard Supervisor Dosen", chatGpt: false, paperpal: false, jenni: false, paperguide: false, sas: true },
    { feature: "Sesuai Panduan Institusi Indonesia", chatGpt: false, paperpal: false, jenni: false, paperguide: false, sas: true },
    { feature: "Konteks Akademik Lokal", chatGpt: false, paperpal: false, jenni: false, paperguide: false, sas: true },
    { feature: "Powered by Claude AI (Anthropic)", chatGpt: false, paperpal: false, jenni: false, paperguide: false, sas: true },
  ]

  return (
    <div id="perbandingan" className="relative z-20 py-40 scroll-mt-20" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-6xl">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-3xl mb-4"
            style={{
              letterSpacing: "-0.0325em",
              fontVariationSettings: '"opsz" 28',
              fontWeight: 538,
              lineHeight: 1.1,
            }}
          >
            Kenapa SAS Berbeda dari AI Lainnya?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 mb-12 max-w-2xl"
          >
            ChatGPT menjawab pertanyaan. Jenni AI membantu menulis. Paperpal memeriksa grammar. <span className="text-white font-semibold">SAS mendampingi seluruh perjalanan akademik Anda.</span>
          </motion.p>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-4 px-4 text-white font-semibold text-sm">Fitur</th>
                  <th className="text-center py-4 px-4 text-zinc-400 text-sm">ChatGPT</th>
                  <th className="text-center py-4 px-4 text-zinc-400 text-sm">Paperpal</th>
                  <th className="text-center py-4 px-4 text-zinc-400 text-sm">Jenni AI</th>
                  <th className="text-center py-4 px-4 text-zinc-400 text-sm">Paperguide</th>
                  <th className="text-center py-4 px-4 bg-blue-900/20 text-blue-300 font-semibold text-sm">SAS</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={row.feature} className={idx % 2 === 0 ? "bg-zinc-900/20" : ""}>
                    <td className="py-4 px-4 text-zinc-300 text-sm font-medium">{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {row.chatGpt ? (
                        <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                      ) : (
                        <span className="text-zinc-600">—</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.paperpal ? (
                        <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                      ) : (
                        <span className="text-zinc-600">—</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.jenni ? (
                        <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                      ) : (
                        <span className="text-zinc-600">—</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.paperguide ? (
                        <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                      ) : (
                        <span className="text-zinc-600">—</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4 bg-blue-900/20">
                      {row.sas ? (
                        <Check className="w-5 h-5 text-blue-400 mx-auto" />
                      ) : (
                        <span className="text-zinc-600">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-zinc-400 mb-4">
              Inilah mengapa SAS menjadi pilihan pertama bagi mahasiswa dan dosen Ilmu Kesehatan Indonesia.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
