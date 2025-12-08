import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { news } from "@/data/news";

function AllNews() {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">Semua Berita</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {news.map((item) => (
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
}

export default AllNews;
