import ExternalLink from "@/components/ExternalLink";

export default function Footer() {
  return (
    <footer className="container mt-2 flex justify-end">
      <p className="text-sm">
        &copy; 2023 Matt Halliday. Built with{" "}
        <ExternalLink url="https://remix.run/">Remix</ExternalLink>,{" "}
        <ExternalLink url="https://github.com/matthalliday/personal-website">
          Github
        </ExternalLink>
        , and{" "}
        <ExternalLink url="https://pages.cloudflare.com/">
          Cloudflare
        </ExternalLink>
        .
      </p>
    </footer>
  );
}
