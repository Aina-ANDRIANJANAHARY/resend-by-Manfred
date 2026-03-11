import { codeExample } from "@/lib/data/content";
import VideoBackground from "@/components/shared/VideoBackground";

/**
 * Hero section with animated entry, optional video background, and code example.
 * Video is lazy-loaded via Intersection Observer (set `videoSrc` prop when available).
 */
const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-black">
      <VideoBackground />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-6 animate-fade-in-up uppercase">
            EMAIL FOR DEVELOPERS
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up-delay-1">
            The best way to reach humans instead of spam folders. Deliver transactional 
            and marketing emails at scale.
          </p>
          <div className="flex items-center justify-center gap-4 animate-fade-in-up-delay-2">
            <a
              href="#pricing"
              className="inline-flex h-12 items-center px-8 bg-[#00A3FF] text-white text-sm font-medium hover:bg-[#0090E6] transition-colors shadow-lg shadow-[#00A3FF]/25"
            >
              Get Started
            </a>
            <a
              href="/docs"
              className="inline-flex h-12 items-center px-8 text-sm font-medium text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white transition-colors"
            >
              Documentation
            </a>
          </div>
        </div>

        <div className="max-w-2xl mx-auto border border-zinc-800 rounded-lg overflow-hidden animate-fade-in-up-delay-2 shadow-2xl shadow-black/50">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <span className="text-xs font-mono text-zinc-500 ml-2">
              index.ts
            </span>
          </div>
          <pre className="p-6 overflow-x-auto bg-zinc-900">
            <code className="text-sm font-mono text-zinc-300 leading-relaxed whitespace-pre">
              {codeExample}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
