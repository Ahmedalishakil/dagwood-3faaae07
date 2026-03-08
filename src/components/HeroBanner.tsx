import { motion } from "framer-motion";
import heroImg from "@/assets/hero-food.jpg";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden" style={{ height: "520px" }}>
      {/* Background image — right 65% */}
      <img
        src={heroImg}
        alt="Delicious Dagwood food"
        className="absolute right-0 top-0 h-full w-[65%] object-cover object-center"
      />

      {/* Dark gradient overlay */}
      <div className="banner-gradient-overlay absolute inset-0 z-[1]" />

      {/* Warm smoke/glow overlay */}
      <div className="banner-smoke absolute inset-0 z-[2]" />

      {/* Content — left side */}
      <div className="absolute left-0 top-0 z-[3] flex h-full w-[55%] flex-col justify-center px-6 py-12 sm:px-14">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-elegant text-[11px] font-light italic uppercase tracking-[0.35em] text-brand-gold"
        >
          Signature Collection
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-5 font-display text-5xl font-black uppercase leading-none tracking-tight text-brand-cream sm:text-6xl lg:text-7xl"
        >
          Grilled
          <span className="block text-brand-gold">Perfection</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="my-5 h-px w-16"
          style={{
            background: "linear-gradient(to right, hsl(32 60% 50%), transparent)",
          }}
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-elegant text-[15px] font-light leading-relaxed tracking-widest text-brand-cream/65"
          style={{ maxWidth: "260px" }}
        >
          Slow-smoked, flame-kissed & crafted with passion. Experience Lahore's finest flavors.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#menu"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="group mt-8 inline-flex items-center gap-3 font-elegant text-xs uppercase tracking-[0.3em] text-brand-gold"
        >
          Explore menu
          <span className="block h-px w-8 bg-brand-gold transition-all duration-300 group-hover:w-12" />
        </motion.a>
      </div>

      {/* Hot badge — top right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute right-9 top-9 z-[4] flex h-[68px] w-[68px] flex-col items-center justify-center rounded-full border border-brand-gold/50"
        style={{ background: "hsl(20 30% 5% / 0.7)" }}
      >
        <span className="font-display text-[9px] uppercase tracking-[0.2em] leading-relaxed text-brand-gold">
          Chef's
          <br />
          Pick
        </span>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="banner-bottom-border absolute bottom-0 left-0 right-0 z-[4] flex h-[52px] items-center justify-between px-6 sm:px-14"
      >
        <span className="font-elegant text-[10px] uppercase tracking-[0.4em] text-brand-cream/40">
          Est. Lahore
        </span>
        <div className="flex gap-1.5">
          <span className="h-[5px] w-[5px] rounded-full bg-brand-gold" />
          <span className="h-[5px] w-[5px] rounded-full bg-brand-gold/40" />
          <span className="h-[5px] w-[5px] rounded-full bg-brand-gold/40" />
          <span className="h-[5px] w-[5px] rounded-full bg-brand-gold/40" />
        </div>
        <span className="font-elegant text-[10px] uppercase tracking-[0.4em] text-brand-gold">
          Order Now
        </span>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
