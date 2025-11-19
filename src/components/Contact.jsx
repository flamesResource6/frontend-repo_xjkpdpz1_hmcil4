import { Mail, PhoneCall, MessageCircle, Instagram, Youtube, Linkedin, Ticket } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-950 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Let’s Build Something Powerful</h2>

        <form className="grid grid-cols-1 gap-4 mb-8">
          <input type="text" placeholder="Your Name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <input type="email" placeholder="Your Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <input type="text" placeholder="Project Type (Trailer, Commercial, Film...)" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <textarea placeholder="Tell me about your project" rows="5" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <button className="rounded-xl bg-white text-black px-6 py-3 font-medium hover:opacity-90">Send Inquiry</button>
        </form>

        <div className="grid sm:grid-cols-2 gap-4">
          <a href="https://wa.me/2348012345678" target="_blank" className="flex items-center gap-3 rounded-xl border border-white/10 p-4 hover:bg-white/5 transition">
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
          <a href="mailto:hello@olaitanekunode.com" className="flex items-center gap-3 rounded-xl border border-white/10 p-4 hover:bg-white/5 transition">
            <Mail className="w-5 h-5" /> hello@olaitanekunode.com
          </a>
          <a href="https://instagram.com" target="_blank" className="flex items-center gap-3 rounded-xl border border-white/10 p-4 hover:bg-white/5 transition">
            <Instagram className="w-5 h-5" /> Instagram
          </a>
          <a href="https://youtube.com" target="_blank" className="flex items-center gap-3 rounded-xl border border-white/10 p-4 hover:bg-white/5 transition">
            <Youtube className="w-5 h-5" /> YouTube
          </a>
          <a href="https://tiktok.com" target="_blank" className="flex items-center gap-3 rounded-xl border border-white/10 p-4 hover:bg-white/5 transition">
            <Ticket className="w-5 h-5" /> TikTok
          </a>
          <a href="https://linkedin.com" target="_blank" className="flex items-center gap-3 rounded-xl border border-white/10 p-4 hover:bg-white/5 transition">
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
