const HighlightTestimonialSection = () => {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Quote */}
          <blockquote className="mb-10">
            <p className="text-2xl md:text-4xl font-medium text-white leading-relaxed">
              &ldquo;Resend is transforming email for developers. Simple interface, easy 
              integrations, handy templates. What else could we ask for.&rdquo;
            </p>
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-full bg-[#00A3FF]/20 flex items-center justify-center">
              <span className="text-lg font-bold text-[#00A3FF]">GR</span>
            </div>
            <div>
              <p className="text-base font-bold text-white">Guillermo Rauch</p>
              <p className="text-sm text-zinc-400">CEO at Vercel</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="/docs"
            className="inline-flex h-11 items-center px-6 bg-[#00A3FF] text-white text-sm font-medium hover:bg-[#0090E6] transition-colors shadow-lg shadow-[#00A3FF]/25"
          >
            Send with Next.js
          </a>
        </div>
      </div>
    </section>
  );
};

export default HighlightTestimonialSection;
