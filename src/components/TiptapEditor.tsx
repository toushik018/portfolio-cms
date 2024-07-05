import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Code from "@tiptap/extension-code";
import CodeBlock from "@tiptap/extension-code-block";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import { Editor } from "@tiptap/core";

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex space-x-2 mb-4 bg-gray-100 p-2 rounded-t border-b">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`p-2 ${
          editor.isActive("bold") ? "bg-blue-500 text-white" : ""
        }`}
      >
        Bold
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`p-2 ${
          editor.isActive("italic") ? "bg-blue-500 text-white" : ""
        }`}
      >
        Italic
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={`p-2 ${
          editor.isActive("underline") ? "bg-blue-500 text-white" : ""
        }`}
      >
        Underline
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`p-2 ${
          editor.isActive("code") ? "bg-blue-500 text-white" : ""
        }`}
      >
        Code
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        className={`p-2 ${
          editor.isActive("codeBlock") ? "bg-blue-500 text-white" : ""
        }`}
      >
        Code Block
      </button>
      <button
        type="button"
        onClick={() =>
          editor.chain().focus().setLink({ href: "https://example.com" }).run()
        }
        disabled={
          !editor
            .can()
            .chain()
            .focus()
            .setLink({ href: "https://example.com" })
            .run()
        }
        className={`p-2 ${
          editor.isActive("link") ? "bg-blue-500 text-white" : ""
        }`}
      >
        Link
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.can().chain().focus().unsetLink().run()}
        className="p-2"
      >
        Unset Link
      </button>
    </div>
  );
};

const TiptapEditor = ({
  content,
  setContent,
}: {
  content: string;
  setContent: (content: string) => void;
}) => {
  const editor = useEditor({
    extensions: [StarterKit, Bold, Italic, Underline, Code, CodeBlock, Link],
    content: content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  return (
    <div className="border border-gray-300 rounded-lg">
      <MenuBar editor={editor} />
      <div className="min-h-[400px] h-96 p-4 border-t border-gray-300">
        <EditorContent
          editor={editor}
          className="prose prose-lg max-w-none h-full"
        />
      </div>
    </div>
  );
};

export default TiptapEditor;
