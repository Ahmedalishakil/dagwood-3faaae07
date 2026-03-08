import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroDagwood from "@/assets/hero-dagwood.jpg";
import heroGrilled from "@/assets/hero-grilled.jpg";
import heroRedVelvet from "@/assets/hero-redvelvet.jpg";

const slides = [
  {
    image: heroDagwood,
    headline: "Hits Differently",
    subtext: "Our signature stacked sandwich packed with flavor",
    objectPosition: "center 40%",
  },
  {
    image: heroGrilled,
    headline: "Grilled Perfection",
    subtext: "Crispy, gooey, and impossible to resist",
    objectPosition: "center center",
  },
  {
    image: heroRedVelvet,
    headline: "Sinfully Rich",
    subtext: "Indulge in our velvety red velvet masterpiece",
    objectPosition: "center 60%",
  },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-rotate every 5.5s
  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden bg-background" style={{ height: "85vh", minHeight: "550px", maxHeight: "920px" }}>
      {/* Background images with zoom + fade */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className="h-full w-full object-cover"
            style={{ objectPosition: slide.objectPosition }}
          />
          {/* Gentle zoom animation on image */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 6, ease: "linear" }}
            className="absolute inset-0"
            style={{ background: "transparent" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(
            to top,
            hsl(20 30% 4% / 0.88) 0%,
            hsl(20 30% 4% / 0.55) 40%,
            hsl(20 30% 4% / 0.35) 60%,
            hsl(20 30% 4% / 0.45) 100%
          )`,
        }}
      />

      {/* Centered text content */}
      <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Headline */}
            <h1 className="font-display text-5xl font-black uppercase leading-none tracking-tight text-brand-cream sm:text-7xl lg:text-8xl xl:text-9xl">
              {slide.headline}
            </h1>

            {/* Divider */}
            <div className="my-5 flex items-center gap-3">
              <span className="h-px w-10 bg-primary/60" />
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="h-px w-10 bg-primary/60" />
            </div>

            {/* Subtext */}
            <p className="max-w-lg font-elegant text-lg italic leading-relaxed text-brand-cream/65 sm:text-xl">
              {slide.subtext}
            </p>

            {/* CTA */}
            <a
              href="#menu"
              className="mt-8 inline-flex items-center gap-2.5 rounded bg-primary px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
            >
              Order Now
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-[3] -translate-y-1/2 rounded-full border border-brand-cream/15 p-2.5 text-brand-cream/50 backdrop-blur-sm transition-colors hover:border-brand-cream/30 hover:text-brand-cream/80 sm:left-6 sm:p-3"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-[3] -translate-y-1/2 rounded-full border border-brand-cream/15 p-2.5 text-brand-cream/50 backdrop-blur-sm transition-colors hover:border-brand-cream/30 hover:text-brand-cream/80 sm:right-6 sm:p-3"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-[3] flex -translate-x-1/2 gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-primary"
                : "w-2 bg-brand-cream/30 hover:bg-brand-cream/50"
            }`}
          />
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[4] flex h-[44px] items-center justify-center gap-4 px-6"
        style={{
          borderTop: "1px solid hsl(20 30% 50% / 0.15)",
          background: "hsl(20 30% 5% / 0.85)",
        }}
      >
        <span className="font-elegant text-[10px] italic tracking-[0.3em] text-brand-cream/35">
          Open every hour · every day
        </span>
        <span className="h-1 w-1 rounded-full bg-brand-cream/20" />
        <span className="font-elegant text-[10px] uppercase tracking-[0.4em] text-brand-cream/35">
          Lahore, Pakistan
        </span>
      </div>
    </section>
  );
};

export default HeroBanner;
