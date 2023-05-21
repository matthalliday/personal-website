import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
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
        <img
          src="/images/profile.jpg"
          alt="A three quarter view of Matt smiling at an indoor social event"
          className="h-[32rem] w-96 rounded-lg drop-shadow-lg"
        />
        <div className="px-20">
          <h1 className="mb-6 text-6xl font-extrabold">👋 Hello there.</h1>
          <div className="max-w-prose text-xl">
            <p className="mb-4 leading-relaxed">
              I'm Matt Halliday, a designer-turned-developer based in Waterloo,
              Canada with 15+ years experience building things for the web.
            </p>
            <Link to="/about" className="flex items-center gap-2 underline">
              Learn more about me
              <ArrowSmallRightIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
