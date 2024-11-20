export default function StatsSection() {
  return (
    <section className="py-32" id="feature">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-title text-4xl font-medium lg:text-5xl">
            The Gemini ecosystem brings together our models.
          </h2>
          <p className="text-body">
            Gemini is evolving to be more than just the models.{" "}
            <span className="text-title font-medium">
              It supports an entire ecosystem
            </span>{" "}
            — from products innovate.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div>
            <p className="text-body">
              It supports an entire ecosystem — from products to the APIs and
              platforms helping developers and businesses innovate
            </p>
            <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
              <div className="space-y-4">
                <div className=" text-5xl font-bold text-transparent">
                  <h1 className="text-white"> +1200</h1>
                </div>
                <p className="text-body">Stars on GitHub</p>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[--title-text-color] to-gray-600 bg-clip-text text-5xl font-bold text-transparent dark:to-gray-800">
                  <h1 className="text-white"> +500</h1>
                </div>
                <p className="text-body">Powered Apps</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <blockquote className="text-blockquote">
              <p>
                Using TailsUI has been like unlocking a secret design
                superpower. It's the perfect fusion of simplicity and
                versatility, enabling us to create UIs that are as stunning as
                they are user-friendly.
              </p>

              <div className="mt-6 space-y-3">
                <cite className="text-title font-medium">
                  Lalit Mishra, CEO
                </cite>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
