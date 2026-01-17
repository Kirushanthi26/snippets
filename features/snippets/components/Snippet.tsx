import { snippet } from "@/types";

type SnippetProps = {
    snippet: snippet
}

export default function Snippet({ snippet }: SnippetProps) {
    return (
        <div>
            <h1>{snippet.title}</h1>
            <pre>{snippet.code}</pre>
        </div>
    );
}