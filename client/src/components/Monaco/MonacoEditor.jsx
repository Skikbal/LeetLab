import React from "react";
import { Editor } from "@monaco-editor/react";
const MonacoEditor = ({
  language,
  sampleData,
  readOnly,
  lineNumbers = "off",
}) => {
  return (
    <div className="border rounded-md overflow-hidden">
      <Editor
        height="300px"
        language={language.toLowerCase()}
        theme="vs-dark"
        value={sampleData?.codesnippets?.[language]}
        options={{
          readOnly: readOnly,
          minimap: { enabled: false },
          fontSize: 12,
          lineNumbers: lineNumbers,
          roundedSelection: false,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default MonacoEditor;
