import Markdown from "@/components/Markdown";
import PageLayout from "@/components/PageLayout";
import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export async function loader({ context }: LoaderFunctionArgs) {
  const storage = context.CONTENT as KVNamespace;
  const markdown = await storage.get("about");

  if (!markdown) throw new Response(null, { status: 404 });

  return { markdown };
}

export default function About() {
  const { markdown } = useLoaderData<typeof loader>();

  return (
    <PageLayout title="About">
      <p>My life story</p>

      <Markdown>{markdown}</Markdown>
    </PageLayout>
  );
}
