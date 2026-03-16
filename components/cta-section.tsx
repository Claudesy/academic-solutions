export function CTASection() {
  return (
    <section id="cta" className="py-24 px-6 scroll-mt-20" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-6">
          Mulai Perjalanan Akademikmu Hari Ini
        </h2>
        <p className="text-zinc-500 text-base max-w-xl mx-auto mb-10">
          7 Agent untuk 1 Mahasiswa. Siap mendampingi dari ide hingga sidang.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-zinc-900 font-medium rounded-xl hover:bg-zinc-100 transition-colors text-sm">
            Mulai Gratis
          </button>
          <button className="px-8 py-4 border border-zinc-700 text-white font-medium rounded-xl hover:bg-zinc-800 transition-colors text-sm">
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  )
}
