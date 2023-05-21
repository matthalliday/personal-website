import type { LinksFunction } from "@remix-run/cloudflare";
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
