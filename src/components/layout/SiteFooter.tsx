const SiteFooter = () => {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="container mx-auto py-8 grid gap-6 md:grid-cols-4">
        {/* Akses Voucher WiFi */}
        <div>
          <h3 className="font-semibold mb-2">Akses Link Lainnya</h3>
          <a
            href="http://0.tcp.ap.ngrok.io:11339/"
            className="text-sm text-blue-600 hover:underline"
          >
            RDM MA Nurul Huda
          </a>
        </div>

        {/* MA Nurul Huda */}
        <div>
          <h3 className="font-semibold mb-2">MA Nurul Huda</h3>
          <p className="text-sm text-muted-foreground">
            Madrasah Aliyah yang unggul dalam iman, ilmu, dan akhlak.
          </p>
        </div>

        {/* Alamat */}
        <div>
          <h4 className="font-medium mb-2">Alamat</h4>
          <p className="text-sm text-muted-foreground">
            Jl. Pondok Pesantren No. 2, Kp. Rumbut RT. 06/09, Kelurahan Pasir
            Gunung Selatan, Kecamatan Cimanggis Kota Depok, Jawa Barat 16451
          </p>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="font-medium mb-2">Kontak</h4>
          <p className="text-sm text-muted-foreground">
            Telp: +62 821-3034-4627 <br />
            Email: masnurulhuda984@gmail.com
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} MA Nurul Huda. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
