// ===== WHATSAPP CONFIG =====
export const WHATSAPP_NUMBER = "919048496198";
export const BRAND_NAME = "Guilt Free Bowls";

// ===== WHATSAPP URL GENERATOR =====
export function generateWhatsAppUrl(mealName, category, day) {
  const message = `Hi ${BRAND_NAME} 👋\n\nI would like to order:\n\nMeal: ${mealName}\nCategory: ${category}\nDay: ${day}\n\nPlease share the price and availability.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generateSimpleWhatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const WHATSAPP_DEFAULT_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Guilt Free Bowls 👋\n\nI would like to know more about your meals and meal plans.\n\nThank you!")}`;

// ===== WEEKLY MENU DATA =====
export const weeklyMenu = [
  {
    day: "Monday",
    short: "MON",
    breakfast: {
      name: "Avocado Apple Smoothie Bowl",
      image: "/images/smoothie-bowl.png",
      description: "Creamy, nutritious and a perfect start to your day.",
      category: "Breakfast",
    },
    lunch: {
      name: "Sweet Corn Rice",
      image: "/images/sweet-corn-rice.png",
      description: "Balanced, wholesome and satisfying with garlic chicken and sauteed veggies.",
      category: "Lunch",
    },
    dinner: {
      name: "Sautéed Chicken Vegetable Bowl",
      image: "/images/chicken-veg-bowl.png",
      description: "Tender chicken with colorful sauteed vegetables in a light sauce.",
      category: "Dinner",
    },
  },
  {
    day: "Tuesday",
    short: "TUE",
    breakfast: {
      name: "Chicken Egg Veg Wrap",
      image: "/images/chicken-wrap.png",
      description: "Simple, nutritious and protein-packed to fuel your morning.",
      category: "Breakfast",
    },
    lunch: {
      name: "Green Egg Rice",
      image: "/images/sweet-corn-rice.png",
      description: "Fragrant green rice with lemon pepper chicken and fresh sides.",
      category: "Lunch",
    },
    dinner: {
      name: "Quinoa Chicken Salad Bowl",
      image: "/images/quinoa-salad.png",
      description: "Fresh vegetables, quinoa and tender chicken for a lighter evening.",
      category: "Dinner",
    },
  },
  {
    day: "Wednesday",
    short: "WED",
    breakfast: {
      name: "Carrot Overnight Oats",
      image: "/images/overnight-oats.png",
      description: "Creamy, nutritious and naturally sweet.",
      category: "Breakfast",
    },
    lunch: {
      name: "Chama Fried Rice + Chicken Fry",
      image: "/images/sweet-corn-rice.png",
      description: "Wholesome grains with flavourful chicken and fresh sides.",
      category: "Lunch",
    },
    dinner: {
      name: "Mediterranean Chicken Chickpea Salad",
      image: "/images/mediterranean-salad.png",
      description: "Fresh, colourful and protein-rich.",
      category: "Dinner",
    },
  },
  {
    day: "Thursday",
    short: "THU",
    breakfast: {
      name: "Oats Omelet Chicken Wrap",
      image: "/images/chicken-wrap.png",
      description: "Protein-packed wrap with oats omelet and tender chicken.",
      category: "Breakfast",
    },
    lunch: {
      name: "Mushroom Pulav",
      image: "/images/mushroom-pulav.png",
      description: "Fragrant basmati rice with sauteed mushrooms and aromatic spices.",
      category: "Lunch",
    },
    dinner: {
      name: "Ragi Chicken Corn Soup",
      image: "/images/chicken-veg-bowl.png",
      description: "Warm, comforting and nutritious with ragi goodness.",
      category: "Dinner",
    },
  },
  {
    day: "Friday",
    short: "FRI",
    breakfast: {
      name: "Peanut Butter Overnight Oats",
      image: "/images/overnight-oats.png",
      description: "Creamy, nutritious and the perfect start to your day.",
      category: "Breakfast",
    },
    lunch: {
      name: "No Oil Chicken Biriyani",
      image: "/images/chicken-biriyani.png",
      description: "Rich in flavour, lighter on oil. All the taste, none of the guilt.",
      category: "Lunch",
    },
    dinner: {
      name: "Sprout Salad Plate",
      image: "/images/sprout-salad.png",
      description: "Light, clean and good for a better you.",
      category: "Dinner",
    },
  },
  {
    day: "Saturday",
    short: "SAT",
    breakfast: {
      name: "Fruit Yogurt Bowl",
      image: "/images/fruit-yogurt-bowl.png",
      description: "Fresh seasonal fruits with creamy yogurt and crunchy granola.",
      category: "Breakfast",
    },
    lunch: {
      name: "Pineapple Rice, Hariyali Chicken & Black Chana Salad",
      image: "/images/sweet-corn-rice.png",
      description: "A vibrant trio of flavours for a satisfying weekend lunch.",
      category: "Lunch",
    },
    dinner: {
      name: "Healthy Shawarma (Chicken Roll)",
      image: "/images/healthy-shawarma.png",
      description: "All the flavour. None of the guilt. A perfect weekend treat.",
      category: "Dinner",
    },
  },
];

// ===== FEATURED MEALS =====
export const featuredMeals = [
  {
    name: "Apple Avocado Smoothie Bowl",
    image: "/images/smoothie-bowl.png",
    description: "Creamy, fresh and naturally nourishing.",
    type: "Breakfast",
  },
  {
    name: "Chicken Egg Veg Wrap",
    image: "/images/chicken-wrap.png",
    description: "Simple, nutritious and protein-packed.",
    type: "Breakfast",
  },
  {
    name: "Quinoa Chicken Salad",
    image: "/images/quinoa-salad.png",
    description: "Fresh vegetables, quinoa and tender chicken.",
    type: "Salad",
  },
  {
    name: "No Oil Chicken Biriyani",
    image: "/images/chicken-biriyani.png",
    description: "Rich in flavour, lighter on oil.",
    type: "Lunch",
  },
  {
    name: "Healthy Shawarma",
    image: "/images/healthy-shawarma.png",
    description: "All the flavour. None of the guilt.",
    type: "Dinner",
  },
];

// ===== BENEFITS =====
export const benefits = [
  {
    icon: "leaf",
    title: "Fresh Ingredients",
    description: "Freshly prepared meals using quality ingredients.",
  },
  {
    icon: "dumbbell",
    title: "High Protein",
    description: "Balanced meals designed with protein and nutrition in mind.",
  },
  {
    icon: "salad",
    title: "Balanced Nutrition",
    description: "Thoughtfully portioned meals for everyday wellness.",
  },
  {
    icon: "heart",
    title: "Made With Care",
    description: "Healthy food prepared with attention to quality and taste.",
  },
];

// ===== GALLERY IMAGES =====
export const galleryImages = [
  { src: "/images/hero-bowl.png", alt: "Premium healthy bowl", overlay: "Eat Clean." },
  { src: "/images/smoothie-bowl.png", alt: "Smoothie bowl", overlay: null },
  { src: "/images/chicken-wrap.png", alt: "Healthy chicken wrap", overlay: "Feel Great." },
  { src: "/images/sweet-corn-rice.png", alt: "Meal prep container", overlay: null },
  { src: "/images/quinoa-salad.png", alt: "Quinoa chicken salad", overlay: null },
  { src: "/images/overnight-oats.png", alt: "Overnight oats", overlay: "Good Food. Brighter Days." },
  { src: "/images/chicken-biriyani.png", alt: "Healthy biriyani", overlay: null },
  { src: "/images/mediterranean-salad.png", alt: "Mediterranean salad", overlay: null },
];

// ===== MEAL PLANS =====
export const mealPlans = [
  {
    title: "Daily Meals",
    description: "Fresh, balanced meals delivered to your door every day.",
    icon: "sun",
    features: ["Breakfast, Lunch & Dinner", "Freshly prepared daily", "Balanced nutrition"],
  },
  {
    title: "Weekly Plans",
    description: "Plan your entire week of healthy eating in advance.",
    icon: "calendar",
    features: ["6-day meal plan", "Variety every day", "Hassle-free healthy eating"],
  },
  {
    title: "Custom Meal Plans",
    description: "Meals tailored to your preferences and dietary needs.",
    icon: "sparkle",
    features: ["Personalised menus", "Dietary preferences", "Flexible scheduling"],
  },
];
