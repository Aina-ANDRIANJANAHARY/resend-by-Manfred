const AudienceSection = () => {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 uppercase">
            Go beyond editing
          </h2>
          <p className="text-zinc-400 text-lg">
            Group and control your contacts in a simple and intuitive way. 
            Straightforward analytics and reporting tools that will help you send better emails.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Management */}
          <div className="border border-zinc-800 bg-zinc-900/30 rounded-lg p-8">
            <div className="text-sm font-medium text-[#00A3FF] mb-3">
              Contact Management
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Import your list in minutes
            </h3>
            <p className="text-zinc-400 mb-6">
              Import your list in minutes, regardless the size of your audience. 
              Get full visibility of each contact and their personal attributes.
            </p>

            {/* Visual Preview */}
            <div className="border border-zinc-800 bg-black rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-zinc-500">Newsletter Subscribers</span>
                <span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400">
                  2,453 contacts
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 rounded bg-zinc-800/50">
                  <div className="w-8 h-8 rounded-full bg-[#00A3FF]/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-[#00A3FF]">JD</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-zinc-300">john@example.com</p>
                    <p className="text-xs text-zinc-500">Subscribed 2 days ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded bg-zinc-800/50">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-purple-400">SM</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-zinc-300">sarah@company.com</p>
                    <p className="text-xs text-zinc-500">Subscribed 1 week ago</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/docs"
              className="inline-flex h-10 items-center px-5 mt-6 text-sm font-medium text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white transition-colors"
            >
              Learn more
            </a>
          </div>

          {/* Broadcast Analytics */}
          <div className="border border-zinc-800 bg-zinc-900/30 rounded-lg p-8">
            <div className="text-sm font-medium text-[#00A3FF] mb-3">
              Broadcast Analytics
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Unlock powerful insights
            </h3>
            <p className="text-zinc-400 mb-6">
              Unlock powerful insights and understand exactly how your audience 
              is interacting with your broadcast emails.
            </p>

            {/* Visual Preview */}
            <div className="border border-zinc-800 bg-black rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-zinc-500">Weekly Digest #42</span>
                <span className="text-xs text-zinc-500">Sent 3 days ago</span>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center p-3 rounded bg-zinc-800/50">
                  <p className="text-2xl font-bold text-white">68%</p>
                  <p className="text-xs text-zinc-500">Open Rate</p>
                </div>
                <div className="text-center p-3 rounded bg-zinc-800/50">
                  <p className="text-2xl font-bold text-white">24%</p>
                  <p className="text-xs text-zinc-500">Click Rate</p>
                </div>
                <div className="text-center p-3 rounded bg-zinc-800/50">
                  <p className="text-2xl font-bold text-white">0.2%</p>
                  <p className="text-xs text-zinc-500">Unsubscribe</p>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="flex items-end gap-1 h-16">
                {[40, 65, 45, 80, 55, 70, 60].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-[#00A3FF]/60 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            <a
              href="/docs"
              className="inline-flex h-10 items-center px-5 mt-6 text-sm font-medium text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
