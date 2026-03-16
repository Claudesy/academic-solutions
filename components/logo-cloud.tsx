"use client"

import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"

export function LogoCloud() {
  const partners = [
    "Institut Ilmu Kesehatan (IIK)",
    "Sentra Healthcare AI",
    "Anthropic Claude",
    "Fakultas Kesehatan",
  ]

  return (
    <div className="relative z-20 pb-24 pt-8" style={{ backgroundColor: "#09090B" }}>
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-zinc-300 mb-2"
          >
            Dikembangkan bersama mitra akademik terpercaya.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-zinc-500 mb-16"
          >
            Mendukung mahasiswa Ilmu Kesehatan dalam perjalanan skripsi dan tesis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 items-center justify-items-center"
          >
            {partners.map((name, i) => (
              <div key={i} className="text-zinc-400 font-medium text-sm md:text-base flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-zinc-500 shrink-0" />
                {name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
