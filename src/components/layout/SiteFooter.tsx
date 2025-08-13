const SiteFooter = () => {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="container mx-auto py-8 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold mb-2">MA Nurul Huda</h3>
          <p className="text-sm text-muted-foreground">
            Madrasah Aliyah yang unggul dalam iman, ilmu, dan akhlak.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Alamat</h4>
          <p className="text-sm text-muted-foreground">
            Jl. Pondok Pesantren. 2, Kp. Rumbut No.RT. 06/09, Kelurahan Pasir
            Gunung Selatan Kecamatan Cmanggis Kota Depok, Jawa Barat 16451
          </p>
        </div>
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
