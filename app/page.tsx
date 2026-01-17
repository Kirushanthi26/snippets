import SnippetList from "@/features/snippets/components/SnippetList";
import { getSnippets } from "@/features/snippets/services/snippet.server";

export default async function Home() {
  const snippets = await getSnippets();

  return (
    <div><SnippetList snippets={snippets} /></div>
  );
}
