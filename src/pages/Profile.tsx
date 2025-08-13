import { useState } from "react";
import SEO from "@/components/SEO";

interface Member {
  jabatan: string;
  nama: string;
  foto: string;
}

const struktur: Member[] = [
  {
    jabatan: "Kepala Madrasah",
    nama: "Dayat, S.Ag",
    foto: "@/src/assets/Pak dayat.jpg",
  },
  {
    jabatan: "Wakil Kepala Madrasah",
    nama: "Ika Listyaningtyas, S.P",
    foto: "@/src/assets/Bunda.png",
  },
  {
    jabatan: "Kepala Tata Usaha",
    nama: "Sugio Utomo S.Pd",
    foto: "@/src/assets/Dio.png",
  },
  {
    jabatan: "Staf Kurikulum",
    nama: "Nurul Zaman, S.Pd",
    foto: "@/src/assets/Arul.png",
  },
  {
    jabatan: "Staf Kesiswaan",
    nama: "Amelia, S.Pd",
    foto: "@/src/assets/Amel.png",
  },
  {
    jabatan: "Staf Administrasi",
    nama: "Muhammad Fariz Alfiansah, S.Pd",
    foto: "@/src/assets/Faris.png",
  },
  {
    jabatan: "Staf Keuangan",
    nama: "Novianti, S.Pd",
    foto: "@/src/assets/Novi.png",
  },
  {
    jabatan: "Staf humas dan Media",
    nama: "Siti Anisa, S.Pd",
    foto: "@/src/assets/Nisa.png",
  },
  {
    jabatan: "Wali Kelas X",
    nama: "Andarwarti Purna Indiah, S.Pd",
    foto: "@/src/assets/Bu Andar.png",
  },
  {
    jabatan: "Wali Kelas XI",
    nama: "Tia Mutiara, S.Pd",
    foto: "@/src/assets/Tia.png",
  },
  {
    jabatan: "Wali Kelas XII",
    nama: "Heru Hermawan, S.Ag",
    foto: "@/src/assets/Pak Heru.png",
  },
  {
    jabatan: "Staf Perpustakaan",
    nama: "Mediana Tri Maria Ulfah, S.Pd",
    foto: "@/src/assets/Mediana.png",
  },
  {
    jabatan: "Dewan Guru",
    nama: "Pembina dan Dewan Guru MA Nurul Huda",
    foto: "@/src/assets/Guru.Jpg",
  },
];

export default function Profile() {
  const [selected, setSelected] = useState<Member | null>(null);

  return (
    <main>
      <SEO
        title="Profil – MA Nurul Huda"
        description="Profil MA Nurul Huda: visi, misi, sejarah, dan struktur organisasi."
        canonical={
          typeof window !== "undefined"
            ? window.location.origin + "/profil"
            : undefined
        }
      />

      <section className="container mx-auto py-10">
        {/* Judul */}
        <h1 className="text-3xl font-bold mb-6">Profil</h1>

        {/* Visi & Misi */}
        <article className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-2">Visi</h2>
            <p className="text-muted-foreground">
              Madrasah yang Unggul, Islam, dan Populis.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Misi</h2>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>
                Menyelenggarakan pendidikan yang berorientasi pada mutu lulusan
                secara keilmuan, moral, dan sosial.
              </li>
              <li>
                Mengembangkan sumber daya insan unggul dalam IPTEK dan IMTAQ.
              </li>
              <li>
                Menumbuhkan semangat keunggulan di bidang pengetahuan,
                teknologi, agama, budaya, dan keterampilan.
              </li>
              <li>Meningkatkan prestasi akademik dan non-akademik.</li>
              <li>
                Menerapkan pembelajaran aktif, kreatif, efektif, dan
                menyenangkan (PAIKEM).
              </li>
              <li>Meningkatkan kualitas dan kesejahteraan SDM.</li>
            </ul>
          </div>
        </article>

        {/* Sejarah & Struktur Organisasi */}
        <article className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-2">Sejarah</h2>
            <p className="text-muted-foreground">
              MA Nurul Huda berdiri sebagai wujud kepedulian masyarakat terhadap
              pendidikan berkualitas yang berlandaskan nilai-nilai Islam.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Struktur Organisasi</h2>
            <div className="grid grid-cols-4 gap-5">
              {[0, 1, 2].map((col) => (
                <ul key={col} className="space-y-2">
                  {struktur.slice(col * 5, col * 5 + 5).map((item, index) => (
                    <li
                      key={index}
                      className="cursor-pointer text-blue-600 hover:underline"
                      onClick={() => setSelected(item)}
                    >
                      {item.jabatan}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </article>
      </section>

      {/* Modal Detail */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.foto}
              alt={selected.nama}
              className="w-32 h-32 object-cover rounded-md mx-auto mb-4"
            />
            <h3 className="text-lg font-bold">{selected.nama}</h3>
            <p className="text-muted-foreground">{selected.jabatan}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => setSelected(null)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
