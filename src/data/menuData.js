// ===== WHATSAPP CONFIG =====
export const WHATSAPP_NUMBER = "919048496198";
export const BRAND_NAME = "Guilt Free Bowls";

// ===== WHATSAPP URL GENERATOR =====
export function orderMeal({ day, category, mealName, mealDetails }) {
  const messageParts = [
    `Hi ${BRAND_NAME}! 👋`,
    "",
    `I'd like to order the ${day} ${category.toLowerCase()} meal.`,
    ""
  ];

  if (mealDetails) {
    messageParts.push(`Menu: ${mealDetails}`);
  } else {
    messageParts.push(`Meal: ${mealName}`);
  }



  messageParts.push(
    "",
    "Please share the price, availability, and delivery details.",
    "",
    "Thank you!"
  );

  const message = messageParts.join("\n");
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  
  window.open(url, "_blank", "noopener,noreferrer");
}

export function generateSimpleWhatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const WHATSAPP_DEFAULT_URL = generateSimpleWhatsAppUrl(
  "Hi Guilt Free Bowls! I'd like to know more about your menu and meal options."
);

export const WHATSAPP_DELIVERY_URL = generateSimpleWhatsAppUrl(
  "Hi Guilt Free Bowls! I would like to know whether delivery is available in my area. Please share your delivery areas and charges."
);

// ===== MEAL TIMES =====
export const MEAL_TIMES = {
  breakfast: "7:00 AM – 9:00 AM",
  lunch: "12:00 PM – 2:00 PM",
  dinner: "7:00 PM – 9:00 PM"
};

// ===== WEEKLY MENU DATA =====
// Based on the menu posters provided
export const weeklyMenu = [
  {
    day: "Monday",
    short: "MON",
    breakfast: {
      name: "Chicken Chappathi Roll",
      image: "/images/chicken-wrap.png",
      description: "Wholesome chappathi wrapped with tender chicken and fresh vegetables.",
      category: "Breakfast",
      isVeg: false,
      time: MEAL_TIMES.breakfast
    },
    lunch: {
      name: "Green Egg Rice",
      details: "Green Egg Rice, Chicken Tikka, Chickpea Salad, Fruits & Nuts",
      image: "/images/sweet-corn-rice.png",
      description: "Fragrant green rice with succulent chicken tikka, protein-rich chickpea salad, and fresh fruits.",
      category: "Lunch",
      isVeg: false,
      time: MEAL_TIMES.lunch
    },
    dinner: {
      name: "Sautéed Vegetables with Chicken",
      details: "Sautéed Vegetables with Chicken, Oats Alfredo Sauce",
      image: "/images/chicken-veg-bowl.png",
      description: "Tender chicken with colorful vegetables in a creamy oats alfredo sauce.",
      category: "Dinner",
      isVeg: false,
      time: MEAL_TIMES.dinner
    }
  },
  {
    day: "Tuesday",
    short: "TUE",
    breakfast: {
      name: "Creamy Chicken Mushroom Oats",
      image: "/images/overnight-oats.png",
      description: "Savory oats with tender chicken and mushrooms for a hearty start.",
      category: "Breakfast",
      isVeg: false,
      time: MEAL_TIMES.breakfast
    },
    lunch: {
      name: "Pineapple Rice",
      details: "Pineapple Rice, Pepper Chicken, Sprout Salad, Egg, Fruits & Nuts",
      image: "/images/sweet-corn-rice.png",
      description: "Sweet and tangy pineapple rice paired with spicy pepper chicken and nutritious sprouts.",
      category: "Lunch",
      isVeg: false,
      time: MEAL_TIMES.lunch
    },
    dinner: {
      name: "Sweet Potato Chicken Salad",
      image: "/images/quinoa-salad.png",
      description: "Roasted sweet potato with grilled chicken in a light, refreshing salad.",
      category: "Dinner",
      isVeg: false,
      time: MEAL_TIMES.dinner
    }
  },
  {
    day: "Wednesday",
    short: "WED",
    breakfast: {
      name: "Apple Avocado Smoothie Bowl",
      image: "/images/smoothie-bowl.png",
      description: "Creamy, naturally sweet and packed with good fats for sustained energy.",
      category: "Breakfast",
      isVeg: true,
      time: MEAL_TIMES.breakfast
    },
    lunch: {
      name: "Little Millet Chicken Fried Rice",
      details: "Little Millet Chicken Fried Rice, Cowpea Salad, Boiled Egg, Fruits & Nuts",
      image: "/images/sweet-corn-rice.png",
      description: "Wholesome little millet fried rice with chicken, protein-rich cowpea salad, and boiled egg.",
      category: "Lunch",
      isVeg: false,
      time: MEAL_TIMES.lunch
    },
    dinner: {
      name: "Chicken Pineapple Salad",
      image: "/images/mediterranean-salad.png",
      description: "Fresh, tropical and full of flavour with grilled chicken and juicy pineapple.",
      category: "Dinner",
      isVeg: false,
      time: MEAL_TIMES.dinner
    }
  },
  {
    day: "Thursday",
    short: "THU",
    breakfast: {
      name: "Kulfi Overnight Oats",
      image: "/images/overnight-oats.png",
      description: "Creamy overnight oats with traditional kulfi flavours. A sweet, satisfying start.",
      category: "Breakfast",
      isVeg: true,
      time: MEAL_TIMES.breakfast
    },
    lunch: {
      name: "Lemon Rice",
      details: "Lemon Rice, Malai Chicken, Sautéed Vegetables, Fruits & Nuts",
      image: "/images/sweet-corn-rice.png",
      description: "Tangy lemon rice with creamy malai chicken and a medley of sautéed vegetables.",
      category: "Lunch",
      isVeg: false,
      time: MEAL_TIMES.lunch
    },
    dinner: {
      name: "Oats Omelet Chicken Wrap",
      image: "/images/chicken-wrap.png",
      description: "Protein-packed wrap with oats omelet and tender chicken pieces.",
      category: "Dinner",
      isVeg: false,
      time: MEAL_TIMES.dinner
    }
  },
  {
    day: "Friday",
    short: "FRI",
    breakfast: {
      name: "Tender Coconut Chia Pudding",
      image: "/images/fruit-yogurt-bowl.png",
      description: "Light, refreshing and naturally hydrating with omega-3 rich chia seeds.",
      category: "Breakfast",
      isVeg: true,
      time: MEAL_TIMES.breakfast
    },
    lunch: {
      name: "No Oil Mandi",
      details: "No Oil Mandi, Sweetcorn Salad, Fruits & Nuts",
      image: "/images/chicken-biriyani.png",
      description: "Aromatic mandi rice prepared without oil, served with crunchy sweetcorn salad.",
      category: "Lunch",
      isVeg: false,
      time: MEAL_TIMES.lunch
    },
    dinner: {
      name: "Chicken Millet Pasta",
      image: "/images/chicken-veg-bowl.png",
      description: "Wholesome millet pasta tossed with tender chicken in a light sauce.",
      category: "Dinner",
      isVeg: false,
      time: MEAL_TIMES.dinner
    }
  },
  {
    day: "Saturday",
    short: "SAT",
    breakfast: {
      name: "Mango Yogurt Parfait Bowl",
      image: "/images/fruit-yogurt-bowl.png",
      description: "Fresh mango layered with creamy yogurt and crunchy toppings.",
      category: "Breakfast",
      isVeg: true,
      time: MEAL_TIMES.breakfast
    },
    lunch: {
      name: "Mixed Herb Rice",
      details: "Mixed Herb Rice, Chicken Shakkani, Chickpea Salad, Boiled Egg, Fruits & Nuts",
      image: "/images/sweet-corn-rice.png",
      description: "Fragrant herb-infused rice with chicken shakkani, chickpea salad, and boiled egg.",
      category: "Lunch",
      isVeg: false,
      time: MEAL_TIMES.lunch
    },
    dinner: {
      name: "Sprout Salad with Egg",
      image: "/images/sprout-salad.png",
      description: "Fresh sprouts with boiled egg, vegetables, and a tangy dressing.",
      category: "Dinner",
      isVeg: false,
      time: MEAL_TIMES.dinner
    }
  }
];

// ===== BENEFITS =====
export const benefits = [
  {
    icon: "Leaf",
    title: "Fresh Ingredients",
    description: "Thoughtfully sourced ingredients prepared fresh for every meal.",
  },
  {
    icon: "Scale",
    title: "Balanced Meals",
    description: "Carefully portioned to bring nutrition and satisfaction together.",
  },
  {
    icon: "Heart",
    title: "Homemade-Style Goodness",
    description: "Healthy food that tastes like it's made with care, because it is.",
  },
  {
    icon: "Truck",
    title: "Convenient Local Delivery",
    description: "Fresh meals delivered right to your door in Perinthalmanna.",
  },
];

// ===== GALLERY IMAGES =====
export const galleryImages = [
  { 
    src: "/images/hero-bowl.png", 
    alt: "Healthy meal bowl with fresh ingredients", 
    overlay: "Good Food. Brighter Days.",
    size: "large"
  },
  { 
    src: "/images/smoothie-bowl.png", 
    alt: "Apple avocado smoothie bowl", 
    overlay: null,
    size: "regular"
  },
  { 
    src: "/images/chicken-wrap.png", 
    alt: "Healthy chicken wrap", 
    overlay: "Fresh From Our Kitchen.",
    size: "regular"
  },
  { 
    src: "/images/sweet-corn-rice.png", 
    alt: "Sweet corn rice meal", 
    overlay: null,
    size: "regular"
  },
  { 
    src: "/images/quinoa-salad.png", 
    alt: "Quinoa chicken salad bowl", 
    overlay: null,
    size: "wide"
  },
  { 
    src: "/images/overnight-oats.png", 
    alt: "Overnight oats with toppings", 
    overlay: "Eat Healthy. Live Guilt Free.",
    size: "regular"
  },
  { 
    src: "/images/chicken-biriyani.png", 
    alt: "No oil chicken biryani", 
    overlay: null,
    size: "regular"
  },
  { 
    src: "/images/mediterranean-salad.png", 
    alt: "Fresh Mediterranean salad", 
    overlay: null,
    size: "regular"
  },
];

// ===== HOW IT WORKS STEPS =====
export const howItWorksSteps = [
  {
    number: "01",
    title: "Explore the Menu",
    description: "Find breakfast, lunch or dinner for your preferred day."
  },
  {
    number: "02",
    title: "Tap to WhatsApp",
    description: "Your selected meal is automatically included in the message."
  },
  {
    number: "03",
    title: "Confirm and Enjoy",
    description: "Confirm the price, availability, and delivery details with Guilt Free Bowls."
  }
];

// ===== HELPER FUNCTIONS =====
export function getTodaysDayName() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().getDay();
  return days[today];
}

export function getCurrentDayMenu() {
  const today = getTodaysDayName();
  return weeklyMenu.find(menu => menu.day === today) || null;
}

export function getVegetarianMeals() {
  const vegMeals = [];
  
  weeklyMenu.forEach(dayMenu => {
    if (dayMenu.breakfast.isVeg) {
      vegMeals.push({ ...dayMenu.breakfast, day: dayMenu.day });
    }
    if (dayMenu.lunch.isVeg) {
      vegMeals.push({ ...dayMenu.lunch, day: dayMenu.day });
    }
    if (dayMenu.dinner.isVeg) {
      vegMeals.push({ ...dayMenu.dinner, day: dayMenu.day });
    }
  });
  
  return vegMeals;
}
