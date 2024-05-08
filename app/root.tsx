import type { HeadersFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "./tailwind.css";

import Footer from "~/components/Footer";
import Navigation from "~/components/Navigation";
import SkipLinks from "~/components/SkipLinks";

export const headers: HeadersFunction = () => ({
  "Cache-Control":
    "public, max-age=3600, stale-while-revalidate=900, stale-if-error=86400",
});

export const meta: MetaFunction = ({ location }) => {
  const title = "Matt Halliday is a web developer based in Waterloo, Canada.";
  const description =
    "I'm Matt Halliday, a designer-turned-developer based in Waterloo, Canada with 15+ years experience building things for the web.";
  const currentUrl = `https://www.matthalliday.dev${location.pathname}`;

  return [
    { title: title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: currentUrl },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: currentUrl },
  ];
};

const navLinks = [
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/work",
    name: "Work",
  },
  {
    path: "/uses",
    name: "Uses",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <Meta />
        <Links />
      </head>
      <body>
        <SkipLinks />
        <header className="container flex items-baseline justify-between pb-6 pt-8">
          <NavLink to="/" className="text-2xl font-semibold">
            Matt Halliday
          </NavLink>
          <Navigation links={navLinks} />
        </header>
        <main id="content" tabIndex={-1} className="py-24 focus:outline-none">
          {children}
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
