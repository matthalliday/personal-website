import type { V2_MetaFunction } from "@remix-run/cloudflare";

import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Matt Halliday is a web developer based in Waterloo, Canada.",
    },
  ];
};

export default function Index() {
  return (
    <>
      <section className="container flex items-center">
        <div className="h-[36rem] w-96 rounded-lg bg-gray-500"></div>
        <div className="px-20">
          <h1 className="mb-6 text-6xl font-extrabold">👋 Hello there.</h1>
          <div className="max-w-prose text-xl">
            <p className="mb-4 leading-relaxed">
              I'm Matt Halliday, a designer-turned-developer based in Waterloo,
              Canada with 15+ years experience building things for the web.
            </p>
            <Link to="/about" className="underline">
              Learn more about me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
