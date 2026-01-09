export default function SnippetCreatePage() {
    return <form>
        <h3 className="font-bold m-3 capitalize text-2xl">create a snippet</h3>
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <label htmlFor="title" className="w-12">Title</label>
                <input type="text" name="title" id="title" className="boarder border-2 border-gray-300 rounded p-2 w-full" />
            </div>
            <div className="flex gap-4">
                <label htmlFor="code" className="w-12">Code</label>
                <textarea name="code" id="code" className="boarder border-2 border-gray-300 rounded p-2 w-full" rows={4} />
            </div>

            <button type="submit" className="rounded p-2 bg-blue-200 ">Create Code</button>
        </div>
    </form>
}