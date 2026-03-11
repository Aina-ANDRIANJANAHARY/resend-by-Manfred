export type { NavItem, Feature, Testimonial, ClientLogo, BlogPost, ChangelogEntry, DocsCategory, DnsRecord, WebhookEvent, SdkEntry } from "@/types";

export const navigation: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Company", href: "#company" },
  { label: "Resources", href: "#resources" },
  { label: "Help", href: "#help" },
  { label: "Docs", href: "/docs" },
  { label: "AI", href: "#ai" },
  { label: "Pricing", href: "#pricing" },
];

export const features: Feature[] = [
  {
    title: "Email API",
    description: "Send transactional emails with a simple REST API. Built for developers who value clean abstractions and reliable delivery.",
  },
  {
    title: "SMTP",
    description: "Send emails from any application with SMTP relay. Compatible with all major email clients and libraries.",
  },
  {
    title: "Inbound Routing",
    description: "Receive and forward emails with custom routing rules. Parse incoming messages and trigger webhooks.",
  },
  {
    title: "Audiences",
    description: "Manage contacts and segments. Build targeted email lists for your marketing campaigns.",
  },
  {
    title: "Broadcasts",
    description: "Send newsletters and marketing emails at scale. Schedule campaigns and track performance.",
  },
  {
    title: "Templates",
    description: "Build beautiful emails with React components. Preview, test, and ship with confidence.",
  },
  {
    title: "Webhooks",
    description: "Real-time event notifications. Track opens, clicks, bounces, and complaints instantly.",
  },
  {
    title: "Analytics",
    description: "Monitor delivery rates, opens, and clicks. Get insights into your email performance.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Our team loves Resend. It makes email sending so easy and reliable. After we switched to Dedicated IPs, our deliverability improved tremendously and we don't hear complaints about emails landing on spam anymore.",
    name: "Vlad Matsiiako",
    role: "Co-founder",
    company: "Infisical",
  },
  {
    quote: "I've used Mailgun, Sendgrid, and Mandrill and they don't come close to providing the quality of developer experience you get with Resend.",
    name: "Brandon Strittmatter",
    role: "Co-founder",
    company: "Outerbase",
  },
  {
    quote: "Resend is an amazing product. It was so easy to switch over. I feel confident knowing that our important emails are in good hands with Resend. Everyone should be using this.",
    name: "Shariar Kabir",
    role: "Founder",
    company: "Ruby Card",
  },
  {
    quote: "All of our customers are located in South America, so having a solution that could send emails from the region closest to our users is very important. Resend's multi-region feature is a game-changer for us.",
    name: "Giovanni Keppelen",
    role: "CTO & Partner",
    company: "VOA Hoteis",
  },
  {
    quote: "The speed and ease of integrating with the product was incredible, but what really stood out was their intricate knowledge of email and relentless support day or night. Oh and we also ended up winning Product of the week.",
    name: "Sam Ducker",
    role: "Co-founder",
    company: "Anyone",
  },
  {
    quote: "As a developer I love the approach that the Resend team is taking. Its so refreshing. They are also extremely user-centric and helpful in terms of getting you up and running, sending beautiful emails that deliver.",
    name: "Hahnbee Lee",
    role: "Co-Founder",
    company: "Mintlify",
  },
  {
    quote: "The Resend team have built a great product in a space that hasn't seen 10x innovation for years. Engineering peers are raving about Resend - it's such a smoother dev experience.",
    name: "Roberto Riccio",
    role: "Head of Product",
    company: "Alliance",
  },
  {
    quote: "If you're a developer or working on a startup, you're going to love Resend's approach to emailing.",
    name: "Joe DeMaria",
    role: "Co-founder & CEO",
    company: "SpecCheck",
  },
  {
    quote: "We were up and running with Resend in no time. It was seamless to integrate into our existing workflow and gave us a tremendous amount of visibility into our email capabilities. Simple to say, it was a no-brainer.",
    name: "Ty Sharp",
    role: "Co-founder & CEO",
    company: "InBuild",
  },
  {
    quote: "Resend not only streamlines our emails to accommodate our expanding customer base, but their team also offered valuable hands-on support during the transition from our old API. Their product is visually stunning and seamlessly integrates with React Email.",
    name: "Thiago Costa",
    role: "Co-founder",
    company: "Fey and Narative",
  },
  {
    quote: "As of our last deployment all of our emails are using Resend. We are loving the development experience of React Email - not having to leave my dev environment to develop new emails is a game-changer.",
    name: "Adam Rankin",
    role: "Founding Engineer",
    company: "Warp",
  },
  {
    quote: "Working with Resend has been amazing. By using Webhooks, I'm able to track email opened/clicked events via Segment and log those events in LogSnag for visibility. I highly believe in the people behind Resend.",
    name: "Taylor Facen",
    role: "Founder",
    company: "Finta",
  },
  {
    quote: "Resend is super easy to set up. Loving the modern approach the team is taking with supercharging email. Never been a fan of other clunky tools.",
    name: "Brek Goin",
    role: "Founder",
    company: "Hammr",
  },
];

export const footerLinks = {
  features: [
    { label: "Email API", href: "#" },
    { label: "SMTP", href: "#" },
    { label: "Inbound", href: "#" },
    { label: "Audiences", href: "#" },
    { label: "Broadcasts", href: "#" },
    { label: "Templates", href: "#" },
    { label: "Webhooks", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/docs#api" },
    { label: "Changelog", href: "/changelog" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "#pricing" },
    { label: "Security", href: "#security" },
    { label: "SOC 2", href: "#soc2" },
    { label: "GDPR", href: "#gdpr" },
    { label: "Brand", href: "#brand" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Customers", href: "#customers" },
    { label: "Humans", href: "#humans" },
    { label: "Philosophy", href: "#philosophy" },
  ],
  help: [
    { label: "Contact", href: "#contact" },
    { label: "Support", href: "#support" },
    { label: "Status", href: "#status" },
    { label: "Migrate", href: "#migrate" },
    { label: "Knowledge Base", href: "#kb" },
  ],
  community: [
    { label: "Events", href: "#events" },
    { label: "Insiders", href: "#insiders" },
    { label: "Open Source", href: "#oss" },
    { label: "Wallpapers", href: "#wallpapers" },
  ],
};

export const clientLogos: ClientLogo[] = [
  { name: "Vercel" },
  { name: "Linear" },
  { name: "Cal.com" },
  { name: "Loom" },
  { name: "Raycast" },
  { name: "Infisical" },
  { name: "Outerbase" },
  { name: "Warp" },
];

export const codeExample = `import { Resend } from 'resend';

const resend = new Resend('re_123456');

await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: 'user@gmail.com',
  subject: 'Hello World',
  html: '<p>Welcome aboard.</p>'
});`;

export const sdkCodeExamples: SdkEntry[] = [
  {
    id: "node",
    lang: "Node.js",
    pkg: "resend",
    install: "npm install resend",
    example: `import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['user@gmail.com'],
  subject: 'Hello World',
  html: '<p>Welcome aboard!</p>',
});

if (error) {
  throw error;
}`,
    github: "https://github.com/resendlabs/resend-node",
  },
  {
    id: "python",
    lang: "Python",
    pkg: "resend",
    install: "pip install resend",
    example: `import resend

resend.api_key = os.environ["RESEND_API_KEY"]

params: resend.Emails.SendParams = {
    "from": "Acme <onboarding@resend.dev>",
    "to": ["user@gmail.com"],
    "subject": "Hello World",
    "html": "<p>Welcome aboard!</p>",
}

email = resend.Emails.send(params)
print(email)`,
    github: "https://github.com/resendlabs/resend-python",
  },
  {
    id: "ruby",
    lang: "Ruby",
    pkg: "resend",
    install: "gem install resend",
    example: `require "resend"

Resend.api_key = ENV["RESEND_API_KEY"]

Resend::Emails.send({
  from: "Acme <onboarding@resend.dev>",
  to: ["user@gmail.com"],
  subject: "Hello World",
  html: "<p>Welcome aboard!</p>",
})`,
    github: "https://github.com/resendlabs/resend-ruby",
  },
  {
    id: "go",
    lang: "Go",
    pkg: "github.com/resendlabs/resend-go",
    install: "go get github.com/resendlabs/resend-go",
    example: `client := resend.NewClient(os.Getenv("RESEND_API_KEY"))

params := &resend.SendEmailRequest{
  From:    "Acme <onboarding@resend.dev>",
  To:      []string{"user@gmail.com"},
  Subject: "Hello World",
  Html:    "<p>Welcome aboard!</p>",
}

sent, err := client.Emails.Send(params)
if err != nil {
  log.Fatal(err)
}
fmt.Println(sent)`,
    github: "https://github.com/resendlabs/resend-go",
  },
  {
    id: "php",
    lang: "PHP",
    pkg: "resend/resend-php",
    install: "composer require resend/resend-php",
    example: `$resend = Resend::client($_ENV['RESEND_API_KEY']);

$resend->emails->send([
  'from'    => 'Acme <onboarding@resend.dev>',
  'to'      => ['user@gmail.com'],
  'subject' => 'Hello World',
  'html'    => '<p>Welcome aboard!</p>',
]);`,
    github: "https://github.com/resendlabs/resend-php",
  },
  {
    id: "java",
    lang: "Java",
    pkg: "com.resend:resend-java",
    install: "gradle add com.resend:resend-java",
    example: `Resend resend = new Resend("re_123456");

SendEmailRequest params = SendEmailRequest.builder()
    .from("Acme <onboarding@resend.dev>")
    .to(List.of("user@gmail.com"))
    .subject("Hello World")
    .html("<p>Welcome aboard!</p>")
    .build();

SendEmailResponse response = resend.emails().send(params);
System.out.println(response.getId());`,
    github: "https://github.com/resendlabs/resend-java",
  },
  {
    id: "rust",
    lang: "Rust",
    pkg: "resend-rs",
    install: "cargo add resend-rs",
    example: `use resend::{Resend, Email};

#[tokio::main]
async fn main() {
    let resend = Resend::new("re_123456");
    
    let email = Email::builder()
        .from("Acme <onboarding@resend.dev>")
        .to("user@gmail.com")
        .subject("Hello World")
        .html("<p>Welcome aboard!</p>")
        .send(&resend)
        .await
        .unwrap();
    
    println!("{:?}", email);
}`,
    github: "https://github.com/resendlabs/resend-rust",
  },
  {
    id: "elixir",
    lang: "Elixir",
    pkg: "resend",
    install: "mix deps.add resend",
    example: `alias Resend.Email

email = %Email{
  from: "Acme <onboarding@resend.dev>",
  to: ["user@gmail.com"],
  subject: "Hello World",
  html: "<p>Welcome aboard!</p>"
}

Resend.send(email)`,
    github: "https://github.com/resendlabs/resend-elixir",
  },
  {
    id: "dotnet",
    lang: ".NET",
    pkg: "Resend.Net",
    install: "dotnet add package Resend.Net",
    example: `var client = new ResendClient("re_123456");

var email = new SendEmailRequest
{
    From = "Acme <onboarding@resend.dev>",
    To = new[] { "user@gmail.com" },
    Subject = "Hello World",
    Html = "<p>Welcome aboard!</p>"
};

var result = await client.Emails.SendAsync(email);
Console.WriteLine(result.Id);`,
    github: "https://github.com/resendlabs/resend-dotnet",
  },
  {
    id: "rest",
    lang: "REST",
    pkg: "",
    install: "",
    example: `curl -X POST https://api.resend.com/emails \\
  -H "Authorization: Bearer re_123456" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "Acme <onboarding@resend.dev>",
    "to": ["user@gmail.com"],
    "subject": "Hello World",
    "html": "<p>Welcome aboard!</p>"
  }'`,
    github: "https://docs.resend.com/api-reference/emails/send-email",
  },
];

export const integrations = [
  { name: "Next.js", href: "#" },
  { name: "Remix", href: "#" },
  { name: "Nuxt", href: "#" },
  { name: "SvelteKit", href: "#" },
  { name: "Astro", href: "#" },
  { name: "SolidStart", href: "#" },
  { name: "Ruby on Rails", href: "#" },
  { name: "Laravel", href: "#" },
  { name: "Django", href: "#" },
  { name: "FastAPI", href: "#" },
  { name: "Gin", href: "#" },
  { name: "Echo", href: "#" },
];

import type { BlogPost, ChangelogEntry, DocsCategory, DnsRecord, WebhookEvent, SdkEntry } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "introducing-resend",
    title: "Introducing Resend: Email for developers",
    excerpt: "Today we're launching Resend — an email API built from the ground up for developers who value clean abstractions, great DX, and reliable delivery.",
    date: "2024-01-15",
    tag: "Announcement",
    author: "Zeno Rocha",
    readTime: "4 min read",
  },
  {
    slug: "react-email-2",
    title: "React Email 2.0 is here",
    excerpt: "The second major version of React Email brings a redesigned component library, a live preview server, and first-class support for dark mode.",
    date: "2024-03-08",
    tag: "Product",
    author: "Bu Kinoshita",
    readTime: "6 min read",
  },
  {
    slug: "deliverability-guide",
    title: "The complete guide to email deliverability in 2024",
    excerpt: "SPF, DKIM, DMARC, IP reputation — everything you need to know to reach the inbox, explained without the jargon.",
    date: "2024-04-22",
    tag: "Guide",
    author: "Gabriel Pimentel",
    readTime: "12 min read",
  },
  {
    slug: "webhooks-deep-dive",
    title: "Webhook events: a deep dive",
    excerpt: "How Resend models email lifecycle events, the structure of each payload, and best practices for idempotent webhook consumers.",
    date: "2024-06-10",
    tag: "Engineering",
    author: "Zeno Rocha",
    readTime: "8 min read",
  },
  {
    slug: "batch-sending",
    title: "Send thousands of emails with the Batch API",
    excerpt: "The new Batch endpoint lets you dispatch up to 100 emails in a single HTTP request — with per-message customisation and atomic error handling.",
    date: "2024-08-19",
    tag: "Product",
    author: "Bu Kinoshita",
    readTime: "5 min read",
  },
  {
    slug: "open-source-email-templates",
    title: "500+ open-source email templates, ready to fork",
    excerpt: "We partnered with the community to build a curated gallery of production-ready React Email templates covering every common transactional use case.",
    date: "2024-10-03",
    tag: "Community",
    author: "Gabriel Pimentel",
    readTime: "3 min read",
  },
];

export const changelogEntries: ChangelogEntry[] = [
  {
    version: "2.4.0",
    date: "2025-02-12",
    type: "minor",
    changes: [
      { kind: "new", text: "Batch API — send up to 100 emails per request" },
      { kind: "new", text: "Scheduled sends with scheduledAt parameter" },
      { kind: "improved", text: "Dashboard email search now supports full-text across subject and recipients" },
    ],
  },
  {
    version: "2.3.1",
    date: "2025-01-27",
    type: "patch",
    changes: [
      { kind: "fixed", text: "Node.js SDK: emails.cancel() now correctly returns a 204 on success" },
      { kind: "fixed", text: "Webhook signatures were not verified when payload exceeded 1 MB" },
    ],
  },
  {
    version: "2.3.0",
    date: "2024-12-05",
    type: "minor",
    changes: [
      { kind: "new", text: "Python SDK v2.0 — fully typed with Pydantic models" },
      { kind: "new", text: "Email tags for grouping and filtering in the dashboard" },
      { kind: "improved", text: "Average API latency reduced by 18% across all regions" },
    ],
  },
  {
    version: "2.2.0",
    date: "2024-10-14",
    type: "minor",
    changes: [
      { kind: "new", text: "Click tracking with per-link analytics" },
      { kind: "new", text: "EU data residency — route emails through Frankfurt" },
      { kind: "improved", text: "DMARC reporting now available in the dashboard" },
      { kind: "fixed", text: "Unsubscribe header not included when headers field was overridden" },
    ],
  },
  {
    version: "2.0.0",
    date: "2024-07-01",
    type: "major",
    changes: [
      { kind: "new", text: "React Email 2.0 integration — live preview in the dashboard" },
      { kind: "new", text: "Multi-region sending — automatic routing to nearest data center" },
      { kind: "new", text: "Domain reputation score visible in settings" },
      { kind: "improved", text: "Redesigned API reference with runnable examples" },
      { kind: "improved", text: "Webhook retry policy now configurable (1–72 hours)" },
    ],
  },
];

export const docsNav: DocsCategory[] = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction", href: "/docs" },
      { label: "Quickstart", href: "/docs#quickstart" },
      { label: "API Keys", href: "/docs#api-keys" },
      { label: "SDK Installation", href: "/docs#sdk" },
    ],
  },
  {
    title: "Emails",
    items: [
      { label: "Send an email", href: "/docs#send-email" },
      { label: "Batch sending", href: "/docs#batch" },
      { label: "Attachments", href: "/docs#attachments" },
      { label: "Scheduled sends", href: "/docs#scheduled" },
    ],
  },
  {
    title: "Domains",
    items: [
      { label: "Add a domain", href: "/docs#add-domain" },
      { label: "DNS records",  href: "/docs#dns" },
      { label: "DMARC setup",  href: "/docs#dmarc" },
    ],
  },
  {
    title: "Webhooks",
    items: [
      { label: "Overview",               href: "/docs#webhooks" },
      { label: "Event types",            href: "/docs#events" },
      { label: "Signature verification", href: "/docs#signature" },
    ],
  },
  {
    title: "SDKs",
    items: [
      { label: "Node.js / TypeScript", href: "/docs#node"   },
      { label: "Python",               href: "/docs#python" },
      { label: "PHP",                  href: "/docs#php"    },
      { label: "Go",                   href: "/docs#go"     },
      { label: "Ruby",                 href: "/docs#ruby"   },
    ],
  },
];

export const dnsRecords: DnsRecord[] = [
  {
    type: "TXT",
    name: "resend._domainkey",
    value: "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNA...",
    purpose: "DKIM — signs outgoing messages so receivers can verify authenticity",
  },
  {
    type: "TXT",
    name: "@",
    value: "v=spf1 include:amazonses.com ~all",
    purpose: "SPF — authorises Resend servers to send on behalf of your domain",
  },
  {
    type: "TXT",
    name: "_dmarc",
    value: "v=DMARC1; p=none; rua=mailto:dmarc@resend.dev",
    purpose: "DMARC — policy for handling messages that fail SPF/DKIM",
  },
  {
    type: "CNAME",
    name: "resend-tracking",
    value: "tracking.resend.com",
    purpose: "Click & open tracking under your own domain",
  },
];

export const webhookEvents: WebhookEvent[] = [
  {
    name: "email.sent",
    description: "Email was accepted and queued by Resend.",
    payload: `{
  "type": "email.sent",
  "created_at": "2024-04-01T10:00:00.000Z",
  "data": {
    "email_id": "msg_01abc",
    "from": "you@example.com",
    "to": ["user@gmail.com"],
    "subject": "Hello World"
  }
}`,
  },
  {
    name: "email.delivered",
    description: "Recipient mail server accepted the message.",
    payload: `{
  "type": "email.delivered",
  "created_at": "2024-04-01T10:00:05.000Z",
  "data": {
    "email_id": "msg_01abc",
    "to": ["user@gmail.com"]
  }
}`,
  },
  {
    name: "email.bounced",
    description: "Permanent delivery failure — address does not exist.",
    payload: `{
  "type": "email.bounced",
  "created_at": "2024-04-01T10:00:10.000Z",
  "data": {
    "email_id": "msg_01abc",
    "to": ["invalid@nowhere.com"],
    "bounce": {
      "message": "550 5.1.1 User unknown"
    }
  }
}`,
  },
  {
    name: "email.opened",
    description: "Recipient opened the email (requires open tracking).",
    payload: `{
  "type": "email.opened",
  "created_at": "2024-04-01T10:05:00.000Z",
  "data": {
    "email_id": "msg_01abc",
    "to": ["user@gmail.com"]
  }
}`,
  },
  {
    name: "email.clicked",
    description: "Recipient clicked a tracked link.",
    payload: `{
  "type": "email.clicked",
  "created_at": "2024-04-01T10:06:00.000Z",
  "data": {
    "email_id": "msg_01abc",
    "to": ["user@gmail.com"],
    "click": { "link": "https://example.com/cta" }
  }
}`,
  },
];