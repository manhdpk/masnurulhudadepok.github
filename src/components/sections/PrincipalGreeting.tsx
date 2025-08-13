import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Kepala from "@/assets/Pak dayat smbtn.jpg";
const PrincipalGreeting = () => {
  return (
    <section className="container mx-auto py-12">
      <article className="grid gap-6 md:grid-cols-3 items-start">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-2">Sambutan Kepala Madrasah</h2>
          <img
            src={Kepala}
            alt="Kepala Sekolah MA Nurul Huda"
            className="w-340 h-320"
          />
        </div>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Assalamu’alaikum warahmatullahi wabarakatuh</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Puji syukur kita panjatkan ke hadirat Allah SWT yang telah
              melimpahkan rahmat, taufik, dan hidayah-Nya kepada kita semua.
              Shalawat serta salam semoga senantiasa tercurah kepada junjungan
              kita Nabi Muhammad SAW, keluarga, sahabat, dan pengikutnya hingga
              akhir zaman. Dengan mengucapkan rasa syukur, kami menyambut baik
              hadirnya website resmi MA Nurul Huda sebagai media informasi,
              komunikasi, dan publikasi berbagai kegiatan madrasah kepada
              seluruh warga sekolah, orang tua, alumni, serta masyarakat luas.
              Website ini diharapkan dapat menjadi sarana yang efektif untuk
              menyampaikan informasi terkini terkait kegiatan pembelajaran,
              prestasi siswa, program madrasah, dan pengumuman penting lainnya.
              Selain itu, kami berharap website ini dapat mempererat hubungan
              antara madrasah dengan masyarakat serta menjadi jendela untuk
              memperkenalkan MA Nurul Huda kepada dunia luar. Akhirnya, kami
              mengajak seluruh warga madrasah untuk memanfaatkan website ini
              dengan baik dan bijak. Semoga Allah SWT senantiasa memberikan
              keberkahan dan kelancaran dalam setiap langkah kita.
            </p>
            <p className="mt-4 font-medium">
              Wassalamu’alaikum warahmatullahi wabarakatuh.
            </p>
            <p className="text-sm text-muted-foreground">Kepala Madrasah</p>
          </CardContent>
        </Card>
      </article>
    </section>
  );
};

export default PrincipalGreeting;
