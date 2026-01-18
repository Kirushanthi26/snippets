import { snippet } from "@/types";
import Link from "next/link";

type SnippetProps = {
    snippet: snippet
}

export default function Snippet({ snippet }: SnippetProps) {
    return (
        <div>
            <div className="flex m-4 justify-between items-center">
                <h1 className="text-2xl font-bold capitalize">{snippet.title}</h1>
                <div className="space-x-3">
                    <Link href={`/snippets/${snippet.id}/edit`} className="p-2 border rounded capitalize">Edit</Link>
                    <button className="p-2 border rounded capitalize">delete</button>
                </div>
            </div>
            <pre className="p-3 border rounded bg-gray-200 border-gray-300">
                <code>
                    {snippet.code}
                </code>
            </pre>
        </div>
    );
}