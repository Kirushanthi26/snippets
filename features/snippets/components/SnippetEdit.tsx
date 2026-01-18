'use client'

import { snippet } from "@/types"

type SnippetEditProps = {
    snippet: snippet
}

export default function SnippetEdit({ snippet }: SnippetEditProps) {
    return <div>hello {snippet.title}</div>
}