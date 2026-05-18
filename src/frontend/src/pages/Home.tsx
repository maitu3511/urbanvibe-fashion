import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categories, galleryImages, products, reviews } from "@/lib/data";
import { openWhatsApp } from "@/lib/whatsapp";
import {
  Award,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Shield,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

const whyChooseItems = [
  {
    icon: Award,
    title: "Premium Quality",
    desc: "Hand-selected fabrics sourced from the finest mills. Every stitch is crafted to last.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Orders dispatched within 24 hours. Delivered to your door in 2–4 business days.",
  },
  {
    icon: Sparkles,
    title: "Trendy Collection",
    desc: "New drops weekly. Always ahead of the curve with the freshest streetwear edits.",
  },
  {
    icon: Shield,
    title: "Secure Orders",
    desc: "100% authentic products with hassle-free returns and buyer protection on every order.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    desc: "Dedicated style advisors available on WhatsApp to assist you 7 days a week.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export function Home() {
  const shopRef = useRef<HTMLElement>(null);

  const scrollToShop = () => {
    shopRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* ── Hero ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        data-ocid="hero.section"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-fashion.dim_1920x1080.jpg')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        {/* Gold bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-6"
            >
              New Collection 2026
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="font-display text-6xl sm:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight text-white mb-6"
            >
              Wear
              <br />
              <span className="text-accent">Confidence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="font-body text-lg sm:text-xl text-white/75 mb-10 max-w-md leading-relaxed"
            >
              Premium Streetwear &amp; Modern Fashion Collection
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                type="button"
                size="lg"
                onClick={scrollToShop}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold tracking-widest uppercase px-8 h-14 text-sm shadow-luxury transition-smooth"
                data-ocid="hero.shop_collection_button"
              >
                Shop Collection
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                onClick={() => openWhatsApp()}
                className="border-white/60 text-white hover:bg-white hover:text-black font-display font-bold tracking-widest uppercase px-8 h-14 text-sm transition-smooth"
                data-ocid="hero.whatsapp_order_button"
              >
                <MessageCircle size={18} className="mr-2" />
                WhatsApp Order
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-body text-xs tracking-widest uppercase text-white/40">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* ── Featured Categories ── */}
      <section
        id="shop"
        className="py-24 bg-background"
        data-ocid="categories.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">
              Browse
            </p>
            <h2 className="font-display text-4xl font-black uppercase tracking-tight text-foreground">
              Featured Categories
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {categories.map((cat) => (
              <motion.div
                key={cat.id}
                variants={cardVariant}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
                data-ocid={`categories.item.${cat.id}`}
                onClick={() => openWhatsApp(cat.name)}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-display text-sm font-bold uppercase tracking-wider text-white leading-tight">
                    {cat.name}
                  </p>
                  <p className="font-body text-xs text-white/60 mt-1">
                    {cat.count} styles
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight size={14} className="text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Trending Products ── */}
      <section
        ref={shopRef as React.RefObject<HTMLElement>}
        id="products"
        className="py-24 bg-muted/30"
        data-ocid="products.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 flex items-end justify-between"
          >
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">
                This Season
              </p>
              <h2 className="font-display text-4xl font-black uppercase tracking-tight text-foreground">
                Trending Now
              </h2>
            </div>
            <button
              type="button"
              onClick={() => openWhatsApp()}
              className="hidden sm:flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-accent transition-colors duration-200 group"
              data-ocid="products.view_all_button"
            >
              View All
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                variants={cardVariant}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-luxury"
                data-ocid={`products.item.${i + 1}`}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Discount badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-accent text-accent-foreground font-display text-xs font-bold px-2 py-1 rounded tracking-wider">
                      -{product.discount}%
                    </span>
                  </div>
                  {product.badge && (
                    <div className="absolute top-3 right-3">
                      <Badge
                        variant="secondary"
                        className="font-display text-xs font-bold tracking-wider bg-black/70 text-white border-0"
                      >
                        {product.badge}
                      </Badge>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => openWhatsApp(product.name)}
                      className="font-display text-xs font-bold tracking-widest uppercase bg-white text-black px-5 py-2.5 rounded hover:bg-accent hover:text-accent-foreground transition-smooth translate-y-4 group-hover:translate-y-0"
                      data-ocid={`products.quick_order_button.${i + 1}`}
                    >
                      Quick Order
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-display text-sm font-bold text-foreground leading-tight mb-3 truncate">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-display text-lg font-black text-foreground">
                      ₹{product.price}
                    </span>
                    <span className="font-body text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                  <Button
                    type="button"
                    size="sm"
                    onClick={() => openWhatsApp(product.name)}
                    className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground font-display font-bold tracking-widest uppercase text-xs h-9 transition-smooth"
                    data-ocid={`products.order_button.${i + 1}`}
                  >
                    <MessageCircle size={13} className="mr-1.5" />
                    Order on WhatsApp
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── About Brand ── */}
      <section
        id="about"
        className="py-24 bg-background"
        data-ocid="about.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/assets/generated/about-brand.dim_800x600.jpg"
                  alt="UrbanVibe brand story"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-xl px-6 py-4 shadow-luxury">
                <p className="font-display text-3xl font-black">5K+</p>
                <p className="font-body text-xs font-semibold tracking-wider uppercase">
                  Happy Customers
                </p>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">
                Our Story
              </p>
              <h2 className="font-display text-4xl font-black uppercase tracking-tight text-foreground mb-6">
                About
                <br />
                <span className="text-accent">UrbanVibe</span>
              </h2>
              <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
                <p>
                  UrbanVibe was born from a simple belief: confidence is the
                  most powerful thing you can wear. We started as a local brand
                  with a big vision — to create streetwear that blends premium
                  quality with authentic cultural expression.
                </p>
                <p>
                  Every piece in our collection is crafted from hand-selected,
                  premium-grade fabrics — from breathable cotton blends to
                  luxurious structured knits. Our designs fuse modern streetwear
                  silhouettes with bold local identity.
                </p>
                <p>
                  From oversized tees to intricately embroidered ethnic sets,
                  each garment tells a story of craftsmanship, culture, and
                  confidence. Built for those who refuse to blend in.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 mt-8">
                {[
                  { num: "50+", label: "Designs" },
                  { num: "5K+", label: "Customers" },
                  { num: "2Y", label: "Experience" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="border-l-2 border-accent pl-4"
                  >
                    <p className="font-display text-2xl font-black text-foreground">
                      {stat.num}
                    </p>
                    <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <Button
                type="button"
                size="lg"
                onClick={() => openWhatsApp()}
                className="mt-10 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground font-display font-bold tracking-widest uppercase px-8 h-14 text-sm transition-smooth"
                data-ocid="about.order_button"
              >
                <MessageCircle size={18} className="mr-2" />
                Shop The Collection
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Instagram Gallery ── */}
      <section className="py-24 bg-muted/30" data-ocid="gallery.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">
              @urbanvibe
            </p>
            <h2 className="font-display text-4xl font-black uppercase tracking-tight text-foreground">
              Style Feed
            </h2>
            <p className="font-body text-sm text-muted-foreground mt-3">
              Follow us for daily inspiration
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.id}
                variants={cardVariant}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
                data-ocid={`gallery.item.${i + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <p className="font-body text-xs font-semibold text-white tracking-widest uppercase">
                      {img.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 bg-background" data-ocid="why.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">
              Why Us
            </p>
            <h2 className="font-display text-4xl font-black uppercase tracking-tight text-foreground">
              The UrbanVibe Difference
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {whyChooseItems.map((item, i) => (
              <motion.div
                key={item.title}
                variants={cardVariant}
                className="group bg-card rounded-xl border border-border p-6 hover:border-accent/50 hover:shadow-luxury transition-all duration-300 text-center"
                data-ocid={`why.item.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                  <item.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-display text-sm font-bold uppercase tracking-widest text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section
        id="reviews"
        className="py-24 bg-muted/30"
        data-ocid="reviews.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">
              Testimonials
            </p>
            <h2 className="font-display text-4xl font-black uppercase tracking-tight text-foreground">
              What They're Saying
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                variants={cardVariant}
                className="bg-card rounded-xl border border-border p-6 hover:border-accent/40 hover:shadow-luxury transition-all duration-300"
                data-ocid={`reviews.item.${i + 1}`}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star
                      key={`${review.id}-star-${j}`}
                      size={14}
                      className="text-accent fill-accent"
                    />
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
                  &ldquo;{review.review}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                    <span className="font-display text-xs font-bold text-accent">
                      {review.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-foreground">
                      {review.name}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      {review.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Visit Our Store (Map) ── */}
      <section
        id="location"
        className="py-24 bg-background"
        data-ocid="location.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">
              Find Us
            </p>
            <h2 className="font-display text-4xl font-black uppercase tracking-tight text-foreground">
              Visit Our{" "}
              <span className="relative inline-block">
                Store
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Map embed */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden border border-border shadow-luxury min-h-[400px]"
              data-ocid="location.map"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59148.06219745893!2d72.7913085!3d21.1702401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e4b3d3d9f3f%3A0xa0bbfbf3e97e34c3!2sSurat%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1715000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="UrbanVibe Store Location"
              />
            </motion.div>

            {/* Contact card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="bg-card border border-border rounded-xl p-8 flex flex-col justify-between hover:border-accent/40 hover:shadow-luxury transition-all duration-300"
              data-ocid="location.contact_card"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-black uppercase tracking-tight text-foreground">
                    UrbanVibe Fashion Store
                  </h3>
                </div>

                <div className="space-y-5 mb-8">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-0.5">
                        Address
                      </p>
                      <p className="font-body text-sm text-foreground leading-relaxed">
                        Main Market, Surat, Gujarat 395001, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-0.5">
                        Phone / WhatsApp
                      </p>
                      <a
                        href="https://wa.me/918460107287"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm text-foreground hover:text-accent transition-colors duration-200"
                        data-ocid="location.phone_link"
                      >
                        +91 8460107287
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail size={16} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-0.5">
                        Email
                      </p>
                      <a
                        href="mailto:hello@urbanvibe.in"
                        className="font-body text-sm text-foreground hover:text-accent transition-colors duration-200"
                        data-ocid="location.email_link"
                      >
                        hello@urbanvibe.in
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-0.5">
                        Store Hours
                      </p>
                      <p className="font-body text-sm text-foreground">
                        Mon–Sat: 10:00 AM – 7:00 PM
                      </p>
                      <p className="font-body text-sm text-muted-foreground">
                        Sun: 11:00 AM – 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Surat,Gujarat,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  data-ocid="location.directions_button"
                >
                  <Button
                    type="button"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground font-display font-bold tracking-widest uppercase text-xs h-12 transition-smooth"
                  >
                    <Navigation size={15} className="mr-2" />
                    Get Directions
                  </Button>
                </a>
                <Button
                  type="button"
                  size="lg"
                  onClick={() => openWhatsApp()}
                  className="flex-1 border border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent font-display font-bold tracking-widest uppercase text-xs h-12 transition-smooth"
                  data-ocid="location.whatsapp_button"
                >
                  <MessageCircle size={15} className="mr-2" />
                  WhatsApp Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        id="contact"
        className="py-24 bg-primary"
        data-ocid="cta.section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">
              Exclusive Access
            </p>
            <h2 className="font-display text-5xl font-black uppercase tracking-tight text-primary-foreground mb-5">
              Ready to Own
              <br />
              Your Style?
            </h2>
            <p className="font-body text-base text-primary-foreground/60 mb-10 max-w-md mx-auto">
              Order directly on WhatsApp and get exclusive deals, early access
              to drops, and personalized style advice.
            </p>
            <Button
              type="button"
              size="lg"
              onClick={() => openWhatsApp()}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-black tracking-widest uppercase px-10 h-14 text-sm shadow-luxury transition-smooth"
              data-ocid="cta.whatsapp_button"
            >
              <MessageCircle size={18} className="mr-2" />
              Order on WhatsApp Now
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
