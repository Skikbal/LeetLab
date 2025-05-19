import React from "react";
import { CheckCircle2 } from "lucide-react";
import MonacoEditor from "../Monaco/MonacoEditor.jsx";
const RefernceSolution = ({ children, language, errors }) => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body p-4 md:p-6">
        <h4 className="font-semibold text-base md:text-lg xl:text-base mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-success" />
          Reference Solution
        </h4>
        <div className="w-full border rounded-md overflow-hidden">{children}</div>
        {errors?.referenceSolutions?.[language] && (
          <div className="mt-2">
            <span className="text-error text-sm">
              {errors?.referenceSolutions[language].message}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RefernceSolution;
