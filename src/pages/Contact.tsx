import SEO from "@/components/SEO";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(8, "No. HP tidak valid"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const phoneNumber = "6285885242273"; // Nomor WA tujuan
    const text = `Halo, saya ${data.name}.
Email: ${data.email}
No. HP: ${data.phone}

Pesan:
${data.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
    reset();
  };

  return (
    <main>
      <SEO
        title="Kontak – MA Nurul Huda"
        description="Kontak MA Nurul Huda: alamat, peta lokasi, formulir kontak, dan sosial media resmi."
        canonical={
          typeof window !== "undefined"
            ? window.location.origin + "/kontak"
            : undefined
        }
      />

      <section className="container mx-auto py-10 grid gap-10 lg:grid-cols-2">
        {/* Kolom Kiri */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Kontak</h1>
          <p className="text-muted-foreground mb-4">
            Jl. Pondok Pesantren. 2, Kp. Rumbut No.RT. 06/09, Kelurahan Pasir
            Gunung Selatan, Kecamatan Cimanggis, Kota Depok, Jawa Barat 16451
          </p>

          {/* Peta Lokasi */}
          <div className="aspect-video w-full overflow-hidden rounded-lg border border-border mb-6">
            <iframe
              title="Peta Lokasi MA Nurul Huda"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.6729509048767!2d106.84733591586917!3d-6.344342000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed0519e65ae5%3A0x3207a294c6e99923!2sPondok%20Pesantren%20Nurul%20Huda%20Rumbut!5e0!3m2!1sid!2sid!4v1765176130725!5m2!1sid!2sid"
              className="w-full h-full"
            />
          </div>

          {/* Sosial Media */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Sosial Media</h2>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://whatsapp.com/channel/0029VaFzKuY7DAWwoRWSeK2K"
                  target="_blank"
                  className="text-green-600 hover:underline"
                >
                  📢 Saluran WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ma.nurulhuda.depok/"
                  target="_blank"
                  className="text-pink-500 hover:underline"
                >
                  📸 Instagram
                </a>
              </li>
              <li>
                <a
                  href="youtube.com/channel/UCGA9-dnlm2C7wB8EpL472rg"
                  target="_blank"
                  className="text-red-600 hover:underline"
                >
                  ▶️ YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/Madrasah.Nurul.Huda.Official"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  👍 Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@manurulhudarumbut"
                  target="_blank"
                  className="text-black hover:underline"
                >
                  🎵 TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Kolom Kanan - Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Formulir Kontak</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input placeholder="Nama lengkap" {...register("name")} />
              {errors.name && (
                <p className="text-sm text-destructive mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Input placeholder="No. HP" {...register("phone")} />
                {errors.phone && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <Textarea
                rows={5}
                placeholder="Tuliskan pesan Anda"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-sm text-destructive mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <Button type="submit" variant="hero" disabled={isSubmitting}>
              {isSubmitting ? "Mengirim..." : "Kirim via WhatsApp"}
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
