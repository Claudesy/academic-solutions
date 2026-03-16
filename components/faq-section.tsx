"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Apakah SAS menggantikan dosen pembimbing?",
    answer: "Tidak. SAS dirancang sebagai pendamping dan amplifier bimbingan, bukan pengganti. Dosen pembimbing tetap berperan krusial dalam evaluasi akhir dan persetujuan. SAS membantu mahasiswa mempersiapkan diri sebelum bertemu dosen sehingga bimbingan menjadi lebih efektif dan fokus.",
  },
  {
    question: "Apakah hasil dari SAS dianggap plagiarisme?",
    answer: "Tidak, selama Anda menggunakan SAS sebagai alat bantu dan tetap memahami konten yang dihasilkan. SAS juga memiliki fitur Quality Analyst yang melakukan plagiarism check untuk memastikan orisinalitas. Kami mendorong mahasiswa untuk menggunakan SAS sebagai panduan, bukan copy-paste.",
  },
  {
    question: "Bagaimana dengan kerahasiaan data penelitian saya?",
    answer: "Kami menggunakan enkripsi end-to-end dan tidak menyimpan data pribadi Anda. Semua dokumen dan data penelitian Anda tetap milik Anda 100%. Server kami mematuhi standar keamanan internasional dan data tidak digunakan untuk melatih model AI.",
  },
  {
    question: "Apakah SAS bisa digunakan untuk semua jurusan?",
    answer: "Saat ini SAS dioptimalkan untuk Ilmu Kesehatan (Keperawatan, Kesehatan Masyarakat, Gizi, Keperawatan Gigi, Kesehatan Lingkungan, dll). Pengetahuan agen khusus disesuaikan dengan terminologi, metodologi, dan regulasi di bidang kesehatan. Pengembangan untuk jurusan lain sedang dalam roadmap kami.",
  },
  {
    question: "Apakah ada versi untuk dosen/pembimbing saja?",
    answer: "Ya, paket Institusi mencakup Dashboard Dosen yang bisa digunakan untuk monitoring semua mahasiswa bimbingan tanpa fitur agen untuk mahasiswa. Dosen dapat melihat progress, memberikan feedback, dan menerima alert jika ada mahasiswa yang stuck.",
  },
  {
    question: "Bagaimana cara membatalkan langganan?",
    answer: "Anda bisa membatalkan kapan saja dari dashboard akun. Tidak ada kontrak berjangka atau biaya pembatalan. Untuk paket lifetime, Anda tetap memiliki akses selamanya. Untuk paket subscription, Anda tetap memiliki akses hingga akhir periode berjalan.",
  },
  {
    question: "Apakah SAS tersedia dalam bahasa Inggris?",
    answer: "Saat ini SAS dioptimalkan untuk bahasa Indonesia dengan format akademik Indonesia (PUEBI, pedoman penulisan kampus Indonesia). Dukungan bahasa Inggris dengan format akademik internasional akan datang di update berikutnya untuk mahasiswa yang menulis thesis dalam bahasa Inggris.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="relative z-20 py-32 scroll-mt-20" style={{ backgroundColor: "#09090B" }}>
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-4xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-zinc-400 text-sm">Pertanyaan Umum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-6" style={{ fontWeight: 538, lineHeight: 1.1 }}>
              Ada yang Ingin Ditanyakan?
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang SAS
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 data-[state=open]:border-zinc-700"
                >
                  <AccordionTrigger className="text-white text-left hover:no-underline py-5 text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center p-8 bg-zinc-900/30 border border-zinc-800 rounded-xl"
          >
            <p className="text-zinc-300 mb-2">Masih punya pertanyaan lain?</p>
            <p className="text-zinc-400 text-sm mb-4">Tim kami siap membantu Anda</p>
            <button className="text-blue-400 hover:text-blue-300 font-medium text-sm">
              Hubungi Kami via WhatsApp →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
