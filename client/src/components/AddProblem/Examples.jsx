import React from "react";
import ProblemExample from "../problem/ProblemExample.jsx";
import SampleCardLayout from "../cards/SampleCardLayout.jsx";
import { useFormContext } from "react-hook-form";
import { Code2 } from "lucide-react";
const Examples = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="space-y-8">
      {["JAVASCRIPT", "PYTHON", "JAVA"].map((language) => (
        <SampleCardLayout
          icon={<Code2 className="w-5 h-5" />}
          title={language}
          key={language}
        >
          <div className="space-y-6">
            {/* Examples */}
            <ProblemExample
              register={register}
              language={language}
              errors={errors}
            />
          </div>
        </SampleCardLayout>
      ))}
    </div>
  );
};

export default Examples;
