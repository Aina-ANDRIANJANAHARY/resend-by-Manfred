import { useState } from "react";
import { Menu, X } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { docsNav, dnsRecords, webhookEvents, sdkCodeExamples } from "@/lib/data/content";

// ---------------------------------------------------------------------------
// Snippets
// ---------------------------------------------------------------------------

const SNIPPETS = {
  install: `npm install resend
# or
yarn add resend
# or
pnpm add resend`,

  send: `import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['user@example.com'],
  subject: 'Hello World',
  html: '<p>It works!</p>',
});`,

  batch: `const { data, error } = await resend.batch.send([
  {
    from: 'Acme <noreply@acme.com>',
    to: 'alice@example.com',
    subject: 'Welcome, Alice!',
    html: '<p>Hi Alice</p>',
  },
  {
    from: 'Acme <noreply@acme.com>',
    to: 'bob@example.com',
    subject: 'Welcome, Bob!',
    html: '<p>Hi Bob</p>',
  },
]);`,

  attachments: `await resend.emails.send({
  from: 'Acme <noreply@acme.com>',
  to: ['user@example.com'],
  subject: 'Your invoice',
  html: '<p>Please find your invoice attached.</p>',
  attachments: [
    {
      filename: 'invoice.pdf',
      content: fs.readFileSync('./invoice.pdf'),
    },
    {
      filename: 'receipt.pdf',
      path: 'https://example.com/receipts/1234.pdf', // remote URL
    },
  ],
});`,

  scheduled: `// Send in 30 minutes
await resend.emails.send({
  from: 'Acme <noreply@acme.com>',
  to: ['user@example.com'],
  subject: 'Your weekly digest',
  html: '<p>Here is your digest.</p>',
  scheduledAt: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
});

// Cancel before it fires
await resend.emails.cancel('msg_01abc');`,

  webhookVerify: `import { Webhook } from 'resend';

const wh = new Webhook(process.env.RESEND_WEBHOOK_SECRET);

// Express example — use raw body, not parsed JSON
app.post('/webhooks/resend', express.raw({ type: 'application/json' }), (req, res) => {
  const payload = wh.verify(req.body, req.headers);

  switch (payload.type) {
    case 'email.delivered':
      console.log('Delivered to', payload.data.to);
      break;
    case 'email.bounced':
      // suppress address from future sends
      break;
  }

  res.status(200).json({ received: true });
});`,
};

// ---------------------------------------------------------------------------
// Shared components
// ---------------------------------------------------------------------------

const CodeBlock = ({ code }: { code: string }) => (
  <pre className="bg-carbon border border-carbon/80 p-4 overflow-x-auto text-sm font-mono text-white/80 leading-relaxed my-4">
    <code>{code}</code>
  </pre>
);

const Inline = ({ children }: { children: string }) => (
  <code className="font-mono text-xs bg-surface border border-trace px-1.5 py-0.5 text-carbon/70">
    {children}
  </code>
);

const SectionDivider = () => (
  <hr className="border-trace my-14" />
);

// ---------------------------------------------------------------------------
// DNS record type badge colours
// ---------------------------------------------------------------------------

const DNS_TYPE_COLOR: Record<string, string> = {
  TXT:   "bg-blue-50 text-blue-700 border-blue-200",
  CNAME: "bg-purple-50 text-purple-700 border-purple-200",
  MX:    "bg-orange-50 text-orange-700 border-orange-200",
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const Docs = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeEvent, setActiveEvent] = useState(webhookEvents[0].name);
  const [activeSdk, setActiveSdk]     = useState(sdkCodeExamples[0].id);

  const currentEvent = webhookEvents.find((e) => e.name === activeEvent)!;
  const currentSdk   = sdkCodeExamples.find((s) => s.id === activeSdk)!;

  return (
    <>
      <Header />
      <div className="pt-16 min-h-screen flex flex-col bg-background">
        <div className="flex-1 flex relative">

          {/* Mobile FAB */}
          <button
            className="lg:hidden fixed bottom-6 right-6 z-40 h-12 w-12 flex items-center justify-center bg-carbon text-white shadow-lg"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Overlay */}
          {sidebarOpen && (
            <div
              className="lg:hidden fixed inset-0 z-30 bg-carbon/40"
              onClick={() => setSidebarOpen(false)}
              aria-hidden="true"
            />
          )}

          {/* Sidebar */}
          <aside
            className={`
              fixed lg:sticky top-16 z-30 h-[calc(100vh-4rem)] w-64 shrink-0
              border-r border-trace bg-surface overflow-y-auto
              transition-transform duration-200
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}
            aria-label="Documentation navigation"
          >
            <nav className="p-6 space-y-6">
              {docsNav.map((category) => (
                <div key={category.title}>
                  <p className="text-xs font-semibold text-carbon/40 uppercase tracking-widest mb-2">
                    {category.title}
                  </p>
                  <ul className="space-y-1">
                    {category.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="block py-1 px-2 text-sm text-muted-foreground hover:text-carbon hover:bg-trace transition-colors -mx-2"
                          onClick={() => setSidebarOpen(false)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 px-6 lg:px-12 py-10 max-w-3xl">

            {/* ── Introduction ─────────────────────────────────────────── */}
            <section id="introduction" className="mb-14">
              <h1 className="text-4xl font-bold text-carbon tracking-tight mb-4">Introduction</h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Resend is the email API built for developers. Send transactional email at scale,
                preview templates in real time, and get full visibility into every delivery event.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This documentation covers the REST API, official SDKs, webhooks, and domain
                configuration. If you're new, start with the{" "}
                <a href="#quickstart" className="text-[hsl(150_60%_30%)] hover:underline font-medium">
                  Quickstart
                </a>.
              </p>
            </section>

            <SectionDivider />

            {/* ── Quickstart ───────────────────────────────────────────── */}
            <section id="quickstart" className="mb-14">
              <h2 className="text-2xl font-bold text-carbon tracking-tight mb-4">Quickstart</h2>
              <p className="text-muted-foreground mb-6">Get your first email sent in under 5 minutes.</p>

              <h3 id="api-keys" className="text-base font-semibold text-carbon mt-6 mb-2">
                1. Get your API key
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-1">
                Create a free account and copy your key from{" "}
                <Inline>Settings → API Keys</Inline>.
                Store it as an environment variable:
              </p>
              <CodeBlock code="RESEND_API_KEY=re_xxxxxxxxxxxxxxxx" />

              <h3 id="sdk" className="text-base font-semibold text-carbon mt-6 mb-2">
                2. Install the SDK
              </h3>
              <CodeBlock code={SNIPPETS.install} />

              <h3 id="send-email" className="text-base font-semibold text-carbon mt-6 mb-2">
                3. Send your first email
              </h3>
              <CodeBlock code={SNIPPETS.send} />
            </section>

            <SectionDivider />

            {/* ── Batch ────────────────────────────────────────────────── */}
            <section id="batch" className="mb-14">
              <h2 className="text-2xl font-bold text-carbon tracking-tight mb-4">Batch sending</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Send up to <strong className="text-carbon">100 emails</strong> per request. Each message
                can have different recipients, subjects, and bodies.
              </p>
              <CodeBlock code={SNIPPETS.batch} />
            </section>

            {/* ── Attachments ──────────────────────────────────────────── */}
            <section id="attachments" className="mb-14">
              <h2 className="text-2xl font-bold text-carbon tracking-tight mb-4">Attachments</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Pass an <Inline>attachments</Inline> array to any send call. Each item needs a{" "}
                <Inline>filename</Inline> and either a <Inline>content</Inline> buffer or a remote{" "}
                <Inline>path</Inline> URL.
              </p>
              <CodeBlock code={SNIPPETS.attachments} />
              <div className="border border-trace bg-surface p-4 mt-4">
                <p className="text-xs font-semibold text-carbon mb-2">Limits</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Maximum total attachment size: <strong className="text-carbon">40 MB</strong></li>
                  <li>Supported: PDF, images, plain text, CSV, ZIP</li>
                  <li>Remote URLs must be publicly accessible at send time</li>
                </ul>
              </div>
            </section>

            {/* ── Scheduled sends ──────────────────────────────────────── */}
            <section id="scheduled" className="mb-14">
              <h2 className="text-2xl font-bold text-carbon tracking-tight mb-4">Scheduled sends</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Pass an ISO 8601 timestamp in the <Inline>scheduledAt</Inline> field to delay delivery.
                You can cancel the email any time before it fires using <Inline>emails.cancel()</Inline>.
              </p>
              <CodeBlock code={SNIPPETS.scheduled} />
              <p className="text-sm text-muted-foreground mt-2">
                Maximum scheduling window: <strong className="text-carbon">72 hours</strong> from now.
              </p>
            </section>

            <SectionDivider />

            {/* ── Add a domain ─────────────────────────────────────────── */}
            <section id="add-domain" className="mb-14">
              <h2 className="text-2xl font-bold text-carbon tracking-tight mb-4">Add a domain</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Authenticate your sending domain so emails reach the inbox — not the spam folder.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { n: "01", title: "Add your domain",       body: "Enter your domain in the Resend dashboard under Domains." },
                  { n: "02", title: "Copy DNS records",      body: "DKIM, SPF, and DMARC records are generated automatically." },
                  { n: "03", title: "Add records to DNS",    body: "Paste the records into your DNS provider's control panel." },
                  { n: "04", title: "Wait & verify",         body: "Resend polls your DNS. Green status appears within minutes." },
                ].map((s) => (
                  <div key={s.n} className="border border-trace bg-surface p-5">
                    <span className="font-mono text-xs text-muted-foreground tracking-widest">{s.n}</span>
                    <h3 className="text-sm font-semibold text-carbon mt-2 mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── DNS records ──────────────────────────────────────────── */}
            <section id="dns" className="mb-14">
              <h2 className="text-2xl font-bold text-carbon tracking-tight mb-2">DNS records</h2>
              <p className="text-muted-foreground text-sm mb-5">
                Values below are examples — copy the actual ones from the dashboard.
              </p>
              <div className="border border-trace overflow-x-auto">
                <table className="w-full text-sm min-w-[600px]">
                  <thead>
                    <tr className="border-b border-trace bg-surface">
                      <th className="text-left px-4 py-3 text-carbon/50 font-medium">Type</th>
                      <th className="text-left px-4 py-3 text-carbon/50 font-medium">Name</th>
                      <th className="text-left px-4 py-3 text-carbon/50 font-medium">Value</th>
                      <th className="text-left px-4 py-3 text-carbon/50 font-medium">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-trace">
                    {dnsRecords.map((r) => (
                      <tr key={r.name} className="bg-background hover:bg-surface transition-colors">
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-0.5 text-xs font-mono font-medium border ${DNS_TYPE_COLOR[r.type]}`}>
                            {r.type}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-mono text-xs text-carbon/70">{r.name}</td>
                        <td className="px-4 py-3 font-mono text-xs text-muted-foreground max-w-[180px] truncate" title={r.value}>
                          {r.value}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{r.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── DMARC ────────────────────────────────────────────────── */}
            <section id="dmarc" className="mb-14">
              <h2 className="text-2xl font-bold text-carbon tracking-tight mb-2">DMARC setup</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Start with <Inline>p=none</Inline> to monitor, then tighten once delivery is stable.
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { policy: "p=none",       label: "Monitor",    desc: "Log failures, deliver everything. Safe starting point." },
                  { policy: "p=quarantine", label: "Quarantine", desc: "Send failing messages to spam." },
                  { policy: "p=reject",     label: "Reject",     desc: "Block failing messages entirely." },
                ].map(({ policy, label, desc }) => (
                  <div key={policy} className="border border-trace bg-surface p-4">
                    <code className="font-mono text-xs text-[hsl(150_60%_30%)] font-semibold">{policy}</code>
                    <p className="text-sm font-semibold text-carbon mt-1 mb-1">{label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <SectionDivider />

            {/* ── Webhooks overview ────────────────────────────────────── */}
            <section id="webhooks" className="mb-14">
              <h2 className="text-2xl font-bold text-carbon tracking-tight mb-4">Webhooks</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Resend sends a signed POST request to your endpoint for every email lifecycle event.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { n: "01", title: "Create an endpoint", body: "Register your HTTPS URL in the Webhooks section of the dashboard." },
                  { n: "02", title: "Choose events",      body: "Subscribe only to the events you need." },
                  { n: "03", title: "Verify & consume",   body: "Use the SDK to verify the signature and process idempotently." },
                ].map((s) => (
                  <div key={s.n} className="border border-trace bg-surface p-4">
                    <span className="font-mono text-xs text-muted-foreground tracking-widest">{s.n}</span>
                    <h3 className="text-sm font-semibold text-carbon mt-2 mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Event types (interactive) ────────────────────────────── */}
            <section id="events" className="mb-14">
              <h2 className="text-2xl font-bold text-carbon tracking-tight mb-5">Event types</h2>
              <div className="border border-trace flex flex-col md:flex-row">
                <ul className="md:w-52 shrink-0 border-b md:border-b-0 md:border-r border-trace bg-surface">
                  {webhookEvents.map((e) => (
                    <li key={e.name}>
                      <button
                        onClick={() => setActiveEvent(e.name)}
                        className={`w-full text-left px-4 py-3 text-xs font-mono border-b border-trace/60 transition-colors
                          ${activeEvent === e.name
                            ? "bg-carbon text-white"
                            : "text-muted-foreground hover:bg-trace hover:text-carbon"}`}
                      >
                        {e.name}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="flex-1 p-5">
                  <p className="text-sm text-muted-foreground mb-3">{currentEvent.description}</p>
                  <CodeBlock code={currentEvent.payload} />
                </div>
              </div>
            </section>

            {/* ── Signature verification ───────────────────────────────── */}
            <section id="signature" className="mb-14">
              <h2 className="text-2xl font-bold text-carbon tracking-tight mb-2">
                Signature verification
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                Every request includes a <Inline>svix-signature</Inline> header.
                Always verify it before processing.
              </p>
              <CodeBlock code={SNIPPETS.webhookVerify} />
            </section>

            <SectionDivider />

            {/* ── SDKs (tabbed) ────────────────────────────────────────── */}
            <section id="sdks" className="mb-10">
              <h2 className="text-2xl font-bold text-carbon tracking-tight mb-5">SDKs</h2>
              <div className="border border-trace">
                {/* Language tabs */}
                <div className="flex flex-wrap border-b border-trace bg-surface">
                  {sdkCodeExamples.map((s) => (
                    <button
                      key={s.id}
                      id={s.id}
                      onClick={() => setActiveSdk(s.id)}
                      className={`px-4 py-3 text-sm font-medium border-r border-trace transition-colors
                        ${activeSdk === s.id
                          ? "bg-carbon text-white"
                          : "text-muted-foreground hover:text-carbon hover:bg-trace"}`}
                    >
                      {s.lang}
                    </button>
                  ))}
                </div>
                {/* Panel */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-base font-semibold text-carbon">{currentSdk.lang}</p>
                      <code className="text-xs font-mono text-muted-foreground">{currentSdk.pkg}</code>
                    </div>
                    <a
                      href={currentSdk.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-muted-foreground hover:text-carbon border border-trace px-3 py-1.5 transition-colors hover:bg-surface"
                    >
                      GitHub →
                    </a>
                  </div>
                  <h3 className="text-sm font-semibold text-carbon mb-1">Install</h3>
                  <CodeBlock code={currentSdk.install} />
                  <h3 className="text-sm font-semibold text-carbon mt-4 mb-1">Send an email</h3>
                  <CodeBlock code={currentSdk.example} />
                </div>
              </div>
            </section>

          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Docs;
