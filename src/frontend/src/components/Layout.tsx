import { getWhatsAppUrl, openWhatsApp } from "@/lib/whatsapp";
import { Instagram, MessageCircle } from "lucide-react";
import { Navbar } from "./Navbar";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const categoryLinks = [
  { label: "Oversized T-Shirts", href: "#shop" },
  { label: "Hoodies", href: "#shop" },
  { label: "Co-ord Sets", href: "#shop" },
  { label: "Ethnic Wear", href: "#shop" },
  { label: "New Arrivals", href: "#shop" },
];

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border" data-ocid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <p className="font-display text-2xl font-black tracking-widest uppercase mb-4">
                Urban<span className="text-accent">Vibe</span>
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                UrbanVibe is a premium local streetwear brand crafting
                trend-forward fashion for those who wear their confidence.
                Premium fabrics, modern cuts.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors duration-200"
                  data-ocid="footer.instagram_link"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp us"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors duration-200"
                  data-ocid="footer.whatsapp_link"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display text-xs font-bold tracking-widest uppercase text-foreground mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="font-body text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-display text-xs font-bold tracking-widest uppercase text-foreground mb-6">
                Categories
              </h3>
              <ul className="space-y-3">
                {categoryLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="font-body text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display text-xs font-bold tracking-widest uppercase text-foreground mb-6">
                Customer Service
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    type="button"
                    onClick={() => openWhatsApp()}
                    className="font-body text-sm text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center gap-2"
                    data-ocid="footer.contact_whatsapp_button"
                  >
                    <MessageCircle size={14} />
                    +91 8460107287
                  </button>
                </li>
                <li>
                  <span className="font-body text-sm text-muted-foreground">
                    Mon–Sat: 10am – 7pm
                  </span>
                </li>
                <li>
                  <a
                    href="mailto:hello@urbanvibe.in"
                    className="font-body text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    hello@urbanvibe.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-muted-foreground tracking-wide">
              © 2026 UrbanVibe Fashion. All rights reserved.
            </p>
            <p className="font-body text-xs text-muted-foreground">
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-luxury hover:scale-110 transition-all duration-300 group"
        data-ocid="whatsapp.float_button"
      >
        <MessageCircle size={26} className="text-accent-foreground" />
      </a>
    </div>
  );
}
