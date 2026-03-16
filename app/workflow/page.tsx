"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LangflowWorkflow } from "@/components/langflow-workflow"

export default function WorkflowPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#09090B" }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-zinc-400 text-sm">Arsitektur Multi-Agent</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium mb-6">
              7 Agent, Satu Ekosistem
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Lihat bagaimana 7 agent SAS bekerja secara terintegrasi untuk 
              mendampingi perjalanan akademik Anda dari awal hingga akhir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Langflow Workflow Visualization */}
      <LangflowWorkflow />

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl"
          >
            <h2 className="text-2xl md:text-3xl text-white font-medium mb-4">
              Siap Mencoba Workflow Ini?
            </h2>
            <p className="text-zinc-400 mb-8">
              Mulai gunakan SAS dan rasakan bagaimana 7 agent bekerja bersama untuk 
              membantu penelitian Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/"
                className="px-8 py-4 bg-white text-zinc-900 font-semibold rounded-xl hover:bg-zinc-100 transition-colors"
              >
                Mulai Gratis
              </a>
              <a 
                href="/#agent-detail"
                className="px-8 py-4 border border-zinc-700 text-white font-medium rounded-xl hover:bg-zinc-800 transition-colors"
              >
                Pelajari Detail Agent
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
