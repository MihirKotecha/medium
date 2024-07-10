// src/Tiptap.tsx
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { useEffect } from 'react'

// Define your extension array
const extensions = [
  StarterKit,
  Placeholder.configure({
    // Use a placeholder:
    placeholder: 'Tell your story …',
  })
]

const Tiptap = ({ setFinalContent, setFinalStringedContent }: { setFinalContent: Function, setFinalStringedContent: Function }) => {
  const editor = useEditor({
    extensions,
    editorProps: {
      attributes: {
        class: "border-l-2 outline-none mt-4 p-4"
      }
    }
  })
  useEffect(() => {
    if (editor) {
      const updateContent = () => {
        const htmlContent = editor.getHTML();
        const stringedContent = editor.getText();
        setFinalContent(htmlContent);
        setFinalStringedContent(stringedContent);
      };
      editor.on('update', updateContent);

      // Cleanup
      return () => {
        editor.off('update', updateContent);
      };
    }
  }, [editor, setFinalContent]);




  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap
