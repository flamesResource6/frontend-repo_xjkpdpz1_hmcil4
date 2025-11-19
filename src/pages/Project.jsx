import { useParams, Link } from 'react-router-dom';
import CaseStudy from '../components/CaseStudy';

export default function ProjectPage() {
  const { id } = useParams();
  // In a real app, fetch project by id. For template, show generic case study with id label.
  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-sm text-white/60 mb-6"><Link to="/">← Back to portfolio</Link></div>
        <div className="mb-6 text-white/60">Project ID: {id}</div>
      </div>
      <CaseStudy />
    </div>
  );
}
