export default function SkipLinks() {
  return (
    <>
      <a
        href="#navigation"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:px-2 focus:py-1"
      >
        Skip to navigation
      </a>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:px-2 focus:py-1"
      >
        Skip to content
      </a>
    </>
  );
}
