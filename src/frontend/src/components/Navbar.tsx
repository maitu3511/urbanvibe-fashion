import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";
import { Menu, MessageCircle, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#shop", label: "Shop" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-subtle"
          : "bg-transparent"
      }`}
      data-ocid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            className="flex items-center gap-2 group"
            onClick={(e) =>
              handleNavClick(
                e as unknown as React.MouseEvent<HTMLAnchorElement>,
                "#home",
              )
            }
            data-ocid="navbar.logo_link"
          >
            <span className="font-display text-xl lg:text-2xl font-black tracking-widest uppercase text-foreground group-hover:text-accent transition-colors duration-300">
              Urban<span className="text-accent">Vibe</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-body text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                data-ocid={`navbar.${link.label.toLowerCase()}_link`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Search"
              className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-ocid="navbar.search_button"
            >
              <Search size={18} />
            </button>
            <button
              type="button"
              aria-label="Shopping cart"
              className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-200 relative"
              data-ocid="navbar.cart_button"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label="WhatsApp order"
              onClick={() => openWhatsApp()}
              className="hidden sm:flex w-9 h-9 items-center justify-center text-muted-foreground hover:text-accent transition-colors duration-200"
              data-ocid="navbar.whatsapp_button"
            >
              <MessageCircle size={18} />
            </button>
            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-foreground"
              data-ocid="navbar.menu_toggle"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-card border-b border-border ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        data-ocid="navbar.mobile_menu"
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-body text-sm font-semibold tracking-widest uppercase text-foreground py-3 px-2 hover:text-accent transition-colors duration-200 border-b border-border/50 last:border-b-0"
              data-ocid={`navbar.mobile_${link.label.toLowerCase()}_link`}
            >
              {link.label}
            </a>
          ))}
          <Button
            type="button"
            onClick={() => openWhatsApp()}
            className="mt-3 w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold tracking-widest uppercase text-sm"
            data-ocid="navbar.mobile_whatsapp_button"
          >
            <MessageCircle size={16} className="mr-2" />
            WhatsApp Order
          </Button>
        </nav>
      </div>
    </header>
  );
}
