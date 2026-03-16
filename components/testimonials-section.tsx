"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "SAS benar-benar seperti dosen pembimbing yang selalu ada. Saya yang tadinya stuck 3 bulan di Bab 1, dalam 2 minggu sudah clear dan ACC. Simulator sidangnya juga sangat membantu prepare mental!",
    name: "Dewi A.",
    role: "Mahasiswa S1 Keperawatan",
    institution: "Universitas Airlangga",
    rating: 5,
  },
  {
    quote: "Sebagai dosen dengan 25 mahasiswa bimbingan, dashboard SAS membuat saya bisa monitoring progres mereka tanpa harus meeting rutin. Mahasiswa yang stuck bisa langsung saya identifikasi dan bantu.",
    name: "Dr. Budi S.",
    role: "Dosen",
    institution: "Fakultas Kesehatan Masyarakat UI",
    rating: 5,
  },
  {
    quote: "Analisis statistiknya sangat detail dan mudah dipahami. Saya yang awam soal SPSS jadi paham harus pakai uji apa dan cara interpretasinya. Skripsi saya selesai 2 bulan lebih cepat dari perkiraan.",
    name: "Rina M.",
    role: "Mahasiswa S2 Epidemiologi",
    institution: "UGM",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimoni" className="relative z-20 py-32 scroll-mt-20" style={{ backgroundColor: "#09090B" }}>
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-zinc-400 text-sm">Testimoni Pengguna</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-6" style={{ fontWeight: 538, lineHeight: 1.1 }}>
              Apa Kata Mereka yang Sudah Merasakan?
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Bergabung dengan ratusan mahasiswa dan dosen yang telah menyelesaikan perjalanan akademik mereka dengan SAS
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { value: "500+", label: "Mahasiswa Terdaftar" },
              { value: "7", label: "AI Agent Spesialis" },
              { value: "24/7", label: "Bimbingan Tersedia" },
              { value: "4.9/5", label: "Rating Pengguna" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zinc-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-zinc-700" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-zinc-300 text-base leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-medium">{testimonial.name}</div>
                    <div className="text-zinc-400 text-sm">{testimonial.role}</div>
                    <div className="text-zinc-500 text-xs">{testimonial.institution}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* University Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-zinc-500 text-sm mb-6">Dipercaya oleh mahasiswa dari berbagai universitas</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
              {["UI", "UGM", "Airlangga", "Unpad", "IIK", "Hasanuddin"].map((uni, index) => (
                <div key={index} className="text-zinc-400 font-semibold text-lg">{uni}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
