import { testimonials } from "@/lib/data/content";

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-carbon tracking-tight mb-4 uppercase">
            Beyond expectations
          </h2>
          <p className="text-muted-foreground text-lg">
            Resend is driving remarkable developer experiences that enable success 
            stories, empower businesses, and fuel growth across industries and individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 border border-zinc-200 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-sm text-carbon leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00A3FF]/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#00A3FF]">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-carbon">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
