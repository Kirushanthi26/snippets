import SnippetEdit from "@/features/snippets/components/SnippetEdit";
import { getSnippetById } from "@/features/snippets/services/snippet.server";
import { notFound } from "next/navigation";

type SnippetEditPageProps = {
    params: {
        id: string
    }
}

export default async function SnippetEditPage({ params }: SnippetEditPageProps) {

    const { id } = await params;
    const snippet = await getSnippetById(Number(id));

    if (!snippet) {
        notFound();
    }


    return <SnippetEdit snippet={snippet} />
}