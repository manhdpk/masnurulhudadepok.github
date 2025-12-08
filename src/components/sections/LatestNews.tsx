import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { news } from "@/data/news";

const LatestNews = () => {
  const latest = news.slice(0, 3); // hanya 3 berita terbaru

  return (
    <section className="container mx-auto py-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-bold">Berita Terbaru</h2>
        <Link to="/berita" className="text-sm text-primary">
          Lihat semua
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {latest.map((item) => (
          <Card key={item.id} className="h-full">
            <CardHeader>
              <Link to={`/berita/${item.id}`}>
                <CardTitle className="text-lg hover:underline">
                  {item.title}
                </CardTitle>
              </Link>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
