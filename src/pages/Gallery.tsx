import SEO from "@/components/SEO";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [g1, g2, g3, g4, g5, g6];

const Gallery = () => {
  return (
    <main>
      <SEO
        title="Galeri – MA Nurul Huda"
        description="Galeri foto kegiatan MA Nurul Huda: belajar, ekstrakurikuler, dan acara sekolah."
        canonical={typeof window !== "undefined" ? window.location.origin + "/galeri" : undefined}
      />
      <section className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Galeri</h1>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((src, i) => (
            <figure key={i} className="overflow-hidden rounded-lg border border-border">
              <img
                src={src}
                alt={`Galeri MA Nurul Huda ${i + 1}`}
                className="w-full h-auto"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
