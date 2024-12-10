import React from 'react'
import Editor from '@monaco-editor/react';

const CodeEditor: React.FC<CodeEditorProps> = ({handleCodeChange}) => {
  return <Editor height="90vh" defaultLanguage="javascript" theme='vs-dark' className='rounded-full' onChange={handleCodeChange} />
}

export default CodeEditor