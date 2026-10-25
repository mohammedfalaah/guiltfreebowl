"use client";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function WhyGuiltFree() {
  const sectionRef = useScrollReveal();

  const points = [
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

  return (
    <section id="why-guilt-free" className="section-padding bg-white" ref={sectionRef}>
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
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage-green/30 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-mustard-yellow/20 rounded-full -z-10" />
          </div>

          {/* Text Side */}
          <div className="reveal">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-green mb-6 leading-tight">
              A Little More Goodness in Every Bowl.
            </h2>
            <p className="text-main-text/70 text-lg leading-relaxed mb-10 font-sans">
              We believe healthy food should be satisfying, delicious and easy to enjoy. Our meals bring together thoughtful ingredients, balanced portions and flavours you can look forward to.
            </p>

            <div className="space-y-6">
              {points.map((point) => (
                <div key={point.title} className="flex gap-4 items-start group">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-sage-green/40 flex items-center justify-center text-fresh-green group-hover:bg-fresh-green group-hover:text-white transition-all duration-300">
                    {getIcon(point.icon)}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-deep-green mb-1">
                      {point.title}
                    </h4>
                    <p className="text-main-text/60 text-sm leading-relaxed">
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

function getIcon(name) {
  const icons = {
    Leaf: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
    Scale: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    Heart: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    Truck: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  };
  
  return icons[name] || icons.Leaf;
}
