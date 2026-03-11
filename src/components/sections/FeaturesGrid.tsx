import { features } from "@/lib/data/content";

const FeaturesGrid = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-carbon tracking-tight mb-4">
            Built for developers
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to send emails. Nothing you don't.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-trace border border-trace">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-background p-8 md:p-10"
            >
              <h3 className="text-base font-bold text-carbon mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
