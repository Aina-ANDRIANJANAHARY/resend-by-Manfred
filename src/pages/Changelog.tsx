import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { changelogEntries } from "@/lib/data/content";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const VERSION_COLORS: Record<string, string> = {
  major: "bg-red-500 text-white",
  minor: "bg-blue-500 text-white",
  patch: "bg-green-500 text-white",
};

const CHANGE_KIND_STYLES: Record<string, string> = {
  new: "text-green-600",
  improved: "text-blue-600",
  fixed: "text-orange-600",
};

const Changelog = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <Header />
      <main className="pt-24 pb-20 bg-background">
        <div className="container max-w-4xl">
          {/* Page header */}
          <div 
            ref={headerRef}
            className={`mb-16 transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-carbon tracking-tight mb-4">
              Changelog
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Stay up to date with the latest improvements, fixes, and new features from Resend.
            </p>
          </div>

          {/* Timeline */}
          <div 
            ref={listRef}
            className={`relative transition-all duration-700 delay-200 ${
              listVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200" />

            {changelogEntries.map((entry, index) => (
              <div 
                key={entry.version}
                className={`relative mb-12 transition-all duration-500 ${
                  listVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: listVisible ? `${index * 150}ms` : '0ms' }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 -ml-2 mt-1.5 rounded-full border-4 border-background shadow ${VERSION_COLORS[entry.type]}`} />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
                  <div className="bg-surface border border-zinc-200 p-6">
                    {/* Version header */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-2.5 py-1 text-xs font-bold rounded ${VERSION_COLORS[entry.type]}`}>
                        v{entry.version}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(entry.date).toLocaleDateString("en-US", { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>

                    {/* Changes list */}
                    <ul className="space-y-3">
                      {entry.changes.map((change, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className={`text-xs font-bold uppercase tracking-wider mt-0.5 ${CHANGE_KIND_STYLES[change.kind] || "text-muted-foreground"}`}>
                            {change.kind}
                          </span>
                          <span className="text-carbon">{change.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Changelog;
