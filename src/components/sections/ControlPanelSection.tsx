const ControlPanelSection = () => {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-carbon tracking-tight mb-4 uppercase">
              Everything in your control
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              All the features you need to manage your email sending, troubleshoot 
              with detailed logs, and protect your domain reputation – without the friction.
            </p>

            <div className="space-y-6">
              {/* Intuitive Analytics */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#00A3FF]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#00A3FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-carbon mb-2">Intuitive Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    Track delivery rates, opens, and clicks with straightforward reporting 
                    tools that help you understand your email performance.
                  </p>
                </div>
              </div>

              {/* Full Visibility */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#00A3FF]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#00A3FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-carbon mb-2">Full Visibility</h3>
                  <p className="text-sm text-muted-foreground">
                    Detailed logs for every email sent. Search, filter, and troubleshoot 
                    delivery issues with complete transparency.
                  </p>
                </div>
              </div>

              {/* Domain Authentication */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#00A3FF]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#00A3FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-carbon mb-2">Domain Authentication</h3>
                  <p className="text-sm text-muted-foreground">
                    Automated DNS setup for SPF, DKIM, and DMARC. Protect your domain 
                    reputation and improve deliverability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="border border-zinc-200 bg-background rounded-xl overflow-hidden shadow-xl shadow-black/5">
            <div className="border-b border-zinc-200 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-xs font-mono text-zinc-500 ml-2">Dashboard</span>
              </div>
            </div>
            <div className="p-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-surface border border-zinc-200">
                  <p className="text-xs text-muted-foreground mb-1">Delivered</p>
                  <p className="text-2xl font-bold text-carbon">98.5%</p>
                  <p className="text-xs text-green-600 mt-1">+2.1%</p>
                </div>
                <div className="p-4 rounded-lg bg-surface border border-zinc-200">
                  <p className="text-xs text-muted-foreground mb-1">Opened</p>
                  <p className="text-2xl font-bold text-carbon">45.2%</p>
                  <p className="text-xs text-green-600 mt-1">+5.3%</p>
                </div>
                <div className="p-4 rounded-lg bg-surface border border-zinc-200">
                  <p className="text-xs text-muted-foreground mb-1">Clicked</p>
                  <p className="text-2xl font-bold text-carbon">12.8%</p>
                  <p className="text-xs text-green-600 mt-1">+1.2%</p>
                </div>
              </div>

              {/* Domain Status */}
              <div className="p-4 rounded-lg bg-surface border border-zinc-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-carbon">acme.com</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-600">
                    Verified
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">SPF</span>
                    <span className="text-green-600">✓ Configured</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">DKIM</span>
                    <span className="text-green-600">✓ Configured</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">DMARC</span>
                    <span className="text-green-600">✓ Configured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlPanelSection;
