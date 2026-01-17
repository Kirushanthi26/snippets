import { snippet } from "@/types"

type SnippetListProps = {
    snippets: snippet[]
}

export default function SnippetList({ snippets }: SnippetListProps) {
    return <div>
        {snippets.map((snippet) => <div key={snippet.id}>
            <h1>{snippet.title}</h1>
        </div>)}
    </div>
}