const PricingCTA = () => {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-carbon tracking-tight mb-4">
            Start sending today
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            3,000 emails/month free. No credit card required.
          </p>
          <p className="text-muted-foreground text-sm mb-10">
            Then $20/mo for 50,000 emails. Volume discounts available.
          </p>

          <div className="border border-trace p-8 md:p-12 mb-10 bg-surface">
            <div className="grid grid-cols-3 gap-8 font-mono text-center">
              <div>
                <p className="text-2xl md:text-3xl font-medium text-carbon">$0</p>
                <p className="text-xs text-muted-foreground mt-2 tracking-wider">FREE TIER</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-medium text-carbon">$20</p>
                <p className="text-xs text-muted-foreground mt-2 tracking-wider">PRO / MO</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-medium text-[hsl(150_70%_35%)]">Custom</p>
                <p className="text-xs text-muted-foreground mt-2 tracking-wider">ENTERPRISE</p>
              </div>
            </div>
          </div>

          <a
            href="#"
            className="inline-flex h-12 items-center px-10 bg-carbon text-primary-foreground text-sm font-medium hover:bg-spring hover:text-carbon transition-colors border border-carbon hover:border-spring"
          >
            Get Started — Free
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
