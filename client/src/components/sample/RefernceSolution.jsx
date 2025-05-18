import React from "react";
import { CheckCircle2 } from "lucide-react";
import MonacoEditor from "../Monaco/MonacoEditor.jsx";
const RefernceSolution = ({ language, sampleData }) => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body p-4 md:p-6">
        <h4 className="font-semibold text-base md:text-lg xl:text-base mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-success" />
          Reference Solution
        </h4>
        <MonacoEditor language={language} sampleData={sampleData} readOnly={true} />
      </div>
    </div>
  );
};

export default RefernceSolution;
