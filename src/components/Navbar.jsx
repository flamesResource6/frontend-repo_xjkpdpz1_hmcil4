import { Menu, Play, Clapperboard } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#work", label: "Projects" },
    { href: "#showreel", label: "Showreel" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <div className="w-8 h-8 rounded-md bg-white/10 grid place-items-center">
            <Clapperboard className="w-5 h-5" />
          </div>
          <span className="font-semibold tracking-tight">Olaitan Ekunode</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-white transition-colors">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 font-medium hover:opacity-90 transition">
            <Play className="w-4 h-4" /> Hire Me
          </a>
        </nav>

        <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 text-white">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="block text-white/80" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 font-medium">
              <Play className="w-4 h-4" /> Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
