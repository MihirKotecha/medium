// src/Tiptap.tsx
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { useCallback, useEffect } from 'react'

// Define your extension array
const extensions = [
  StarterKit,
  Placeholder.configure({
    // Use a placeholder:
    placeholder: 'Tell your story …',
  })
]

const Tiptap = ({setFinalContent}:{setFinalContent:Function}) => {
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
        const htmlContent = editor.getText();
        console.log(typeof(htmlContent));
        setFinalContent(htmlContent);
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
      <EditorContent editor={editor}/> 
    </div>
  )
}

export default Tiptap
