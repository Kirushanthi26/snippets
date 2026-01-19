'use client'

import { snippet } from "@/types"
import Editor from '@monaco-editor/react';
import { useState } from "react";
import { updateSnippet } from "../services/snippet.actions";

type SnippetEditProps = {
    snippet: snippet
}

export default function SnippetEdit({ snippet }: SnippetEditProps) {
    const [code, setCode] = useState<string>(snippet.code)

    const handleUpdate = async () => {
        await updateSnippet(code, snippet.id,);
    }


    return <div className="space-y-5">
        <h1 className="text-2xl font-semibold">Edit {snippet.title}</h1>
        <Editor
            height="40vh"
            defaultLanguage="javascript"
            theme="vs-dark"
            onChange={(value) => setCode(value ?? "")}
            defaultValue={code}
        />
        <button type="submit" className="rounded p-2 bg-blue-200" onClick={handleUpdate}>Save</button>
    </div>
}