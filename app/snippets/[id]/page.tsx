import Snippet from "@/features/snippets/components/Snippet";
import { getSnippetById } from "@/features/snippets/services/snippet.server";
import { notFound } from "next/navigation";


type SnippetProps = {
    params: {
        id: number;
    };
};

export default async function SnippetPage({ params }: SnippetProps) {
    const { id } = await params;
    const snippet = await getSnippetById(Number(id));

    if (!snippet) {
        notFound();
    }

    return <Snippet snippet={snippet} />
}