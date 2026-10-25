"use client";
import { useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { weeklyMenu, orderMeal } from "@/data/menuData";

export default function WeeklyMenu() {
  const [activeDay, setActiveDay] = useState(0);
  const sectionRef = useScrollReveal();
  const menu = weeklyMenu[activeDay];

  const handleMealOrder = (meal, category) => {
    const mealDetails = meal.details || meal.name;
    orderMeal({
      day: menu.day,
      category: category,
      mealName: meal.name,
      mealDetails
    });
  };

  const mealCategories = [
    { key: "breakfast", label: "Breakfast", icon: "☀️", color: "bg-mustard-yellow/20 border-mustard-yellow/40" },
    { key: "lunch", label: "Lunch", icon: "🍽️", color: "bg-soft-peach/30 border-soft-peach" },
    { key: "dinner", label: "Dinner", icon: "🌙", color: "bg-sage-green/40 border-sage-green" },
  ];

  return (
    <section id="weekly-menu" className="section-padding bg-warm-cream" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-green mb-4">
            Your Week, Made Healthier.
          </h2>
          <p className="text-main-text/70 text-lg sm:text-xl max-w-2xl mx-auto font-sans">
            A different delicious way to eat healthy every day.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="reveal flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {weeklyMenu.map((item, i) => (
            <button
              key={item.day}
              onClick={() => setActiveDay(i)}
              className={`day-tab ${activeDay === i ? "active" : ""}`}
              id={`day-tab-${item.short.toLowerCase()}`}
            >
              <span className="hidden sm:inline">{item.day}</span>
              <span className="sm:hidden">{item.short}</span>
            </button>
          ))}
        </div>

        {/* Day Label */}
        <div className="reveal text-center mb-10">
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-deep-green">
            {menu.day}
          </h3>
        </div>

        {/* Meal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {mealCategories.map((cat) => {
            const meal = menu[cat.key];

            return (
              <div
                key={cat.key}
                className="reveal premium-card overflow-hidden"
                id={`menu-${menu.day.toLowerCase()}-${cat.key}`}
              >
                {/* Meal Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden group">
                  <Image
                    src={meal.image}
                    alt={`${meal.name} - ${menu.day} ${cat.label}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`${cat.color} border backdrop-blur-sm text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5`}>
                      <span>{cat.icon}</span>
                      {cat.label}
                    </span>
                  </div>

                  {/* Veg/Non-Veg Indicator */}
                  <div className="absolute top-4 right-4">
                    {meal.isVeg ? (
                      <div className="bg-white rounded-lg px-2.5 py-1.5 shadow-md flex items-center gap-1.5">
                        <span className="veg-indicator scale-75" />
                        <span className="text-[10px] font-bold text-green-700">VEG</span>
                      </div>
                    ) : (
                      <div className="bg-white rounded-lg px-2.5 py-1.5 shadow-md flex items-center gap-1.5">
                        <span className="non-veg-indicator scale-75" />
                        <span className="text-[10px] font-bold text-red-700">NON-VEG</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="font-serif text-lg font-bold text-deep-green mb-2 leading-snug">
                    {meal.name}
                  </h4>
                  
                  {meal.details && meal.details !== meal.name && (
                    <p className="text-fresh-green text-xs font-medium mb-2">
                      {meal.details}
                    </p>
                  )}
                  
                  <p className="text-main-text/60 text-sm leading-relaxed mb-5">
                    {meal.description}
                  </p>

                  <button
                    onClick={() => handleMealOrder(meal, cat.label)}
                    className="flex items-center justify-center gap-2 w-full bg-fresh-green hover:bg-deep-green text-white py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-fresh-green/20"
                    id={`order-${menu.day.toLowerCase()}-${cat.key}`}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Order This Meal
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Menu CTA */}
        <div className="reveal mt-12 text-center">
          <a
            href="#todays-menu"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#todays-menu");
              if (el) {
                const offset = 80;
                const y = el.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 text-fresh-green font-semibold hover:text-deep-green transition-colors text-lg"
          >
            View Full Weekly Menu
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
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
