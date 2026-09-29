"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Testimonials() {
  const sectionRef = useScrollReveal();

  const placeholders = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];

  return (
    <section className="section-padding bg-cream/40" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-fresh-green text-sm font-semibold tracking-widest uppercase mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-green mb-4 font-heading">
            What Our Customers Say
          </h2>
          <p className="text-dark-text/50 text-base max-w-md mx-auto">
            Real words from people who eat healthy with Guilt Free Bowls.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholders.map((t, i) => (
            <div
              key={t.id}
              className={`reveal reveal-delay-${i + 1} premium-card p-8`}
              id={`testimonial-${i}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <div className="mb-6">
                <p className="text-dark-text/40 text-sm leading-relaxed italic">
                  &ldquo;Customer testimonial will appear here once real reviews are collected.&rdquo;
                </p>
              </div>

              {/* Customer */}
              <div className="flex items-center gap-3 pt-4 border-t border-light-sage/50">
                <div className="w-10 h-10 rounded-full bg-light-sage flex items-center justify-center">
                  <span className="text-fresh-green text-sm font-bold">?</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-deep-green">Customer Name</p>
                  <p className="text-[11px] text-dark-text/40">Perinthalmanna</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
