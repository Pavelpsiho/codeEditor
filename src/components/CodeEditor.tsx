import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';

interface CodeEditorProps {
  language: string;
  code: string;
  setCode: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ language, code, setCode }) => {
  return (
    <MonacoEditor
      height="400px"
      language={language}
      theme="vs-dark"
      value={code}
      onChange={(value) => setCode(value || '')}
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        wordWrap: "on",
        wordWrapColumn: 80,
        wrappingIndent: "indent",
      }}
    />
  );
};

export default CodeEditor;
