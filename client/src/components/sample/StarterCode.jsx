import React from "react";
import MonacoEditor from "../Monaco/MonacoEditor.jsx";
import { Copy } from "lucide-react";
const StarterCode = ({ children,errors,language }) => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body p-4 md:p-6">
        <h4 className="font-semibold text-base md:text-lg xl:text-base mb-4">
          Starter Code Template
        </h4>
        <div className="w-full border rounded-md overflow-hidden">{children}</div>
        {errors?.codesnippets?.[language] && (
          <div className="mt-2">
            <span className="text-error text-sm">
              {errors?.codesnippets[language].message}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StarterCode;
