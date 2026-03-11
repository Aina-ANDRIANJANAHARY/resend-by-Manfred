const FeaturesShowcaseSection = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-carbon tracking-tight mb-4 uppercase">
            Built for developers
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to send emails. Nothing you don't.
          </p>
        </div>

        <div className="space-y-24">
          {/* Test Mode */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-sm font-medium text-[#00A3FF] mb-2">Test Mode</div>
              <h3 className="text-2xl md:text-3xl font-bold text-carbon mb-4">
                Test without sending
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Enable test mode to simulate email sending without actually delivering messages.
                Perfect for development and CI/CD pipelines.
              </p>
              <ul className="space-y-3">
                {[
                  "No emails sent in test mode",
                  "Full API response simulation",
                  "Webhook event testing",
                  "Zero cost for testing",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-carbon">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A3FF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 border border-zinc-200 bg-black p-6 rounded-lg shadow-xl shadow-black/5">
              <pre className="text-zinc-300">
                <code>{`const { data, error } = await resend.emails.send({
  from: 'Acme <test@resend.dev>',
  to: ['user@example.com'],
  subject: 'Test Email',
  html: '<p>Hello World</p>',
});

// Test mode returns mock data
console.log(data);
// { id: 'test_123', status: 'test' }`}</code>
              </pre>
            </div>
          </div>

          {/* Email Editor */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="border border-zinc-200 bg-surface p-6 rounded-lg shadow-lg shadow-black/5">
              <div className="border border-zinc-200 bg-white p-6 rounded">
                <div className="text-xs text-zinc-500 mb-4">Preview</div>
                <div className="space-y-4">
                  <div className="h-8 bg-zinc-100 w-3/4 rounded" />
                  <div className="h-4 bg-zinc-100 w-full rounded" />
                  <div className="h-4 bg-zinc-100 w-5/6 rounded" />
                  <div className="h-10 bg-[#00A3FF] text-white flex items-center justify-center mt-6 rounded shadow-md shadow-[#00A3FF]/25">
                    <span className="text-sm">Call to Action</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-[#00A3FF] mb-2">Visual Editor</div>
              <h3 className="text-2xl md:text-3xl font-bold text-carbon mb-4">
                Build emails visually
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Drag and drop components to create beautiful emails.
                Preview in real-time across devices and email clients.
              </p>
              <ul className="space-y-3">
                {[
                  "Drag and drop builder",
                  "Real-time preview",
                  "Email client testing",
                  "Custom components",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-carbon">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A3FF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* React Email */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-sm font-medium text-[#00A3FF] mb-2">React Email</div>
              <h3 className="text-2xl md:text-3xl font-bold text-carbon mb-4">
                Build emails with React
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Use React components to build emails. Type-safe, reusable,
                and easy to maintain. Open source and free to use.
              </p>
              <ul className="space-y-3">
                {[
                  "Component-based templates",
                  "TypeScript support",
                  "Hot reloading",
                  "Open source",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-carbon">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A3FF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 border border-zinc-200 bg-black p-6 rounded-lg shadow-xl shadow-black/5">
              <pre className="text-zinc-300">
                <code>{`import {
  Html,
  Body,
  Heading,
  Text,
  Button,
} from '@react-email/components';

export default function WelcomeEmail({ name }) {
  return (
    <Html>
      <Body>
        <Heading>Welcome, {name}!</Heading>
        <Text>Thanks for joining us.</Text>
        <Button href="https://example.com">
          Get Started
        </Button>
      </Body>
    </Html>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcaseSection;
