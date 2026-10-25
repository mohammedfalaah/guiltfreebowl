"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { howItWorksSteps, WHATSAPP_DEFAULT_URL } from "@/data/menuData";

export default function HowItWorks() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section-padding bg-warm-cream" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-green mb-4">
            How Ordering Works
          </h2>
          <p className="text-main-text/70 text-lg sm:text-xl max-w-2xl mx-auto font-sans">
            Three simple steps to healthier eating.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12 relative mb-12">
          {/* Connector Lines (desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5">
            <div className="max-w-4xl mx-auto px-24 h-full">
              <div className="h-full bg-gradient-to-r from-fresh-green via-sage-green to-fresh-green opacity-30" />
            </div>
          </div>

          {howItWorksSteps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${i + 1} relative text-center`}
              id={`step-${i + 1}`}
            >
              {/* Number Circle */}
              <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-white shadow-xl shadow-deep-green/10 flex items-center justify-center border-4 border-sage-green/30">
                <span className="font-serif text-3xl font-bold text-deep-green">
                  {step.number}
                </span>
              </div>

              <h3 className="font-sans text-xl font-bold text-deep-green mb-3">
                {step.title}
              </h3>
              <p className="text-main-text/60 text-base leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <a
            href={WHATSAPP_DEFAULT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-fresh-green hover:bg-deep-green text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-fresh-green/20 hover:-translate-y-1"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Start Ordering on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
