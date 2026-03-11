const EditorSection = () => {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-sm font-medium text-[#00A3FF] mb-2">Editor</div>
            <h2 className="text-3xl md:text-4xl font-bold text-carbon tracking-tight mb-4">
              Write using a delightful editor
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              A modern editor that makes it easy for anyone to write, format, 
              and send emails. Visually build your email and change the design 
              by adding custom styles.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Drag and drop components",
                "Real-time preview",
                "Custom styles and branding",
                "Email client testing",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00A3FF]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#00A3FF]" />
                  </div>
                  <span className="text-carbon">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="/docs"
              className="inline-flex h-11 items-center px-6 text-sm font-medium text-zinc-700 border border-zinc-300 hover:border-zinc-400 hover:text-carbon transition-colors"
            >
              Learn more
            </a>
          </div>

          {/* Editor Preview */}
          <div className="order-1 lg:order-2 border border-zinc-200 bg-background rounded-xl overflow-hidden shadow-xl shadow-black/5">
            <div className="border-b border-zinc-200 px-4 py-3">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-xs font-mono text-zinc-500">Editor</span>
              </div>
            </div>
            <div className="p-6">
              {/* Editor Toolbar */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-zinc-200">
                <span className="text-xs text-zinc-500 mr-2">Styles</span>
                <div className="flex gap-1">
                  <div className="w-6 h-6 rounded bg-zinc-100 border border-zinc-200" />
                  <div className="w-6 h-6 rounded bg-zinc-100 border border-zinc-200" />
                  <div className="w-6 h-6 rounded bg-zinc-100 border border-zinc-200" />
                </div>
              </div>

              {/* Email Fields */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-xs text-zinc-500 mb-1 block">From</label>
                  <div className="text-sm text-carbon">your.name@acme.com</div>
                </div>
                <div>
                  <label className="text-xs text-zinc-500 mb-1 block">To</label>
                  <div className="text-sm text-carbon">Newsletter Subscribers</div>
                </div>
                <div>
                  <label className="text-xs text-zinc-500 mb-1 block">Subject</label>
                  <div className="text-sm text-carbon">Weekly Acme Newsletter</div>
                </div>
              </div>

              {/* Email Preview */}
              <div className="border border-zinc-200 rounded-lg p-6 bg-white">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#00A3FF] mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-carbon">Weekly Newsletter</h3>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-zinc-100 rounded w-full" />
                  <div className="h-4 bg-zinc-100 rounded w-5/6" />
                  <div className="h-4 bg-zinc-100 rounded w-4/6" />
                  <div className="h-10 bg-[#00A3FF] rounded text-white flex items-center justify-center mt-4">
                    <span className="text-sm font-medium">Read More</span>
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

export default EditorSection;
