"use client";
import Image from "next/image";
import { WHATSAPP_DEFAULT_URL } from "@/data/menuData";

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-warm-cream">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-cream via-sage-green/5 to-soft-peach/10" />

      {/* Decorative organic shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-fresh-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-mustard-yellow/5 rounded-full blur-3xl" />

      {/* Floating leaves - subtle natural decoration */}
      <div className="absolute top-[15%] left-[8%] animate-float opacity-10">
        <LeafSVG className="w-12 h-12 text-fresh-green" />
      </div>
      <div className="absolute top-[25%] right-[12%] animate-float-slow opacity-8">
        <LeafSVG className="w-16 h-16 text-sage-green rotate-45" />
      </div>
      <div className="absolute bottom-[20%] left-[15%] animate-float-delay opacity-8">
        <LeafSVG className="w-10 h-10 text-fresh-green rotate-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Side */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-sage-green/40 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <svg className="w-4 h-4 text-fresh-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-deep-green text-sm font-medium">
                Fresh meals in Perinthalmanna, Malappuram
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-deep-green">
              Healthy Food.
              <br />
              <span className="text-fresh-green">Happy You.</span>
            </h1>

            <p className="text-main-text/70 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-sans">
              Fresh, balanced and delicious meals made to bring a little more goodness to your everyday life.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#todays-menu"
                onClick={(e) => handleScroll(e, "#todays-menu")}
                id="hero-menu-cta"
                className="inline-flex items-center justify-center gap-2 bg-fresh-green hover:bg-deep-green text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-fresh-green/20 hover:-translate-y-1"
              >
                Explore Today&apos;s Menu
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href={WHATSAPP_DEFAULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-order-cta"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-deep-green hover:bg-deep-green text-deep-green hover:text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Order on WhatsApp
              </a>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-6 text-main-text/50 text-xs sm:text-sm font-medium">
              <span className="flex items-center gap-1.5">
                <span className="text-fresh-green text-base">✓</span> Fresh Ingredients
              </span>
              <span className="w-px h-4 bg-main-text/10" />
              <span className="flex items-center gap-1.5">
                <span className="text-fresh-green text-base">✓</span> Balanced Meals
              </span>
              <span className="w-px h-4 bg-main-text/10" />
              <span className="flex items-center gap-1.5">
                <span className="text-fresh-green text-base">✓</span> Made With Care
              </span>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-fresh-green/20" />
              <div className="absolute inset-4 rounded-full border border-sage-green/30" />

              {/* Main image */}
              <div className="absolute inset-8 rounded-3xl overflow-hidden shadow-2xl shadow-deep-green/10">
                <Image
                  src="/images/hero-bowl.png"
                  alt="Guilt Free Bowls - Premium healthy meal bowl with grilled chicken, quinoa, fresh vegetables and avocado"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 500px"
                />
              </div>

              {/* Floating badge removed as per requirement - keep food photography as focus */}
            </div>
          </div>
        </div>
      </div>

      {/* No bottom wave - clean transition */}
    </section>
  );
}

function LeafSVG({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
    </svg>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
