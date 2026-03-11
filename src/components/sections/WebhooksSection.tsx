import { useState } from "react";

const WEBHOOK_EVENTS = [
  {
    name: "email.sent",
    description: "Email was accepted and queued for delivery",
    payload: `{
  "type": "email.sent",
  "created_at": "2024-01-15T10:30:00.000Z",
  "data": {
    "email_id": "em_abc123xyz",
    "from": "Acme <onboarding@resend.dev>",
    "to": ["user@gmail.com"],
    "subject": "Welcome!"
  }
}`,
  },
  {
    name: "email.delivered",
    description: "Recipient mail server accepted the message",
    payload: `{
  "type": "email.delivered",
  "created_at": "2024-01-15T10:30:05.000Z",
  "data": {
    "email_id": "em_abc123xyz",
    "to": ["user@gmail.com"]
  }
}`,
  },
  {
    name: "email.opened",
    description: "Recipient opened the email",
    payload: `{
  "type": "email.opened",
  "created_at": "2024-01-15T10:35:00.000Z",
  "data": {
    "email_id": "em_abc123xyz",
    "to": ["user@gmail.com"]
  }
}`,
  },
  {
    name: "email.clicked",
    description: "Recipient clicked a tracked link",
    payload: `{
  "type": "email.clicked",
  "created_at": "2024-01-15T10:36:00.000Z",
  "data": {
    "email_id": "em_abc123xyz",
    "to": ["user@gmail.com"],
    "link": "https://example.com/cta"
  }
}`,
  },
  {
    name: "email.bounced",
    description: "Email bounced (permanent failure)",
    payload: `{
  "type": "email.bounced",
  "created_at": "2024-01-15T10:30:10.000Z",
  "data": {
    "email_id": "em_abc123xyz",
    "to": ["invalid@example.com"],
    "bounce": {
      "message": "550 5.1.1 User unknown",
      "type": "permanent"
    }
  }
}`,
  },
];

const WebhooksSection = () => {
  const [activeEvent, setActiveEvent] = useState(WEBHOOK_EVENTS[0]);

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-sm font-medium text-[#00A3FF] mb-2">Webhooks</div>
            <h2 className="text-3xl md:text-4xl font-bold text-carbon tracking-tight mb-4">
              Modular webhooks
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Receive real-time notifications directly to your server. 
              Every time an email is delivered, opened, bounces, or a link is clicked.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Real-time event delivery",
                "Signed payloads for security",
                "Automatic retry on failure",
                "Customizable event types",
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

          <div className="order-1 lg:order-2">
            {/* Event Type Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {WEBHOOK_EVENTS.map((event) => (
                <button
                  key={event.name}
                  onClick={() => setActiveEvent(event)}
                  className={`px-4 py-2 text-sm font-medium transition-all border rounded ${
                    activeEvent.name === event.name
                      ? "bg-carbon text-white border-carbon"
                      : "bg-background text-muted-foreground border-zinc-200 hover:border-zinc-300"
                  }`}
                >
                  {event.name.split(".")[1]}
                </button>
              ))}
            </div>

            {/* Payload Display */}
            <div className="border border-zinc-200 bg-black rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
                <span className="text-xs font-mono text-zinc-500">webhook-payload.json</span>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm font-mono text-zinc-300 leading-relaxed whitespace-pre">
                  {activeEvent.payload}
                </code>
              </pre>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground mt-4">
              {activeEvent.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebhooksSection;
