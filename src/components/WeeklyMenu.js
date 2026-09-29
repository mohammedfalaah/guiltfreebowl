"use client";
import { useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { weeklyMenu, generateWhatsAppUrl } from "@/data/menuData";

export default function WeeklyMenu() {
  const [activeDay, setActiveDay] = useState(0);
  const sectionRef = useScrollReveal();
  const menu = weeklyMenu[activeDay];

  const mealCategories = [
    { key: "breakfast", label: "Breakfast", icon: "☀️", color: "bg-amber-50 border-amber-200" },
    { key: "lunch", label: "Lunch", icon: "🍽️", color: "bg-green-50 border-green-200", orderable: true },
    { key: "dinner", label: "Dinner", icon: "🌙", color: "bg-indigo-50 border-indigo-200" },
  ];

  return (
    <section id="weekly-menu" className="section-padding bg-off-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-fresh-green text-sm font-semibold tracking-widest uppercase mb-3">
            Weekly Menu
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-green mb-4 font-heading">
            This Week&apos;s Menu
          </h2>
          <p className="text-dark-text/60 text-lg max-w-xl mx-auto">
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
        <div className="reveal text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-deep-green font-heading">
            {menu.day}
          </h3>
        </div>

        {/* Meal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {mealCategories.map((cat) => {
            const meal = menu[cat.key];
            const isOrderable = cat.orderable;
            const whatsappUrl = generateWhatsAppUrl(meal.name, cat.label, menu.day);

            return (
              <div
                key={cat.key}
                className={`reveal premium-card overflow-hidden ${isOrderable ? "ring-2 ring-fresh-green/30 ring-offset-2" : ""}`}
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
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className={`${cat.color} border backdrop-blur-sm text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5`}>
                      <span>{cat.icon}</span>
                      {cat.label}
                    </span>
                  </div>

                  {/* Orderable indicator */}
                  {isOrderable && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-fresh-green text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Order Now
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-deep-green mb-2 font-heading leading-snug">
                    {meal.name}
                  </h4>
                  <p className="text-dark-text/55 text-sm leading-relaxed mb-5">
                    {meal.description}
                  </p>

                  {isOrderable ? (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-fresh-green hover:bg-forest-green text-white py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-fresh-green/20"
                      id={`order-${menu.day.toLowerCase()}-lunch`}
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      Order {menu.day} Lunch
                    </a>
                  ) : (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full border-2 border-light-sage hover:border-fresh-green text-forest-green py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-light-sage/30"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      Order on WhatsApp
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Free delivery badge */}
        <div className="reveal mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-light-sage/50 rounded-full px-6 py-3">
            <span className="text-lg">🚚</span>
            <span className="text-sm font-semibold text-forest-green">
              Free Delivery on All Orders
            </span>
            <span className="text-lg">•</span>
            <span className="text-sm text-dark-text/60">
              Call or WhatsApp: 9048496198
            </span>
          </div>
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
