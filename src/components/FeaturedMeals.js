"use client";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { featuredMeals, generateSimpleWhatsAppUrl } from "@/data/menuData";

export default function FeaturedMeals() {
  const sectionRef = useScrollReveal();

  return (
    <section id="meals" className="section-padding bg-cream/50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-fresh-green text-sm font-semibold tracking-widest uppercase mb-3">
            Our Meals
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-green mb-4 font-heading">
            Good Food Starts Here.
          </h2>
          <p className="text-dark-text/60 text-lg max-w-xl mx-auto">
            Healthy meals that taste as good as they make you feel.
          </p>
        </div>

        {/* Meal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredMeals.map((meal, i) => (
            <div
              key={meal.name}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} premium-card overflow-hidden group ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
              id={`featured-meal-${i}`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "h-64 sm:h-80 lg:h-full" : "h-48 sm:h-56"}`}>
                <Image
                  src={meal.image}
                  alt={meal.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes={i === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Meal type badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-deep-green text-xs font-semibold px-3 py-1.5 rounded-full">
                    {meal.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`font-bold text-deep-green mb-2 font-heading ${i === 0 ? "text-xl sm:text-2xl" : "text-lg"}`}>
                  {meal.name}
                </h3>
                <p className="text-dark-text/60 text-sm mb-4 leading-relaxed">
                  {meal.description}
                </p>
                <a
                  href={generateSimpleWhatsAppUrl(`Hi Guilt Free Bowls 👋\n\nI would like to order: ${meal.name}\n\nPlease share the price and availability.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-fresh-green hover:text-deep-green text-sm font-semibold transition-all duration-300 group/btn"
                >
                  Order Now
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
