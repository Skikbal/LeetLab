import React from "react";
import MonacoEditor from "../Monaco/MonacoEditor.jsx";
import { Copy } from "lucide-react";
const StarterCode = ({ language, sampleData }) => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body p-4 md:p-6">
        <h4 className="font-semibold text-base md:text-lg xl:text-base mb-4">
          Starter Code Template
        </h4>
        <MonacoEditor language={language} sampleData={sampleData} readOnly={true}/>
      </div>
    </div>
  );
};

export default StarterCode;
