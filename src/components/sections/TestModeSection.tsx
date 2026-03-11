import { useState, useEffect } from "react";

interface TestEvent {
  id: string;
  type: "delivered" | "clicked" | "opened" | "complained" | "bounced";
  email: string;
  subject: string;
  timestamp: string;
}

const EVENT_TYPES = [
  { type: "delivered", color: "text-green-400", bg: "bg-green-500/20" },
  { type: "clicked", color: "text-blue-400", bg: "bg-blue-500/20" },
  { type: "opened", color: "text-purple-400", bg: "bg-purple-500/20" },
  { type: "complained", color: "text-yellow-400", bg: "bg-yellow-500/20" },
  { type: "bounced", color: "text-red-400", bg: "bg-red-500/20" },
] as const;

const EMAILS = ["user@gmail.com", "admin@example.com", "contact@company.com", "test@domain.org"];
const SUBJECTS = ["Welcome!", "Reset your password", "Your invoice", "Weekly digest"];

const generateEvent = (): TestEvent => {
  const eventType = EVENT_TYPES[Math.floor(Math.random() * EVENT_TYPES.length)];
  return {
    id: Math.random().toString(36).substring(7),
    type: eventType.type,
    email: EMAILS[Math.floor(Math.random() * EMAILS.length)],
    subject: SUBJECTS[Math.floor(Math.random() * SUBJECTS.length)],
    timestamp: new Date().toISOString(),
  };
};

const TestModeSection = () => {
  const [events, setEvents] = useState<TestEvent[]>([]);

  useEffect(() => {
    // Initial events
    setEvents(Array.from({ length: 4 }, generateEvent));

    const interval = setInterval(() => {
      setEvents((prev) => [generateEvent(), ...prev.slice(0, 5)]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm font-medium text-[#00A3FF] mb-2">Test Mode</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Simulate events
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Simulate events and experiment with our API without the risk of 
              accidentally sending real emails to real people.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "No real emails sent in test mode",
                "Full API response simulation",
                "Test webhook events",
                "Zero cost for testing",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00A3FF]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#00A3FF]" />
                  </div>
                  <span className="text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="/docs"
              className="inline-flex h-11 items-center px-6 text-sm font-medium text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white transition-colors"
            >
              Learn more
            </a>
          </div>

          {/* Event Simulation Display */}
          <div className="border border-zinc-800 bg-zinc-900/50 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-xs font-mono text-zinc-500 ml-2">test-mode</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-zinc-500">Live</span>
              </div>
            </div>

            <div className="p-4 space-y-3">
              {events.map((event) => {
                const eventStyle = EVENT_TYPES.find((e) => e.type === event.type)!;
                return (
                  <div
                    key={event.id}
                    className="flex items-start gap-3 p-3 rounded-lg bg-black/50 border border-zinc-800"
                  >
                    <div className={`w-2 h-2 rounded-full mt-1.5 ${eventStyle.bg}`}>
                      <div className={`w-full h-full rounded-full ${eventStyle.color.replace("text", "bg")}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-medium ${eventStyle.color}`}>
                          {event.type}
                        </span>
                        <span className="text-xs text-zinc-600">
                          {new Date(event.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-400 truncate">
                        {event.email}
                      </p>
                      <p className="text-xs text-zinc-500 truncate">
                        {event.subject}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestModeSection;
