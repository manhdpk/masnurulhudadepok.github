// generate-share-pages.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { news } from "./src/data/news.js"; // <-- sesuaikan path kalau beda

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, "public", "share");

// pastikan folder public/share ada
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

news.forEach((item) => {
  const html = `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>${item.title}</title>
    <meta name="description" content="${item.excerpt}" />
    <meta property="og:title" content="${item.title}" />
    <meta property="og:description" content="${item.excerpt}" />
    <meta property="og:image" content="https://domain.com/${item.image}" />
    <meta property="og:url" content="https://domain.com/berita/${item.id}" />
    <meta property="og:type" content="article" />
  </head>
  <body>
    <script>window.location.href="/berita/${item.id}";</script>
  </body>
</html>`;

  fs.writeFileSync(path.join(outputDir, `${item.id}.html`), html, "utf8");
  console.log(`✅ Generated share page: public/share/${item.id}.html`);
});
