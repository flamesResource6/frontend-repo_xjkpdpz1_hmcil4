import { motion } from 'framer-motion';

const projects = [
  {
    id: 'p1',
    title: 'Homes of Light',
    description: 'Emotive brand film with natural-light cinematography for real estate.',
    type: 'Commercial',
    thumb: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p2',
    title: 'Rise Trailer',
    description: 'High-intensity trailer with precise sound design and pacing.',
    type: 'Trailer',
    thumb: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p3',
    title: 'City of Echoes',
    description: 'Documentary short with immersive storytelling and color-led narrative.',
    type: 'Documentary',
    thumb: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p4',
    title: 'Brand Pulse',
    description: 'Punchy social edit with AI-assisted workflows and motion elements.',
    type: 'Branded Content',
    thumb: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p5',
    title: 'Solace',
    description: 'Narrative short with controlled emotional pacing and soundscape.',
    type: 'Film',
    thumb: 'https://images.unsplash.com/photo-1451186859696-371d9477be93?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p6',
    title: 'Elements',
    description: 'VFX-forward montage blending AE compositing and Resolve color.',
    type: 'VFX',
    thumb: 'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Selected Projects</h2>
            <p className="text-white/70 mt-2">Film trailers, commercials, documentaries, and branded content.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full bg-white text-black px-5 py-2 font-medium hover:opacity-90">Get a quote</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href={`#/project/${p.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl bg-neutral-900">
              <img src={p.thumb} alt={p.title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <div className="text-xs uppercase tracking-wider text-white/70">{p.type}</div>
                <div className="font-semibold text-lg">{p.title}</div>
                <div className="text-white/70 text-sm line-clamp-2">{p.description}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
