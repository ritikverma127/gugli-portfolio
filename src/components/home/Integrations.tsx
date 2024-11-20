import React from "react";

export default function IntegrationsSection() {
  return (
    <section>
      <div className="py-32" id="Quickstart">
        <div className="mx-auto px-6 max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl text-title font-semibold">
              Quickstart with boilerplates
            </h2>
            <p className="mt-6 text-body">
              Harum quae dolore inventore repudiandae? orrupti aut temporibus
              ariatur.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <IntegrationCard
              title="React"
              description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
              icon={<IntegrationIcon />}
            />
            <IntegrationCard
              title="Vue"
              description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
              icon={<IntegrationIcon />}
            />
            <IntegrationCard
              title="Angular"
              description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
              icon={<IntegrationIcon />}
            />
            <IntegrationCard
              title="Astro"
              description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
              icon={<IntegrationIcon />}
            />
            <IntegrationCard
              title="Svelte"
              description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
              icon={<IntegrationIcon />}
            />
            <IntegrationCard
              title="DigitalOcean"
              description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
              icon={<IntegrationIcon />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const DownloadIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m17 13l-5 5m0 0l-5-5m5 5V6"
      />
    </svg>
  );
};

const GitHubIcon = () => {
  return (
    <svg
      className="size-5"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
      />
    </svg>
  );
};

const IntegrationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 128 128"
    >
      <path
        fill="#61dafb"
        d="M64.142 102.96H39.24V78.522h24.903ZM39.24 122.131H20.373v-19.173H39.24Zm-18.866-19.173H4.53V87.167h15.843Zm43.394 24.814v-24.814c26.41 0 46.784-25.94 36.597-53.388c-3.775-10.15-11.694-18.42-22.26-22.181c-27.167-9.772-53.2 10.527-53.2 36.468H0c0-41.354 40.37-74.064 84.52-60.53c19.242 6.017 34.334 21.055 40.37 40.23c13.581 43.985-19.245 84.214-61.123 84.214Zm0 0"
      />
    </svg>
  );
};

const IntegrationCard = ({
  title,
  description,
  icon,
  downloadLink = "/",
  sourceCodeLink = "https://github.com/tailus-ui",
}: {
  title: string;
  description: string;
  icon: JSX.Element;
  downloadLink?: string;
  sourceCodeLink?: string;
}) => {
  return (
    <div className="relative group overflow-hidden card variant-outlined">
      <div
        aria-hidden="true"
        className="inset-0 absolute aspect-video rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-white blur-2xl opacity-0 group-hover:opacity-5"
      ></div>
      <div className="relative">
        <h3 className="sr-only">{title}</h3>
        <div
          data-shade="glassy"
          className="badge variant-outlined flex relative bg-ui *:relative *:size-6 *:m-auto size-12 "
        >
          {icon}
        </div>

        <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>

        <div className="flex gap-3 -mb-[--card-padding] py-4 border-t">
          <a
            href={downloadLink}
            download="/"
            className="group btn variant-soft sz-sm"
          >
            <span>Download</span>
            <DownloadIcon />
          </a>
          <a href={sourceCodeLink} className="btn variant-soft sz-sm icon-only">
            <span className="sr-only">Source Code</span>
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
