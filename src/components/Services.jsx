import { motion } from 'framer-motion';

const services = [
  { title: 'Trailer Editing', desc: 'High-impact cinematic trailers with dramatic pacing and precise sound design.' },
  { title: 'Commercial Editing', desc: 'Brand commercials that drive emotion and conversions.' },
  { title: 'Documentaries', desc: 'Story-first edits with immersive pacing and narrative clarity.' },
  { title: 'Brand Films', desc: 'Premium films that define your brand voice and aesthetic.' },
  { title: 'Social Media Cinematic Content', desc: 'Vertical and horizontal edits optimized for attention.' },
  { title: 'Voice-over & Dubbing Supervision', desc: 'Casting, recording, and timing supervision for polished voice.' },
  { title: 'Retainer Plans', desc: 'Monthly editor services for agencies and creators.' },
];

export default function Services() {
  return (
    <section id="services" className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Service Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-white/5 to-transparent">
              <div className="font-semibold text-lg">{s.title}</div>
              <div className="text-white/70 mt-2 mb-6 text-sm">{s.desc}</div>
              <a href="#contact" className="inline-flex rounded-full bg-white text-black px-4 py-2 font-medium hover:opacity-90">Hire Me</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
