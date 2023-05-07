interface ExternalLinkProps {
  url: string;
  children: string;
}

export default function ExternalLink({ url, children }: ExternalLinkProps) {
  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
}
