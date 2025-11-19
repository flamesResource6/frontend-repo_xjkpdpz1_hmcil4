import { motion, useScroll, useTransform } from 'framer-motion';

export default function Showreel() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.98, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section id="showreel" className="relative bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Showreel</h2>
          <p className="text-white/70 mt-2">A curated selection of my storytelling, commercial, and cinematic editing work.</p>
        </div>

        <motion.div style={{ scale, opacity }} className="relative aspect-video w-full rounded-xl overflow-hidden bg-black">
          <video
            src="https://cdn.coverr.co/videos/coverr-video-editing-desk-9905/1080p.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1451188502541-13943edb6acb?q=80&w=1920&auto=format&fit=crop"
          />
        </motion.div>
      </div>
    </section>
  );
}
