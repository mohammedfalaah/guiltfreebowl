"use client";
import Image from "next/image";
import { orderMeal } from "@/data/menuData";

export default function MealCard({ meal, day }) {
  if (!meal) return null;

  const handleOrder = () => {
    const mealDetails = meal.details || meal.name;
    orderMeal({
      day,
      category: meal.category,
      mealName: meal.name,
      mealDetails
    });
  };

  // Determine category class for styling
  const categoryClass = meal.category.toLowerCase();

  return (
    <div className={`premium-card meal-card-${categoryClass} overflow-hidden`}>
      <div className="grid md:grid-cols-[300px,1fr] gap-6">
        {/* Image Section */}
        <div className="relative h-64 md:h-full min-h-[250px]">
          <Image
            src={meal.image}
            alt={`${meal.name} - ${meal.description}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 300px"
          />
          
          {/* Veg/Non-Veg Indicator */}
          <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 shadow-md">
            {meal.isVeg ? (
              <div className="flex items-center gap-2">
                <span className="veg-indicator" />
                <span className="text-xs font-semibold text-green-700">Veg</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="non-veg-indicator" />
                <span className="text-xs font-semibold text-red-700">Non-Veg</span>
              </div>
            )}
          </div>

          {/* Category Badge */}
          <div className={`absolute bottom-4 left-4 category-badge-${categoryClass} rounded-full px-4 py-1.5 shadow-lg`}>
            <span className="text-xs font-bold uppercase tracking-wider">
              {meal.category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 flex flex-col justify-between">
          <div className="mb-6">
            <h4 className="font-serif text-2xl md:text-3xl font-bold text-deep-green mb-3">
              {meal.name}
            </h4>
            
            {meal.details && meal.details !== meal.name && (
              <p className="text-fresh-green font-medium mb-3 text-sm">
                {meal.details}
              </p>
            )}
            
            <p className="text-main-text/70 text-base leading-relaxed mb-4">
              {meal.description}
            </p>

            {meal.time && (
              <div className="flex items-center gap-2 text-sm text-main-text/60">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Available {meal.time}</span>
              </div>
            )}
          </div>

          {/* CTA */}
          <div>
            <button
              onClick={handleOrder}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-fresh-green hover:bg-deep-green text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-fresh-green/20 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Order This Meal
            </button>
            <p className="text-xs text-main-text/50 mt-3">
              Opens WhatsApp to confirm price, availability, and delivery details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
