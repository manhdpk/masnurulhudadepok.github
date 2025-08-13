import SEO from "@/components/SEO";

const Profile = () => {
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
        <h1 className="text-3xl font-bold mb-6">Profil</h1>
        <article className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-2">Visi</h2>
            <p className="text-muted-foreground">
              Terwujudnya madrasah unggul dalam iman, ilmu, dan akhlak mulia.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Misi</h2>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Menanamkan nilai-nilai keislaman dalam setiap kegiatan.</li>
              <li>Meningkatkan kompetensi akademik dan non-akademik.</li>
              <li>Mewujudkan lingkungan belajar yang aman dan nyaman.</li>
            </ul>
          </div>
        </article>
        <article className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-2">Sejarah</h2>
            <p className="text-muted-foreground">
              MA Nurul Huda berdiri sebagai wujud kepedulian masyarakat terhadap
              pendidikan berkualitas yang berlandaskan nilai-nilai Islam.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Struktur Organisasi</h2>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Kepala Madrasah</li>
              <li>Wakil Kepala (Kurikulum, Kesiswaan, Sarpras)</li>
              <li>Dewan Guru dan Staf</li>
              <li>Komite Madrasah</li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Profile;
