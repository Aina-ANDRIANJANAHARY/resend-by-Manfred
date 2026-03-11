import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const LOGOS = [
  { name: "Warner Bros", src: "/images/warner-bros.png" },
  { name: "Max", src: "/images/max.png" },
  { name: "Raycast", src: "/images/raycast.png" },
  { name: "Mistral AI", src: "/images/mistral-ai.png" },
  { name: "Replit", src: "/images/replit.png" },
  { name: "Anghami", src: "/images/anghami.png" },
  { name: "Gumrock AI", src: "/images/gumroai.png" },
  { name: "Decathlon", src: "/images/decathlon.png" },
  { name: "Supabase", src: "/images/supabase.png" },
  { name: "Leap", src: "/images/leap.png" },
  { name: "Payload", src: "/images/payload.png" },
];

const ClientLogos = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-16 border-b border-zinc-800 bg-black"
      aria-label="Trusted by"
    >
      <div className="container">
        <p className="text-center text-xs tracking-widest text-zinc-500 uppercase mb-10">
          Companies of all sizes trust Resend to deliver their most important emails.
        </p>
        
        {/* First row - 6 logos */}
        <div
          className={`w-5/6 gap-x-4 grid grid-cols-2 items-center sm:grid-cols-3 lg:grid-cols-6 mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {LOGOS.slice(0, 6).map(({ name, src }, index) => (
            <div
              key={name}
              className="flex h-24 items-center justify-center opacity-40 hover:opacity-80 transition-opacity duration-300"
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : '0ms',
              }}
            >
              <img
                src={src}
                alt={name}
                className="max-h-10 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Second row - 5 logos (visible on md+ screens) */}
        <div
          className={`w-5/6 hidden flex-col gap-x-4 md:grid grid-cols-2 items-center sm:grid-cols-3 lg:grid-cols-5 mx-auto mt-4 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {LOGOS.slice(6).map(({ name, src }, index) => (
            <div
              key={name}
              className="flex h-24 items-center justify-center opacity-40 hover:opacity-80 transition-opacity duration-300"
              style={{
                transitionDelay: isVisible ? `${(index + 6) * 50}ms` : '0ms',
              }}
            >
              <img
                src={src}
                alt={name}
                className="max-h-10 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
