import { Film, Sparkles, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">Crafting Emotion Through Visual Storytelling</h2>
          <p className="text-white/70 leading-relaxed">
            5+ years experience in editing and directing. Edited 150+ commercial, branded, and narrative projects for brands like Profilled World Homes, Brains and Hammers, and BBM Africa. Expertise in cinematic storytelling, emotional pacing, natural-light shooting, AE compositing, and color-led narratives. Known for fast delivery, professional quality, and narrative depth.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-white/10 p-4">
              <Film className="w-6 h-6 mb-2" />
              <div className="font-semibold">150+ Projects</div>
              <div className="text-white/60 text-sm">Commercials, trailers, films</div>
            </div>
            <div className="rounded-xl border border-white/10 p-4">
              <Sparkles className="w-6 h-6 mb-2" />
              <div className="font-semibold">AI-Enhanced</div>
              <div className="text-white/60 text-sm">Faster, smarter workflows</div>
            </div>
            <div className="rounded-xl border border-white/10 p-4">
              <Award className="w-6 h-6 mb-2" />
              <div className="font-semibold">Narrative-First</div>
              <div className="text-white/60 text-sm">Emotion and pacing</div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900">
            <img src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop" alt="Portrait" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
