"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function LocalBrand() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section-padding bg-light-sage/30" ref={sectionRef}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="reveal">
          <span className="inline-block text-fresh-green text-sm font-semibold tracking-widest uppercase mb-3">
            Local & Fresh
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-green mb-6 font-heading">
            Healthy Food in Perinthalmanna
          </h2>
          <p className="text-dark-text/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Fresh, balanced meals made for a healthier Perinthalmanna. We&apos;re proud to bring nutritious, delicious food right to your doorstep in Kerala.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-sm">
              <span className="text-lg">📍</span>
              <span className="text-sm font-semibold text-deep-green">Perinthalmanna</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-sm">
              <span className="text-lg">🌴</span>
              <span className="text-sm font-semibold text-deep-green">Kerala, India</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-sm">
              <span className="text-lg">🚚</span>
              <span className="text-sm font-semibold text-deep-green">Free Delivery</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-xl mx-auto">
            <p className="text-deep-green font-heading text-lg font-semibold mb-2">
              Healthy People. Happier Perinthalmanna. ❤️
            </p>
            <p className="text-dark-text/50 text-sm">
              Making wholesome nutrition accessible to our community, one meal at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
