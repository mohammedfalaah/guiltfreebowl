"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { benefits } from "@/data/menuData";

const icons = {
  leaf: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
    </svg>
  ),
  dumbbell: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 6.5h11M6.5 17.5h11M3 10v4M21 10v4M5 8v8M19 8v8M7 6v12M17 6v12" />
    </svg>
  ),
  salad: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7c0 3-2 6-3 7H8c-1-1-3-4-3-7a7 7 0 0 1 7-7z" />
      <path d="M9 21h6M12 16v5" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  ),
  heart: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
};

export default function Benefits() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section-padding bg-off-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className={`reveal reveal-delay-${i + 1} premium-card p-8 text-center group cursor-default`}
              id={`benefit-${i}`}
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-light-sage/60 flex items-center justify-center text-fresh-green group-hover:bg-fresh-green group-hover:text-white transition-all duration-400">
                {icons[benefit.icon]}
              </div>
              <h3 className="text-lg font-bold text-deep-green mb-2 font-heading">
                {benefit.title}
              </h3>
              <p className="text-sm text-dark-text/60 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
