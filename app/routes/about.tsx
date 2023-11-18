import Markdown from "@/components/Markdown";
import PageLayout from "@/components/PageLayout";
import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

// Define the bindings associated with our Function
// so that they are typed
interface Env {
  CONTENT_PREVIEW: KVNamespace;
}

export async function loader({ context }: LoaderFunctionArgs) {
  const env = context.env as Env;

  console.log("context", context);
  console.log("env", context.env);

  const markdown = await env.CONTENT_PREVIEW.get("about");

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
