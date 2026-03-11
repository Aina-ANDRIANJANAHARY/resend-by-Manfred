import { useState, useEffect } from "react";

interface LogEntry {
  id: string;
  method: string;
  path: string;
  status: number;
  duration: number;
  timestamp: string;
}

const generateLog = (): LogEntry => {
  const paths = [
    "/emails",
    "/emails/em_abc123",
    "/domains",
    "/domains/dom_xyz789",
    "/api-keys",
    "/webhooks",
  ];
  return {
    id: Math.random().toString(36).substring(7),
    method: "POST",
    path: paths[Math.floor(Math.random() * paths.length)],
    status: 200,
    duration: Math.floor(Math.random() * 150) + 50,
    timestamp: new Date().toISOString(),
  };
};

const DevExperienceSection = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    // Initial logs
    setLogs(Array.from({ length: 5 }, generateLog));

    const interval = setInterval(() => {
      setLogs((prev) => [generateLog(), ...prev.slice(0, 6)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-carbon tracking-tight mb-4 uppercase">
              FIRST-CLASS DEVELOPER EXPERIENCE
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We are a team of engineers who love building tools for other engineers. 
              Our goal is to create the email platform we've always wished we had — 
              one that just works.
            </p>

            <ul className="space-y-4">
              {[
                "RESTful API design",
                "Consistent error handling",
                "Comprehensive documentation",
                "Type-safe SDKs",
                "Real-time webhooks",
                "Detailed logging",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00A3FF]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#00A3FF]" />
                  </div>
                  <span className="text-carbon">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* API Logs Visualization */}
          <div className="border border-zinc-200 bg-black rounded-lg overflow-hidden shadow-xl shadow-black/10">
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
              <span className="text-xs font-mono text-zinc-500">API Logs</span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50">
                  <div className="w-full h-full rounded-full bg-green-500 animate-pulse" />
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              </div>
            </div>
            <div className="p-4 font-mono text-xs space-y-3">
              {logs.map((log) => (
                <div
                  key={log.id}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <span className="text-zinc-600">
                    {new Date(log.timestamp).toLocaleTimeString()}
                  </span>
                  <span className="text-[#00A3FF] font-semibold">{log.method}</span>
                  <span className="text-zinc-400 flex-1 truncate">{log.path}</span>
                  <span className="text-green-400">{log.status}</span>
                  <span className="text-zinc-600">{log.duration}ms</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevExperienceSection;
