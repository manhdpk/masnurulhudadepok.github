import SEO from "@/components/SEO";

const Curriculum = () => {
  return (
    <main>
      <SEO
        title="Kurikulum – MA Nurul Huda"
        description="Informasi Kurikulum Merdeka/K13, ekstrakurikuler, dan P5RA di MA Nurul Huda."
        canonical={
          typeof window !== "undefined"
            ? window.location.origin + "/kurikulum"
            : undefined
        }
      />
      <section className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Kurikulum</h1>
        <article className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Kurikulum Merdeka / K13
            </h2>
            <p className="text-muted-foreground">
              Kurikulum MA Nurul Huda mengacu pada Kurikulum Merdeka sesuai
              Keputusan Dirjen Pendis No. 450 Tahun 2024, dipadukan dengan
              kekhasan madrasah dan kebutuhan peserta didik. Menggunakan
              pendekatan saintifik, kontekstual, emosional-spiritual,
              diferensiasi, dan deep learning yang berlandaskan Kurikulum
              Berbasis Cinta serta integrasi Profil Pelajar Rahmatan lil
              ‘Alamin.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Ekstrakurikuler</h2>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Wajib: Pramuka, Paskibra.</li>
              <li>Pilihan: Futsal, Silat, Volly, Badminton.</li>
              <li>Kesenian: Vokal Grup, Hadroh, Marawis</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">P5RA</h2>
            <p className="text-muted-foreground">
              Proyek Penguatan Profil Pelajar Pancasila dan Rahmatan lil ‘Alamin
              (P5RA) melatih kepedulian lingkungan, gotong royong, dan
              kemandirian siswa.
              <p>1. Ramadhan Kreatif</p>{" "}
              <p>
                Kegiatan ini dirancang untuk mengoptimalkan potensi siswa selama
                bulan Ramadhan melalui lomba-lomba kreatif, kajian keagamaan,
                dan kegiatan sosial. Tujuannya memperkuat nilai religius,
                keterampilan kerja sama, serta kreativitas siswa dalam mengemas
                pesan dakwah secara menarik
              </p>
              <p>2. Suara Demokrasi</p>{" "}
              <p>
                Proyek ini memberikan pengalaman langsung kepada siswa untuk
                mempraktikkan prinsip demokrasi melalui kegiatan pemilihan
                pengurus OSIS. Melibatkan perencanaan kampanye, penyampaian
                visi-misi, debat kandidat, hingga pelaksanaan pemungutan suara.
              </p>
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Curriculum;
