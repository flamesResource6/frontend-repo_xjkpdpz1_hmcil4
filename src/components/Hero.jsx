import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
          Olaitan Ekunode — Cinematic Video Editor & Storyteller
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl">
          Crafting emotional, engaging, and visually powerful stories through film.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#showreel" className="rounded-full bg-white text-black px-6 py-3 font-medium hover:opacity-90 transition">
            Watch Showreel
          </a>
          <a href="#work" className="rounded-full border border-white/30 px-6 py-3 font-medium hover:bg-white/10 transition">
            View Projects
          </a>
          <a href="#contact" className="rounded-full border border-white/0 bg-white/10 px-6 py-3 font-medium hover:bg-white/20 transition">
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
