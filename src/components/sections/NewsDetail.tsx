import { useParams, Link } from "react-router-dom";
import { news } from "@/data/news";
import { useCallback } from "react";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const currentNews = news.find((n) => n.id === Number(id));

  const handleShare = useCallback(() => {
    if (!currentNews) return;

    const shareData = {
      title: currentNews.title,
      text: currentNews.excerpt || currentNews.content,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch((err) => {
        console.error("Gagal share:", err);
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link berita telah disalin ke clipboard.");
    }
  }, [currentNews]);

  if (!currentNews) {
    return <p className="container mx-auto py-12">Berita tidak ditemukan.</p>;
  }

  const otherNews = news.filter((n) => n.id !== Number(id));

  return (
    <section className="container mx-auto py-12">
      {/* Gambar Berita */}
      {currentNews.image && (
        <img
          src={currentNews.image}
          alt={currentNews.title}
          className="w-full max-h-94 object-cover rounded-lg mb-10"
        />
      )}

      {/* Judul dan Konten */}
      <h1 className="text-3xl font-bold mb-4">{currentNews.title}</h1>
      <p className="text-muted-foreground mb-8 whitespace-pre-line">
        {currentNews.content}
      </p>

      {/* Tombol Share */}
      <button
        onClick={handleShare}
        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
      >
        Bagikan Berita
      </button>

      {/* Berita Lainnya */}
      <hr className="my-8" />
      <h2 className="text-xl font-semibold mb-4">Berita Lainnya</h2>
      <ul className="list-disc pl-5 space-y-2">
        {otherNews.map((item) => (
          <li key={item.id}>
            <Link
              to={`/berita/${item.id}`}
              className="text-primary hover:underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsDetail;
