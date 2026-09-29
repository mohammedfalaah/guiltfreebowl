"use client";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-off-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Side */}
          <div className="reveal order-2 lg:order-1">
            <span className="inline-block text-fresh-green text-sm font-semibold tracking-widest uppercase mb-3">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-green mb-6 font-heading leading-tight">
              Food That Helps You Feel Good.
            </h2>

            <div className="space-y-4 text-dark-text/65 text-base leading-relaxed">
              <p>
                At Guilt Free Bowls, we believe that eating healthy should be simple, delicious and accessible to everyone. Every meal we prepare is a step towards better nutrition without compromising on taste.
              </p>
              <p>
                Our meals are designed with balanced nutrition in mind — using fresh ingredients, quality proteins and wholesome grains to keep you fuelled throughout the day.
              </p>
              <p>
                Whether you&apos;re looking for a nutritious breakfast, a balanced lunch or a lighter dinner, we&apos;ve got you covered. Our weekly rotating menu ensures you never get bored of eating healthy.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-light-sage">
              <div>
                <div className="text-3xl font-bold text-deep-green font-heading">6</div>
                <div className="text-sm text-dark-text/50 mt-1">Days a Week</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-deep-green font-heading">3</div>
                <div className="text-sm text-dark-text/50 mt-1">Meals Daily</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-deep-green font-heading">100%</div>
                <div className="text-sm text-dark-text/50 mt-1">Fresh & Healthy</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="reveal order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src="/images/smoothie-bowl.png"
                      alt="Fresh smoothie bowl from Guilt Free Bowls"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/overnight-oats.png"
                      alt="Healthy overnight oats"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/chicken-veg-bowl.png"
                      alt="Sauteed chicken vegetable bowl"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src="/images/healthy-shawarma.png"
                      alt="Healthy chicken shawarma"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-6 py-3 flex items-center gap-3 z-10">
              <span className="text-2xl">🌿</span>
              <div>
                <p className="text-sm font-bold text-deep-green font-heading">Good Food. No Guilt.</p>
                <p className="text-xs text-fresh-green">Eat Healthy, Live Guilt Free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
