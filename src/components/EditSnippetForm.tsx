'use client'
import { Snippet } from '@/generated/prisma'
import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import { saveSnippet } from '@/actions'
import { Button } from './ui/button'

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
    const [code, setCode] = useState(snippet.code);
    const changeEventHandler = (value:string = "") => {
        setCode(value);
    }
    // cannot use server action as an inline inside client component like
    // async function saveSnippet () {
    // "use server" }

    const saveSnippetAction = saveSnippet.bind(null,snippet.id,code); // null for message
    return (
        <div className='flex flex-col gap-4'>
            <form action={saveSnippetAction} className='flex items-center justify-between'>
                <h1 className='font-bold text-xl'>Your Code Editor:</h1>
                <Button type="submit">Save</Button>
            </form>
            <Editor
                height="40vh"
                theme="vs-dark"
                defaultLanguage='javascript'
                defaultValue={code}
                onChange={changeEventHandler}
            />
        </div>
    )
}

export default EditSnippetForm
