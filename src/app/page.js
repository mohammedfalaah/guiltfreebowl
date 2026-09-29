import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import FeaturedMeals from "@/components/FeaturedMeals";
import WeeklyMenu from "@/components/WeeklyMenu";
import WhyGuiltFree from "@/components/WhyGuiltFree";
import HowItWorks from "@/components/HowItWorks";
import MealPlans from "@/components/MealPlans";
import About from "@/components/About";
import LocalBrand from "@/components/LocalBrand";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <FeaturedMeals />
        <WeeklyMenu />
        <WhyGuiltFree />
        <HowItWorks />
        <MealPlans />
        <About />
        <LocalBrand />
        <Gallery />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
