import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TodaysMenu from "@/components/TodaysMenu";
import WeeklyMenu from "@/components/WeeklyMenu";
import WhyGuiltFree from "@/components/WhyGuiltFree";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import LocalBrand from "@/components/LocalBrand";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TodaysMenu />
        <WeeklyMenu />
        <WhyGuiltFree />
        <HowItWorks />
        <Gallery />
        <LocalBrand />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
