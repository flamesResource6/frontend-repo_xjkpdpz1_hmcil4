import { Scissors, Camera, Palette, Sparkles, Clapperboard, AudioLines, Wand2, Goal } from 'lucide-react';

const skills = [
  { icon: Scissors, label: 'Video Editing' },
  { icon: Camera, label: 'Cinematography' },
  { icon: Palette, label: 'Color Grading' },
  { icon: Sparkles, label: 'VFX & Compositing' },
  { icon: Clapperboard, label: 'Trailer Editing' },
  { icon: AudioLines, label: 'Sound Design' },
  { icon: Wand2, label: 'AI-Assisted Editing' },
  { icon: Goal, label: 'Creative Direction' },
];

export default function Skills() {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Core Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {skills.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 p-4 text-center hover:bg-white/5 transition">
              <s.icon className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
