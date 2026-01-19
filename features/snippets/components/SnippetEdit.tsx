'use client'

import { snippet } from "@/types"
import Editor from '@monaco-editor/react';
import { useState } from "react";

type SnippetEditProps = {
    snippet: snippet
}

export default function SnippetEdit({ snippet }: SnippetEditProps) {
    const [code, setCode] = useState<string>(snippet.code)

    function handleEditorChange(value: string = "") {
        setCode(value)
    }


    return <div className="space-y-5">
        <h1 className="text-2xl font-semibold">Edit {snippet.title}</h1>
        <Editor
            height="40vh"
            defaultLanguage="javascript"
            theme="vs-dark"
            onChange={handleEditorChange}
            defaultValue={code}
        />
        <button type="submit" className="rounded p-2 bg-blue-200 ">Save</button>
    </div>
}