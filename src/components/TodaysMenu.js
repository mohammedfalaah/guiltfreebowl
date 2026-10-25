"use client";
import { useState, useEffect } from "react";
import { weeklyMenu, getTodaysDayName, MEAL_TIMES } from "@/data/menuData";
import DaySelector from "./DaySelector";
import MealCard from "./MealCard";

export default function TodaysMenu() {
  const [selectedDay, setSelectedDay] = useState(getTodaysDayName());
  const [showVegOnly, setShowVegOnly] = useState(false);

  if (!selectedDay) {
    return null; // Don't render until we have a selected day
  }

  const selectedMenu = weeklyMenu.find(menu => menu.day === selectedDay);
  
  // Check if today is Sunday
  const isSunday = selectedDay === 'Sunday';

  // Filter meals if veg only is selected
  const getMeals = () => {
    if (!selectedMenu) return { breakfast: null, lunch: null, dinner: null };
    
    const meals = {
      breakfast: selectedMenu.breakfast,
      lunch: selectedMenu.lunch,
      dinner: selectedMenu.dinner
    };

    if (showVegOnly) {
      return {
        breakfast: meals.breakfast?.isVeg ? meals.breakfast : null,
        lunch: meals.lunch?.isVeg ? meals.lunch : null,
        dinner: meals.dinner?.isVeg ? meals.dinner : null
      };
    }

    return meals;
  };

  const meals = getMeals();
  const hasAnyMeals = meals.breakfast || meals.lunch || meals.dinner;

  return (
    <section id="todays-menu" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-green mb-4">
            What&apos;s Cooking Today?
          </h2>
          <p className="text-main-text/70 text-lg sm:text-xl max-w-2xl mx-auto font-sans">
            Good food, thoughtfully prepared. Find your favourite meal and order it in just a few taps.
          </p>
        </div>

        {/* Day Selector */}
        <DaySelector 
          selectedDay={selectedDay} 
          onDayChange={setSelectedDay}
        />

        {/* Vegetarian Filter */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setShowVegOnly(!showVegOnly)}
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              showVegOnly
                ? 'bg-fresh-green text-white shadow-lg'
                : 'bg-sage-green/30 text-deep-green hover:bg-sage-green/50'
            }`}
          >
            <span className="veg-indicator" />
            <span>Looking for Veg? We&apos;ve Got You.</span>
          </button>
        </div>

        {/* Sunday Message */}
        {isSunday && (
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-sage-green/30 border-2 border-fresh-green/20 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="font-serif text-2xl font-bold text-deep-green mb-3">
                Taking a Sunday Break
              </h3>
              <a
                href="#weekly-menu"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector("#weekly-menu");
                  if (el) {
                    const offset = 80;
                    const y = el.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 text-fresh-green font-semibold hover:text-deep-green transition-colors"
              >
                View Full Weekly Menu
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        )}

        {/* Meal Categories */}
        {!isSunday && hasAnyMeals && (
          <div className="space-y-16">
            {/* Breakfast Section */}
            {meals.breakfast && (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-mustard-yellow/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-mustard-yellow" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-deep-green">Breakfast</h3>
                      <p className="text-sm text-main-text/60">{MEAL_TIMES.breakfast}</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-6">
                  <MealCard meal={meals.breakfast} day={selectedDay} />
                </div>
              </div>
            )}

            {/* Lunch Section */}
            {meals.lunch && (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-soft-peach/40 flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-deep-green">Lunch</h3>
                      <p className="text-sm text-main-text/60">{MEAL_TIMES.lunch}</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-6">
                  <MealCard meal={meals.lunch} day={selectedDay} />
                </div>
              </div>
            )}

            {/* Dinner Section */}
            {meals.dinner && (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-sage-green/50 flex items-center justify-center">
                      <svg className="w-6 h-6 text-fresh-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-deep-green">Dinner</h3>
                      <p className="text-sm text-main-text/60">{MEAL_TIMES.dinner}</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-6">
                  <MealCard meal={meals.dinner} day={selectedDay} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* No Veg Meals Available Message */}
        {!isSunday && !hasAnyMeals && showVegOnly && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-sage-green/20 border-2 border-fresh-green/20 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-3">🥗</div>
              <h3 className="font-serif text-xl font-bold text-deep-green mb-2">
                No Vegetarian Meals Today
              </h3>
              <p className="text-main-text/70 mb-4">
                We don&apos;t have vegetarian options available for {selectedDay}. Try another day or get in touch for custom options.
              </p>
              <button
                onClick={() => setShowVegOnly(false)}
                className="text-fresh-green font-semibold hover:text-deep-green transition-colors"
              >
                Show All Meals
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
