import SEO from "@/components/SEO";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// Schema Validasi
const schema = z.object({
  studentName: z.string().min(3, "Nama siswa minimal 3 karakter"),
  nisn: z.string().min(5, "NISN tidak valid"),
  birthDate: z.string().min(1, "Tanggal lahir wajib diisi"),
  gender: z.enum(["L", "P"]),
  address: z.string().min(10, "Alamat minimal 10 karakter"),
  prevSchool: z.string().min(3, "Asal sekolah wajib diisi"),
  parentName: z.string().min(3, "Nama orang tua wajib diisi"),
  phone: z.string().min(8, "No. HP tidak valid"),
  email: z.string().email("Email tidak valid").optional().or(z.literal("")),
  programType: z.enum(["siswaBaru", "pindahan"]),
  kelas: z.string().optional(),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

// URL Google Apps Script Web App
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzKTlorL6VxtRmj0WJzRIfHXRbz_v6qBDfvEXYyFIEluapee8GNd6Sb6IWXwPm8qyXX/exec";

const PPDB = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { gender: "L" },
  });

  const programType = watch("programType");

  const onSubmit = async (data: FormData) => {
    let programFinal = "";
    if (data.programType === "siswaBaru") {
      programFinal = "Siswa Baru";
    } else if (data.programType === "pindahan") {
      programFinal = `Siswa Pindahan kelas ${data.kelas || "-"}`;
    }

    const kirimData = { ...data, program: programFinal };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(kirimData),
      });

      toast.success("Pendaftaran berhasil dikirim!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Terjadi kesalahan saat mengirim data.");
    }
  };

  return (
    <main>
      <SEO
        title="PPDB Online – MA Nurul Huda"
        description="Formulir pendaftaran siswa baru (PPDB) MA Nurul Huda."
        canonical={
          typeof window !== "undefined"
            ? window.location.origin + "/ppdb"
            : undefined
        }
      />

      <section className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">PPDB Online</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-6 md:grid-cols-2"
        >
          {/* Kiri */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="studentName">Nama Siswa</Label>
              <Input
                id="studentName"
                placeholder="Nama lengkap"
                {...register("studentName")}
              />
              {errors.studentName && (
                <p className="text-sm text-destructive">
                  {errors.studentName.message}
                </p>
              )}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="nisn">NISN</Label>
                <Input id="nisn" placeholder="NISN" {...register("nisn")} />
                {errors.nisn && (
                  <p className="text-sm text-destructive">
                    {errors.nisn.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="birthDate">Tanggal Lahir</Label>
                <Input id="birthDate" type="date" {...register("birthDate")} />
                {errors.birthDate && (
                  <p className="text-sm text-destructive">
                    {errors.birthDate.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label>Jenis Kelamin</Label>
              <div className="flex gap-6 mt-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="laki"
                    value="L"
                    {...register("gender")}
                    defaultChecked
                  />
                  <Label htmlFor="laki">Laki-laki</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="perempuan"
                    value="P"
                    {...register("gender")}
                  />
                  <Label htmlFor="perempuan">Perempuan</Label>
                </div>
              </div>
              {errors.gender && (
                <p className="text-sm text-destructive">
                  {errors.gender.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="address">Alamat</Label>
              <Textarea
                id="address"
                rows={4}
                placeholder="Alamat lengkap"
                {...register("address")}
              />
              {errors.address && (
                <p className="text-sm text-destructive">
                  {errors.address.message}
                </p>
              )}
            </div>
          </div>

          {/* Kanan */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="prevSchool">Asal Sekolah</Label>
              <Input
                id="prevSchool"
                placeholder="SMP/MTs asal"
                {...register("prevSchool")}
              />
              {errors.prevSchool && (
                <p className="text-sm text-destructive">
                  {errors.prevSchool.message}
                </p>
              )}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="parentName">Nama Orang Tua/Wali</Label>
                <Input
                  id="parentName"
                  placeholder="Nama orang tua/wali"
                  {...register("parentName")}
                />
                {errors.parentName && (
                  <p className="text-sm text-destructive">
                    {errors.parentName.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="phone">No. HP</Label>
                <Input
                  id="phone"
                  placeholder="08xxxxxxxxxx"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="email">Email (opsional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@contoh.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label>Siswa Baru / Pindahan</Label>
                <div className="flex gap-6 mt-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="siswaBaru"
                      value="siswaBaru"
                      {...register("programType", {
                        required: "Pilih siswa baru atau pindahan",
                      })}
                    />
                    <Label htmlFor="siswaBaru">Siswa Baru</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="pindahan"
                      value="pindahan"
                      {...register("programType", {
                        required: "Pilih siswa baru atau pindahan",
                      })}
                    />
                    <Label htmlFor="pindahan">Pindahan</Label>
                  </div>
                </div>
                {errors.programType && (
                  <p className="text-sm text-destructive">
                    {errors.programType.message}
                  </p>
                )}

                {programType === "pindahan" && (
                  <div className="mt-3">
                    <Label htmlFor="kelas">Kelas (jika pindahan)</Label>
                    <Input
                      id="kelas"
                      placeholder="Tuliskan kelas"
                      {...register("kelas", {
                        required: "Kelas wajib diisi jika pindahan",
                      })}
                    />
                    {errors.kelas && (
                      <p className="text-sm text-destructive">
                        {errors.kelas.message}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="notes">Catatan (opsional)</Label>
              <Textarea
                id="notes"
                rows={4}
                placeholder="Keterangan tambahan"
                {...register("notes")}
              />
            </div>

            <Button type="submit" variant="hero" disabled={isSubmitting}>
              {isSubmitting ? "Mengirim..." : "Kirim Pendaftaran"}
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default PPDB;
