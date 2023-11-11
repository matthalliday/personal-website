import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownProps {
  children: React.ReactNode;
}

export default function Markdown({ children }: MarkdownProps) {
  return (
    <ReactMarkdown className="prose" remarkPlugins={[remarkGfm]}>
      {children}
    </ReactMarkdown>
  );
}
