"use client";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function WhyGuiltFree() {
  const sectionRef = useScrollReveal();

  const points = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Freshly Prepared",
      description: "Every meal is made fresh — never frozen, never reheated.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Balanced Portions",
      description: "Thoughtfully portioned to fuel your day without the excess.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
        </svg>
      ),
      title: "Protein-Rich Options",
      description: "High-quality protein in every meal to keep you energised.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
      ),
      title: "Delicious & Satisfying",
      description: "Healthy food that you actually look forward to eating.",
    },
  ];

  return (
    <section id="why" className="section-padding bg-cream/40" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="reveal relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-deep-green/10">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/quinoa-salad.png"
                  alt="Fresh and colorful quinoa chicken salad from Guilt Free Bowls"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-light-sage/40 rounded-full -z-10" />
          </div>

          {/* Text Side */}
          <div className="reveal">
            <span className="inline-block text-fresh-green text-sm font-semibold tracking-widest uppercase mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-green mb-6 font-heading leading-tight">
              Healthy Should Never Feel Boring.
            </h2>
            <p className="text-dark-text/60 text-lg leading-relaxed mb-10">
              Guilt Free Bowls brings together nutrition, flavour and convenience to make healthy eating part of your everyday lifestyle.
            </p>

            <div className="space-y-6">
              {points.map((point, i) => (
                <div key={point.title} className="flex gap-4 items-start group">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-light-sage/60 flex items-center justify-center text-fresh-green group-hover:bg-fresh-green group-hover:text-white transition-all duration-300">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-green mb-1 font-heading">
                      {point.title}
                    </h4>
                    <p className="text-dark-text/55 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
