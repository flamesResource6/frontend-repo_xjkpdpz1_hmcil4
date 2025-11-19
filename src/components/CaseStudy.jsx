export default function CaseStudy() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-sm text-white/60 mb-6"><a href="/">← Back to portfolio</a></div>
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">Project Title — Category</h1>
        <p className="mt-4 text-white/70">Short logline introducing the narrative, tone, and emotional goal.</p>

        <div className="mt-8 aspect-video rounded-xl overflow-hidden bg-black">
          <video src="" controls className="w-full h-full object-cover" poster="https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop" />
        </div>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-xl font-semibold mb-3">Project Overview</h2>
            <p className="text-white/70">Describe the client, objectives, audience, and the core narrative goals.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">My Role</h2>
            <ul className="list-disc list-inside text-white/70">
              <li>Editing</li>
              <li>Directing</li>
              <li>Color</li>
              <li>VFX</li>
              <li>Sound</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Tools Used</h2>
            <p className="text-white/70">Premiere Pro 2025, After Effects 2025, DaVinci Resolve 19</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Challenges</h2>
            <p className="text-white/70">Outline constraints, scheduling, footage issues, and narrative complexities.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Storytelling Approach</h2>
            <p className="text-white/70">Discuss emotional beats, pacing, music choices, and visual motifs.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Results / Impact</h2>
            <p className="text-white/70">Example: Engagement increased by 50%, client conversions up, festival selections.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
