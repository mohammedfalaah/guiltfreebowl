"use client";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { galleryImages } from "@/data/menuData";

export default function Gallery() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section-padding bg-off-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-fresh-green text-sm font-semibold tracking-widest uppercase mb-3">
            Food Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-green mb-4 font-heading">
            Eat With Your Eyes First.
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="reveal gallery-grid">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="img-zoom relative group cursor-pointer"
              id={`gallery-img-${i}`}
            >
              <div className={`relative ${
                i === 0 ? "h-full min-h-[250px] sm:min-h-[400px]" :
                i === 3 ? "h-48 sm:h-56" :
                "h-48 sm:h-56"
              }`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover rounded-2xl"
                  sizes={
                    i === 0 ? "(max-width: 768px) 50vw, 33vw" :
                    i === 3 ? "(max-width: 768px) 100vw, 66vw" :
                    "(max-width: 768px) 50vw, 25vw"
                  }
                />

                {/* Overlay */}
                {img.overlay && (
                  <div className="absolute inset-0 bg-deep-green/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white text-xl sm:text-2xl font-bold font-heading tracking-wide">
                      {img.overlay}
                    </span>
                  </div>
                )}

                {!img.overlay && (
                  <div className="absolute inset-0 bg-deep-green/0 group-hover:bg-deep-green/20 rounded-2xl transition-colors duration-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
