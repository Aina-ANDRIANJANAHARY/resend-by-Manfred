import { useState } from "react";

const EMAIL_TEMPLATES = [
  {
    name: "user-welcome.tsx",
    preview: {
      title: "WELCOME TO ACME",
      content: "Hello and welcome to Acme! We're excited to have you on board.",
      cta: "Get Started",
    },
    code: `import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Button,
} from '@react-email/components';

export default function WelcomeEmail({ name = 'User' }) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Acme</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>
            Welcome to Acme, {name}!
          </Heading>
          <Text style={paragraph}>
            Hello and welcome to Acme! We're excited to have you on board.
          </Text>
          <Section style={buttonContainer}>
            <Button style={button} href="https://example.com">
              Get Started
            </Button>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            The Acme Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
}`,
  },
  {
    name: "reset-password.tsx",
    preview: {
      title: "Reset your password",
      content: "Click the button below to reset your password.",
      cta: "Reset Password",
    },
    code: `import {
  Html,
  Body,
  Heading,
  Container,
  Section,
  Button,
} from '@react-email/components';

export default function ResetPasswordEmail({ token }) {
  return (
    <Html>
      <Body>
        <Container>
          <Heading>Reset your password</Heading>
          <Section>
            <Button 
              href={\`https://example.com/reset/\${token}\`}
            >
              Reset Password
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}`,
  },
  {
    name: "user-invite.tsx",
    preview: {
      title: "You've been invited",
      content: "Join the team and start collaborating today.",
      cta: "Accept Invite",
    },
    code: `import {
  Html,
  Body,
  Heading,
  Container,
  Button,
} from '@react-email/components';

export default function InviteEmail({ inviteUrl, teamName }) {
  return (
    <Html>
      <Body>
        <Container>
          <Heading>You've been invited!</Heading>
          <Text>
            Join {teamName} and start collaborating.
          </Text>
          <Button href={inviteUrl}>
            Accept Invite
          </Button>
        </Container>
      </Body>
    </Html>
  );
}`,
  },
];

const ReactEmailSection = () => {
  const [activeTemplate, setActiveTemplate] = useState(EMAIL_TEMPLATES[0]);

  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-sm font-medium text-[#00A3FF] mb-2">React Email</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 uppercase">
            Develop emails using React
          </h2>
          <p className="text-zinc-400 text-lg">
            Create beautiful templates without having to deal with &lt;table&gt; layouts 
            and HTML. Powered by react-email, our open source component library.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Code Panel */}
          <div className="border border-zinc-800 bg-zinc-900 rounded-lg overflow-hidden">
            {/* File Tabs */}
            <div className="flex border-b border-zinc-800">
              {EMAIL_TEMPLATES.map((template) => (
                <button
                  key={template.name}
                  onClick={() => setActiveTemplate(template)}
                  className={`px-4 py-3 text-xs font-mono transition-colors border-r border-zinc-800 ${
                    activeTemplate.name === template.name
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {template.name}
                </button>
              ))}
            </div>
            {/* Code */}
            <pre className="p-4 overflow-x-auto max-h-96 overflow-y-auto">
              <code className="text-xs font-mono text-zinc-300 leading-relaxed whitespace-pre">
                {activeTemplate.code}
              </code>
            </pre>
          </div>

          {/* Preview Panel */}
          <div className="border border-zinc-800 bg-white rounded-lg overflow-hidden">
            <div className="border-b border-zinc-800 px-4 py-3">
              <span className="text-xs font-mono text-zinc-500">Preview</span>
            </div>
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#00A3FF] mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
                <h3 className="text-xl font-bold text-carbon">
                  {activeTemplate.preview.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-center mb-8">
                {activeTemplate.preview.content}
              </p>
              <div className="flex justify-center">
                <button className="h-11 px-6 bg-[#00A3FF] text-white text-sm font-medium rounded hover:bg-[#0090E6] transition-colors">
                  {activeTemplate.preview.cta}
                </button>
              </div>
              <hr className="my-6 border-zinc-200" />
              <p className="text-xs text-center text-zinc-500">
                Cheers,<br />The Acme Team
              </p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <a
            href="/docs"
            className="inline-flex h-11 items-center px-6 bg-[#00A3FF] text-white text-sm font-medium hover:bg-[#0090E6] transition-colors shadow-lg shadow-[#00A3FF]/25"
          >
            Get Started
          </a>
          <a
            href="/docs"
            className="inline-flex h-11 items-center px-6 text-sm font-medium text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white transition-colors"
          >
            Check the Docs
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReactEmailSection;
