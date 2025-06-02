import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import SampleCardLayout from "../cards/SampleCardLayout";
import RefernceSolution from "../sample/RefernceSolution.jsx";
import StarterCode from "../sample/StarterCode.jsx";
import { Code2 } from "lucide-react";
import MonacoEditor from "../Monaco/MonacoEditor.jsx";
const CodeSetup = () => {

  const {
    control,
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
            {/*codesnippets*/}
            <StarterCode errors={errors} language={language}>
              <Controller
                name={`codesnippets.${language}`}
                control={control}
                render={({ field }) => (
                  <MonacoEditor
                    value={field.value}
                    language={language}
                    readOnly={false}
                    lineNumbers="on"
                    onChange={field.onChange}
                  />
                )}
              />
            </StarterCode>

            {/* Reference Solution */}
            <RefernceSolution errors={errors} language={language}>
              <Controller
                name={`referencesolutions.${language}`}
                control={control}
                render={({ field }) => (
                  <MonacoEditor
                    language={language}
                    readOnly={false}
                    lineNumbers="on"
                    onChange={field.onChange}
                    value={field.value}
                  />
                )}
              />
            </RefernceSolution>
          </div>
        </SampleCardLayout>
      ))}
    </div>
  );
};

export default CodeSetup;
