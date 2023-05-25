import type { LinksFunction, V2_MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SkipLinks from "@/components/SkipLinks";

import stylesheet from "@/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = ({ location }) => {
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

export default function App() {
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
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
