import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/MA NH LOGO HD.png"; // Import logo agar aman di semua route

// Daftar menu navigasi
const navItems = [
  { to: "/", label: "Beranda" },
  { to: "/profil", label: "Profil" },
  { to: "/kurikulum", label: "Kurikulum" },
  { to: "/galeri", label: "Galeri" },
  { to: "/kontak", label: "Kontak" },
  { to: "/berita", label: "Berita" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo MA Nurul Huda"
            className="h-8 w-8 rounded-md object-cover"
          />
          <span className="font-semibold text-lg leading-none">
            MA Nurul Huda
          </span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button asChild variant="hero">
            <Link to="/ppdb">PPDB Online</Link>
          </Button>
        </div>

        {/* Tombol Menu Mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-border p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu"
        >
          <Menu />
        </button>
      </nav>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden border-t border-border">
          <div className="container mx-auto py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 ${isActive ? "text-primary" : "text-foreground/80"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild variant="hero" onClick={() => setOpen(false)}>
              <Link to="/ppdb">PPDB Online</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
