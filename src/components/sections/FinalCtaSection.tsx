const FinalCtaSection = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-black">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 uppercase">
            Email reimagined. Available today.
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of developers sending billions of emails with Resend.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex h-12 items-center px-8 bg-[#00A3FF] text-white text-sm font-medium hover:bg-[#0090E6] transition-colors shadow-lg shadow-[#00A3FF]/25"
            >
              Get Started
            </a>
            <a
              href="#"
              className="inline-flex h-12 items-center px-8 text-sm font-medium text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>

          <p className="text-zinc-500 text-sm mt-8">
            Free tier available. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
