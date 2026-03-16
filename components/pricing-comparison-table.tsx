"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

type FeatureItem = {
  name: string
  free: boolean | string
  skripsi: boolean | string
  tesis: boolean | string
  disertasi: boolean | string
}

type FeatureRowProps = {
  feature: { name: string } | FeatureItem
  category?: boolean
}

export function PricingComparisonTable() {
  const features = [
    {
      category: "Agen AI",
      items: [
        { name: "Pembimbing Akademik", free: false, skripsi: true, tesis: true, disertasi: true },
        { name: "Asisten Penulisan", free: false, skripsi: true, tesis: true, disertasi: true },
        { name: "Asisten Statistik", free: false, skripsi: true, tesis: true, disertasi: true },
        { name: "Spesialis Metodologi", free: false, skripsi: true, tesis: true, disertasi: true },
        { name: "Asisten Literatur", free: false, skripsi: true, tesis: true, disertasi: true },
        { name: "Defense Simulator", free: false, skripsi: true, tesis: true, disertasi: true },
        { name: "Dashboard Dosen", free: false, skripsi: true, tesis: true, disertasi: true },
      ],
    },
    {
      category: "Konsultasi & Support",
      items: [
        { name: "Bimbingan 24/7", free: false, skripsi: true, tesis: true, disertasi: true },
        { name: "Response Time", free: "48 jam", skripsi: "1-2 jam", tesis: "< 1 jam", disertasi: "< 1 jam (prioritas)" },
        { name: "Revisi Unlimited", free: false, skripsi: "6 bulan", tesis: "1 tahun", disertasi: "2 tahun" },
        { name: "Dedicated Account Manager", free: false, skripsi: false, tesis: false, disertasi: true },
      ],
    },
    {
      category: "Fitur Spesialisasi",
      items: [
        { name: "Ideation & Brainstorming", free: false, skripsi: true, tesis: true, disertasi: true },
        { name: "Research Design Optimization", free: false, skripsi: true, tesis: true, disertasi: true },
        { name: "Advanced Statistical Analysis", free: false, skripsi: false, tesis: true, disertasi: true },
        { name: "Publication Readiness", free: false, skripsi: false, tesis: true, disertasi: true },
        { name: "Mentoring dari Expert Panel", free: false, skripsi: false, tesis: false, disertasi: true },
      ],
    },
    {
      category: "Akses Database",
      items: [
        { name: "Akses Jurnal (Ribuan)", free: false, skripsi: true, tesis: true, disertasi: true },
        { name: "Literature Mapping Support", free: false, skripsi: false, tesis: true, disertasi: true },
        { name: "Systematic Review Tools", free: false, skripsi: false, tesis: true, disertasi: true },
      ],
    },
  ]

  const FeatureRow = ({ feature, category = false }: FeatureRowProps) => {
    const item = feature as FeatureItem
    const hasColumns = "free" in feature
    return (
    <div
      className={`grid grid-cols-5 gap-4 py-4 px-4 border-b border-zinc-800/50 ${
        category ? "bg-zinc-900/30 font-semibold" : "hover:bg-zinc-900/20"
      }`}
    >
      <div className={`col-span-2 text-sm ${category ? "text-white" : "text-zinc-300"}`}>
        {feature.name}
      </div>
      {hasColumns ? (
      <>
      <div className="flex justify-center">
        {typeof item.free === "boolean" ? (
          item.free ? (
            <Check className="w-5 h-5 text-emerald-500" />
          ) : (
            <X className="w-5 h-5 text-zinc-600" />
          )
        ) : (
          <span className="text-xs text-zinc-400">{item.free}</span>
        )}
      </div>
      <div className="flex justify-center">
        {typeof item.skripsi === "boolean" ? (
          item.skripsi ? (
            <Check className="w-5 h-5 text-emerald-500" />
          ) : (
            <X className="w-5 h-5 text-zinc-600" />
          )
        ) : (
          <span className="text-xs text-zinc-400">{item.skripsi}</span>
        )}
      </div>
      <div className="flex justify-center">
        {typeof item.tesis === "boolean" ? (
          item.tesis ? (
            <Check className="w-5 h-5 text-emerald-500" />
          ) : (
            <X className="w-5 h-5 text-zinc-600" />
          )
        ) : (
          <span className="text-xs text-zinc-400">{item.tesis}</span>
        )}
      </div>
      <div className="flex justify-center">
        {typeof item.disertasi === "boolean" ? (
          item.disertasi ? (
            <Check className="w-5 h-5 text-emerald-500" />
          ) : (
            <X className="w-5 h-5 text-zinc-600" />
          )
        ) : (
          <span className="text-xs text-zinc-400">{item.disertasi}</span>
        )}
      </div>
      </>
      ) : (
        <>
          <div className="col-span-3" />
        </>
      )}
    </div>
  )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mt-16 pt-12 border-t border-zinc-800"
    >
      <h3 className="text-2xl font-semibold text-white mb-8">Perbandingan Lengkap Fitur</h3>

      <div className="bg-zinc-900/30 rounded-xl border border-zinc-800 overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-5 gap-4 bg-zinc-900/60 py-4 px-4 border-b border-zinc-800 font-semibold">
          <div className="col-span-2 text-white">Fitur</div>
          <div className="text-center text-zinc-400">Gratis</div>
          <div className="text-center text-zinc-400">Skripsi</div>
          <div className="text-center text-zinc-400">Tesis</div>
          <div className="text-center text-zinc-400">Disertasi</div>
        </div>

        {/* Features */}
        {features.map((section, idx) => (
          <div key={idx}>
            <FeatureRow feature={{ name: section.category }} category={true} />
            {section.items.map((item, itemIdx) => (
              <FeatureRow key={itemIdx} feature={item} />
            ))}
          </div>
        ))}
      </div>

      <p className="text-zinc-500 text-sm mt-6 text-center">
        * Semua paket berbayar termasuk dukungan email gratis selama durasi paket. Hubungi kami untuk paket korporat atau custom.
      </p>
    </motion.div>
  )
}
