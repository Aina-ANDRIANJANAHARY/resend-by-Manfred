import { useState } from "react";
import { navigation } from "@/lib/data/content";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="font-sans text-xl font-bold text-white tracking-tight">
          resend
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Log in
          </a>
          <a
            href="#pricing"
            className="inline-flex h-9 items-center px-5 bg-[#00A3FF] text-white text-sm font-medium hover:bg-[#0090E6] transition-colors shadow-md shadow-[#00A3FF]/20"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-black/95">
          <nav className="container py-6 flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-zinc-400 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="border-t border-zinc-800 pt-4 mt-2 flex flex-col gap-3">
              <a href="#" className="text-sm font-medium text-zinc-400">
                Log in
              </a>
              <a
                href="#pricing"
                className="inline-flex h-9 items-center justify-center bg-[#00A3FF] text-white text-sm font-medium"
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
