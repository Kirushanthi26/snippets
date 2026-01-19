import { snippet } from "@/types";
import Link from "next/link";
import { deleteSnippet } from "../services/snippet.actions";

type SnippetProps = {
    snippet: snippet
}

export default function Snippet({ snippet }: SnippetProps) {
    return (
        <div>
            <div className="flex m-4 justify-between items-center">
                <h1 className="text-2xl font-bold capitalize">{snippet.title}</h1>
                <div className="flex flex-row gap-4">
                    <Link href={`/snippets/${snippet.id}/edit`} className="p-2 border rounded capitalize">Edit</Link>

                    {/* Server Action via form */}
                    <form action={deleteSnippet}>
                        <input type="hidden" name="id" value={snippet.id} />
                        <button className="p-2 border rounded capitalize">
                            Delete
                        </button>
                    </form>
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