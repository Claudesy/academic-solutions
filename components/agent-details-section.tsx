"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, GraduationCap, PenTool, Search, BarChart3, BookOpen, Mic, LayoutDashboard, Check } from "lucide-react"

const agents = [
  {
    id: "supervisor",
    icon: GraduationCap,
    name: "Agent Pembimbing Principal",
    title: "Principal Academic Advisor",
    description: "Supervisi Komprehensif Penelitian",
    details: "Agent ini menyediakan supervisi akademik tingkat principal untuk merumuskan research question yang sesuai dengan hierarki evidence-based medicine, menentukan study design yang tepat (observational, experimental, atau mixed-method), serta memberikan critical appraisal terhadap setiap komponen proposal penelitian. Mendukung S1, S2, dan S3 dengan standar internasional.",
    features: [
      "Formulasi research question menggunakan framework PICO/PECO",
      "Penentuan study design berdasarkan hierarchy of evidence",
      "Critical appraisal proposal dengan metodologi rigorous",
      "Konsultasi theoretical framework dan conceptual model",
      "Review ethical considerations dan informed consent",
    ],
    example: {
      user: "Saya ingin meneliti faktor risiko diabetes tipe 2 pada lansia. Apakah cross-sectional design memadai untuk causal inference?",
      agent: "Cross-sectional study memiliki keterbatasan dalam menetapkan temporal relationship. Untuk exploratory analysis memang valid, namun jika Anda bermaksud menetapkan causality, pertimbangkan prospective cohort design. Mari kita evaluasi feasibility dan resources yang tersedia.",
    },
  },
  {
    id: "writing",
    icon: PenTool,
    name: "Agent Ahli Penulisan Akademik",
    title: "Academic Writing Specialist",
    description: "Kompilasi Naskah Ilmiah Berstandar Internasional",
    details: "Menyusun manuscript sesuai dengan reporting guidelines internasional (STROBE, CONSORT, PRISMA, COREQ), menerapkan academic writing conventions, serta memastikan struktur argumentasi yang logical dan coherent. Mengacu pada style guide APA 7th edition, Vancouver, atau Harvard sesuai target jurnal.",
    features: [
      "Penulisan sesuai reporting guidelines (STROBE, CONSORT, PRISMA)",
      "Struktur argumentasi dengan logical flow dan coherence",
      "Paraphrasing akademik dengan proper citation",
      "Formatting sesuai style guide (APA/Vancouver/Harvard)",
      "Critical writing dengan academic tone yang appropriate",
    ],
    example: {
      user: "Bagaimana cara menyusun latar belakang yang mengikuti pola 'gap-urgency-purpose'?",
      agent: "Struktur yang efektif: (1) Establishing the territory - prevalensi dan burden of disease; (2) Establishing the niche - identifying the gap; (3) Occupying the niche - stating your purpose. Mari kita draft dengan systematic evidence progression.",
    },
  },
  {
    id: "quality",
    icon: Search,
    name: "Agent Auditor Kualitas Naskah",
    title: "Manuscript Quality Auditor",
    description: "Validasi Kualitas dan Integritas Akademik",
    details: "Melakukan comprehensive quality audit meliputi plagiarism detection, coherence analysis, citation verification, readability assessment, dan structural compliance check. Memastikan adherence terhadap academic integrity standards dan institutional requirements.",
    features: [
      "Similarity index assessment dengan proper threshold",
      "Coherence analysis: logical flow dan argumentative structure",
      "Citation audit: accuracy dan completeness",
      "Readability assessment dengan Flesch-Kincaid metrics",
      "Compliance check terhadap institutional guidelines",
    ],
    example: {
      user: "Mohon evaluasi Bab 2 saya. Apakah critical appraisal studi sebelumnya sudah cukup komprehensif?",
      agent: "Analisis menunjukkan: (1) 8 dari 12 studi menggunakan CASP score ≥7 (high quality); (2) Terdapat inconsistency dalam synthesis - beberapa kontradiktif findings belum diaddress; (3) Rekomendasi: tambahkan quality assessment table dan explicit bias evaluation.",
    },
  },
  {
    id: "literature",
    icon: BookOpen,
    name: "Agent Kurator Referensi",
    title: "Evidence Curator",
    description: "Sistematisasi dan Critical Appraisal Literatur",
    details: "Melakukan systematic literature search melalui database terkredibilitas (PubMed/MEDLINE, Scopus, Web of Science, Cochrane, Garuda/SINTA), menyusun literature matrix dengan critical appraisal menggunakan CASP, JBI, atau AMSTAR tools, serta melakukan evidence synthesis dan gap analysis.",
    features: [
      "Systematic search dengan Boolean operators dan MeSH terms",
      "Critical appraisal menggunakan CASP/JBI/AMSTAR tools",
      "Literature matrix dengan extraction standardized",
      "Evidence table dan gap analysis documentation",
      "Auto-generate reference dengan format yang konsisten",
    ],
    example: {
      user: "Cari studi tentang efektivitas intervensi lifestyle modification pada DM tipe 2, fokus RCT dengan follow-up ≥6 bulan.",
      agent: "Ditemukan 17 RCT yang memenuhi kriteria. Setelah critical appraisal dengan Cochrane RoB 2.0, 11 studi berkualitas high. Saya telah susun literature matrix dengan kolom: Author/Year, Sample Size, Intervention, Control, Primary Outcome, Effect Size, RoB Assessment.",
    },
  },
  {
    id: "statistics",
    icon: BarChart3,
    name: "Agent Analis Data & Metodologi",
    title: "Biostatistics & Methodology Analyst",
    description: "Analisis Data dan Justifikasi Metodologis",
    details: "Memberikan konsultasi statistical analysis plan, sample size calculation dengan power analysis, selection of appropriate statistical tests berdasarkan data distribution dan study design, interpretation of results dengan clinical significance, serta data visualization sesuai standard publikasi.",
    features: [
      "Sample size calculation dengan power analysis (G*Power/R)",
      "Selection of statistical tests berdasarkan data characteristics",
      "Assumption checking: normality, homoscedasticity, multicollinearity",
      "Interpretation dengan confidence intervals dan clinical significance",
      "Visualization: forest plots, ROC curves, survival analysis",
    ],
    example: {
      user: "Data saya tidak normal (Shapiro-Wilk p<0.05). Bagaimana analisis hubungan antara umur (kontinu) dengan tekanan darah sistolik?",
      agent: "Untuk non-normal distribution dengan continuous variables, gunakan Spearman's rank correlation. Alternatif: transformasi data (log/square root) jika ingin menggunakan Pearson. Berikut syntax R untuk kedua pendekatan tersebut beserta assumption checking.",
    },
  },
  {
    id: "defense",
    icon: Mic,
    name: "Agent Simulasi Penguji",
    title: "Viva Voce Simulation",
    description: "Persiapan dan Simulasi Sidang Akademik",
    details: "Menyediakan simulasi sidang skripsi/tesis/disertasi dengan generating predictive questions berdasarkan manuscript, conducting mock defense dengan role-play sebagai examiner, providing feedback terhadap presentasi dan jawaban, serta evaluasi readiness dengan standardized rubric.",
    features: [
      "Predictive question generation berdasarkan manuscript analysis",
      "Mock defense dengan simulasi examiner questions",
      "Assessment of presentation skills dan argumentation clarity",
      "Feedback on slide design dan visual communication",
      "Readiness evaluation dengan comprehensive scoring rubric",
    ],
    example: {
      user: "Simulasikan sidang saya. Saya meneliti tentang stres kerja pada perawat ICU.",
      agent: "Baik, saya akan bertindak sebagai examiner. Pertanyaan pertama: 'How did you ensure the validity and reliability of your stress measurement instrument? Specifically, did you perform confirmatory factor analysis or criterion validity testing?'",
    },
  },
  {
    id: "dashboard",
    icon: LayoutDashboard,
    name: "Agent Sistem Monitoring Progres",
    title: "Progress Monitoring System",
    description: "Tracking dan Evaluasi Progres Penelitian",
    details: "Sistem monitoring komprehensif untuk tracking milestone penelitian, timeline management, alert untuk deadline dan tasks tertunda, documentation of revisions dan feedback history, serta analytics untuk estimasi completion time.",
    features: [
      "Milestone tracking: proposal, data collection, analysis, defense",
      "Automated alerts untuk deadline dan task yang tertunda",
      "Revision history dan feedback documentation",
      "Timeline visualization dengan Gantt chart",
      "Analytics: estimated time to completion",
    ],
    example: {
      user: "Berikan laporan progres penelitian saya saat ini.",
      agent: "Status: Chapter 3 (Methodology) - 85% complete. Outstanding tasks: (1) Finalize ethical clearance documentation - Due 3 days; (2) Submit revised sampling framework - Pending review. Projected completion: 42 days based on current velocity.",
    },
  },
]

export function AgentDetailsSection() {
  const [selectedAgent, setSelectedAgent] = useState(agents[0].id)
  const selectedAgentData = agents.find((a) => a.id === selectedAgent) || agents[0]

  return (
    <section id="agent-detail" className="relative z-20 py-32 scroll-mt-20" style={{ backgroundColor: "#09090B" }}>
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-zinc-700" />
              <span className="text-zinc-600 text-xs uppercase tracking-[0.2em]">Agent Specifications</span>
              <div className="h-px w-12 bg-zinc-700" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-zinc-100 font-medium mb-4">Seven Specialized Agents</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">Each agent represents a distinct domain of academic expertise, operating in coordinated sequence to deliver comprehensive research support.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {agents.map((agent) => (
                <button
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all border ${
                    selectedAgent === agent.id ? "bg-zinc-800 text-zinc-200 border-zinc-600" : "bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-700 hover:text-zinc-400"
                  }`}
                >
                  <span>{agent.name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div key={selectedAgent} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                  <selectedAgentData.icon className="w-6 h-6 text-zinc-400" />
                </div>
                <div>
                  <div className="text-zinc-500 text-xs uppercase tracking-wider mb-0.5">{selectedAgentData.title}</div>
                  <h3 className="text-xl text-zinc-200 font-medium">{selectedAgentData.name}</h3>
                </div>
              </div>

              <h4 className="text-lg text-zinc-300 mb-3">{selectedAgentData.description}</h4>
              <p className="text-zinc-500 mb-8 leading-relaxed text-sm">{selectedAgentData.details}</p>

              <div className="space-y-3">
                {selectedAgentData.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-zinc-600 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-400 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8">
              <h4 className="text-zinc-500 text-xs uppercase tracking-wider mb-6">Consultation Simulation</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-zinc-500 text-xs">R</span>
                  </div>
                  <div className="bg-zinc-800 rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%]">
                    <p className="text-zinc-300 text-sm">{selectedAgentData.example.user}</p>
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <div className="bg-zinc-900 border border-zinc-700 rounded-2xl rounded-tr-none px-4 py-3 max-w-[85%]">
                    <p className="text-zinc-300 text-sm leading-relaxed">{selectedAgentData.example.agent}</p>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                    <selectedAgentData.icon className="w-4 h-4 text-zinc-500" />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800">
                <p className="text-zinc-600 text-xs text-center">Consultation conducted with professional academic standards and evidence-based methodology.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
