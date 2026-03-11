import { useState } from "react";
import { sdkCodeExamples } from "@/lib/data/content";
import { Check, ExternalLink } from "lucide-react";

const SdkSection = () => {
  const [activeSdk, setActiveSdk] = useState(sdkCodeExamples[0]);

  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 uppercase">
            Integrate
          </h2>
          <p className="text-zinc-400 text-lg">
            A simple, elegant interface so you can start sending emails in minutes. 
            It fits right into your code with SDKs for your favorite programming languages.
          </p>
        </div>

        {/* SDK Tabs */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {sdkCodeExamples.map((sdk) => (
              <button
                key={sdk.id}
                onClick={() => setActiveSdk(sdk)}
                className={`px-4 py-2 text-sm font-medium transition-all border ${
                  activeSdk.id === sdk.id
                    ? "bg-white text-black border-white shadow-lg shadow-white/10"
                    : "bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-zinc-200"
                }`}
              >
                {sdk.lang}
              </button>
            ))}
          </div>

          {/* Code Example */}
          <div className="border border-zinc-800 bg-zinc-900 rounded-lg overflow-hidden shadow-2xl shadow-black/50">
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-xs font-mono text-zinc-500 ml-2">
                  {activeSdk.id === "rest" ? "curl" : `${activeSdk.id}.${activeSdk.id === "dotnet" ? "cs" : activeSdk.id === "node" ? "ts" : activeSdk.id === "python" ? "py" : activeSdk.id === "ruby" ? "rb" : activeSdk.id === "php" ? "php" : activeSdk.id === "go" ? "go" : activeSdk.id === "java" ? "java" : activeSdk.id === "rust" ? "rs" : activeSdk.id === "elixir" ? "ex" : "ts"}`}
                </span>
              </div>
              {activeSdk.github && (
                <a
                  href={activeSdk.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-500 hover:text-[#00A3FF] flex items-center gap-1 transition-colors"
                >
                  View on GitHub
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
            <pre className="p-6 overflow-x-auto">
              <code className="text-sm font-mono text-zinc-300 leading-relaxed whitespace-pre">
                {activeSdk.example}
              </code>
            </pre>
          </div>

          {/* Install Command */}
          {activeSdk.install && (
            <div className="mt-4 flex items-center justify-between p-4 border border-zinc-800 bg-zinc-900/50 rounded-lg">
              <code className="text-sm font-mono text-zinc-400">
                {activeSdk.install}
              </code>
              <button
                className="text-zinc-500 hover:text-white transition-colors"
                onClick={() => navigator.clipboard.writeText(activeSdk.install)}
                aria-label="Copy to clipboard"
              >
                <Check size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SdkSection;
