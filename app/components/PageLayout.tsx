interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <section className="container">
      <h1 className="mb-6 text-6xl font-extrabold">{title}</h1>
      {children}
    </section>
  );
}
