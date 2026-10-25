"use client";
import { weeklyMenu } from "@/data/menuData";

export default function DaySelector({ selectedDay, onDayChange }) {
  const days = weeklyMenu.map(menu => ({
    day: menu.day,
    short: menu.short
  }));

  return (
    <div className="mb-12">
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 bg-white border-2 border-sage-green/30 rounded-full p-2 shadow-lg overflow-x-auto max-w-full">
          {days.map((dayInfo) => (
            <button
              key={dayInfo.day}
              onClick={() => onDayChange(dayInfo.day)}
              className={`day-tab ${selectedDay === dayInfo.day ? 'active' : ''}`}
              aria-label={`Select ${dayInfo.day}`}
            >
              <span className="hidden sm:inline">{dayInfo.day}</span>
              <span className="inline sm:hidden font-bold">{dayInfo.short}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Helper text */}
      <p className="text-center text-sm text-main-text/50 mt-4">
        Select a day to view available meals
      </p>
    </div>
  );
}
