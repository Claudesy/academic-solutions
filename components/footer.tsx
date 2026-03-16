export function Footer() {
  const footerLinks = {
    Platform: ["Untuk Mahasiswa", "Untuk Dosen", "Untuk Pembimbing", "Panduan Penelitian", "Dokumentasi", "API", "Status"],
    Fitur: ["Perencanaan Penelitian", "Pelacakan Progres", "Dukungan Thesis", "Alat Kolaborasi", "Integrasi Kalender", "Analitik", "Mobile"],
    Institusi: ["Tentang Sentra", "Kepemimpinan", "Blog", "Kontak", "Kebijakan Privasi", "Syarat Layanan", "Keamanan"],
    Sumber: ["Memulai", "Tutorial Video", "Sumber Akademik", "FAQ", "Dukungan", "Umpan Balik", "Kemitraan"],
    Hubungkan: ["Dukungan Email", "Forum Komunitas", "Twitter", "LinkedIn", "YouTube"],
  }

  return (
    <footer className="border-t border-zinc-800 py-16 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        {/* Tagline Section */}
        <div className="mb-12 pb-12 border-b border-zinc-800">
          <p className="text-zinc-400 text-center italic mb-2">
            "SAS bukan pengganti kecerdasan Anda — SAS adalah amplifier-nya."
          </p>
          <p className="text-zinc-600 text-center text-sm">
            Sentra Healthcare Artificial Intelligence × Institut Ilmu Kesehatan (IIK)
          </p>
          <p className="text-zinc-700 text-center text-xs mt-2">
            Powered by Claude AI · Anthropic · Version 1.0 · 2026
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <svg width="20" height="20" viewBox="0 0 100 100" fill="none" className="text-white">
              <path
                d="M20 30 L50 10 L80 30 L80 70 L50 90 L20 70 Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M50 10 L50 50 L20 30" fill="#09090B" />
              <path d="M50 50 L80 70 L50 90" fill="#09090B" />
            </svg>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-medium text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
