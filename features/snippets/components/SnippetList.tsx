import { snippet } from "@/types"
import Link from "next/link"

type SnippetListProps = {
    snippets: snippet[]
}

export default function SnippetList({ snippets }: SnippetListProps) {
    return <div className="flex flex-col gap-5 mt-5">
        <div className="flex flex-row justify-between items-center">
            <h3 className="text-2xl font-semibold ">snippets</h3>
            <Link href={"/snippets/new"} className="border p-2 rounded">New</Link>
        </div>

        {snippets.map((snippet) => <Link href={`/snippets/${snippet.id}`} key={snippet.id} className="flex justify-between items-center p-2 border rounded">
            <h1>{snippet.title}</h1>
            <div>view</div>
        </Link>)}
    </div>
}