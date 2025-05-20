import React from "react";
import { Editor } from "@monaco-editor/react";
const MonacoEditor = ({
  language,
  value,
  readOnly,
  lineNumbers = "off",
  onChange,
}) => {
  return (
    <div className="relative w-full border rounded-md overflow-hidden ">
      <Editor
        height="300px"
        language={language.toLowerCase()}
        theme="vs-dark"
        value={value}
        onChange={onChange}
        options={{
          readOnly: readOnly,
          minimap: { enabled: false },
          fontSize: 12,
          lineNumbers: lineNumbers,
          roundedSelection: false,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 4,
          insertSpaces: true,
          detectIndentation: false,
        }}
      />
    </div>
  );
};

export default MonacoEditor;
