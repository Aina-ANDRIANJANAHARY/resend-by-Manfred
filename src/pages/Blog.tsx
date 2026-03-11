import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { blogPosts } from "@/lib/data/content";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Tag colors matching Resend.com
const TAG_COLORS: Record<string, string> = {
  Announcement: "bg-blue-50 text-blue-700 border-blue-200",
  Product:      "bg-purple-50 text-purple-700 border-purple-200",
  Guide:        "bg-green-50 text-green-700 border-green-200",
  Engineering:  "bg-orange-50 text-orange-700 border-orange-200",
  Community:    "bg-pink-50 text-pink-700 border-pink-200",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const Blog = () => {
  const [featured, ...rest] = blogPosts;
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <Header />
      <main className="pt-24 pb-20 bg-background">
        <div className="container max-w-5xl">
          {/* Page header */}
          <div 
            ref={headerRef}
            className={`mb-12 transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-carbon tracking-tight mb-3">
              Blog
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Updates, guides, and engineering stories from the Resend team.
            </p>
          </div>

          {/* Featured post */}
          <article 
            className={`group relative border border-zinc-200 bg-surface hover:border-zinc-300 hover:shadow-lg transition-all duration-500 mb-10 p-8 md:p-10 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: headerVisible ? '100ms' : '0ms' }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded border ${TAG_COLORS[featured.tag] ?? "bg-surface text-muted-foreground border-trace"}`}
                  >
                    {featured.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{formatDate(featured.date)}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-carbon tracking-tight mb-3 group-hover:text-[#00A3FF] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{featured.author}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </div>
            <Link
              to={`/blog/${featured.slug}`}
              className="absolute inset-0"
              aria-label={`Read: ${featured.title}`}
            />
          </article>

          {/* Post grid */}
          <div 
            ref={gridRef}
            className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${
              gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {rest.map((post, index) => (
              <article
                key={post.slug}
                className={`group relative border border-zinc-200 bg-surface hover:border-zinc-300 hover:shadow-md transition-all p-6 ${
                  gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: gridVisible ? `${index * 100}ms` : '0ms' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded border ${TAG_COLORS[post.tag] ?? "bg-surface text-muted-foreground border-trace"}`}
                  >
                    {post.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
                </div>
                <h3 className="text-lg font-semibold text-carbon tracking-tight mb-2 group-hover:text-[#00A3FF] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{post.author}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="absolute inset-0"
                  aria-label={`Read: ${post.title}`}
                />
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
