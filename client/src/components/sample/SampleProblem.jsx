import React, { useState } from "react";
import {
  ClipboardCheck,
  Code2,
  Lightbulb,
  BookOpen,
  CheckCircle2,
  Loader2,
} from "lucide-react";
// import { sampleDPProblem, sampleStringProblem } from "./sampleData.js";
import Card from "../cards/Card.jsx";
import { useSampleData } from "../../hooks/SampleData.js";
import StarterCode from "./StarterCode.jsx";
import RefernceSolution from "./RefernceSolution.jsx";
import Examples from "./Examples.jsx";
import SampleCardLayout from "../cards/SampleCardLayout.jsx";
import MonacoEditor from "../Monaco/MonacoEditor.jsx";
const SampleProblem = () => {
  const [sampleType, setSampleType] = useState("DP");
  const { isLoading, sampleData } = useSampleData({ sampleType });
  if (isLoading) {
    return <Loader2 />;
  }
  return (
    <div className="flex flex-col md:flex-col justify-between items-start md:items-center  ">
      <div className="w-full flex justify-between pb-4 border-b mb-6 md:mb-8">
        <h2 className="card-title text-xl md:text-base flex items-center gap-3">
          <ClipboardCheck className="w-6 h-6 xl:w-6 xl:h-6 text-primary" />
          Sample Problem
        </h2>
        <div className="join">
          <button
            className={`btn xl:btn-sm join-item ${
              sampleType === "DP" ? "btn-primary" : ""
            }`}
            onClick={() => setSampleType("DP")}
          >
            DP Problem
          </button>
          <button
            className={`btn xl:btn-sm join-item ${
              sampleType === "STRING" ? "btn-primary" : ""
            }`}
            onClick={() => setSampleType("STRING")}
          >
            String Problem
          </button>
        </div>
      </div>
      <div className="space-y-8">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className=" md:col-span-2">
            <label className="label mb-1">
              <span className="label-text text-base-content md:text-lg xl:text-base font-semibold">
                Title
              </span>
            </label>
            <Card>
              <p className="text-wrap">{sampleData?.title}</p>
            </Card>
          </div>

          <div className=" md:col-span-2">
            <label className="label mb-1">
              <span className="label-text text-base-content md:text-lg xl:text-base font-semibold">
                Description
              </span>
            </label>
            <Card className="min-h-32">
              <p className="text-wrap">{sampleData?.description}</p>
            </Card>
          </div>

          <label className="label">
            <span className="label-text text-base-content md:text-lg xl:text-base font-semibold">
              Difficulty
            </span>
          </label>
          <Card>
            <p className="text-wrap">{sampleData?.difficulty}</p>
          </Card>
        </div>

        {/* Tags */}
        <SampleCardLayout icon={<BookOpen className="w-5 h-5" />} title="Tags">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            {sampleData?.tags?.map((tag, index) => (
              <div className="badge badge-md  badge-primary" key={index}>
                {tag}
              </div>
            ))}
          </div>
        </SampleCardLayout>

        {/* Test Cases */}
        <SampleCardLayout
          icon={<CheckCircle2 className="w-5 h-5" />}
          title="Test Cases"
        >
          <div className="space-y-6">
            {sampleData?.testcases?.map((field, index) => (
              <div key={index} className="card bg-base-100 shadow-md">
                <div className="card-body p-4 md:p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-base md:text-lg xl:text-base font-semibold">
                      Test Case #{index + 1}
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="form-control">
                      <label className="label mb-1">
                        <span className="label-text font-medium text-base-content">
                          Input
                        </span>
                      </label>
                      <Card>
                        <p>{field.input}</p>
                      </Card>
                    </div>
                    <div className="form-control">
                      <label className="label mb-1">
                        <span className="label-text font-medium text-base-content">
                          Expected Output
                        </span>
                      </label>
                      <Card>
                        <p>{field.output}</p>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SampleCardLayout>

        {/* Code Editor Sections */}

        <div className="space-y-8">
          {["JAVASCRIPT", "PYTHON", "JAVA"].map((language) => (
            <SampleCardLayout
              icon={<Code2 className="w-5 h-5" />}
              title={language}
              key={language}
            >
              <div className="space-y-6">
                {/* Starter Code */}
                <StarterCode language={language} sampleData={sampleData}>
                  <MonacoEditor
                    language={language}
                    readOnly={true}
                    value={sampleData?.codesnippets?.[language]}
                  />
                </StarterCode>

                {/* Reference Solution */}
                <RefernceSolution language={language} sampleData={sampleData}>
                  <MonacoEditor
                    language={language}
                    readOnly={true}
                    value={sampleData?.referencesolutions?.[language]}
                  />
                </RefernceSolution>

                {/* Examples */}
                <Examples sampleData={sampleData} language={language} />
              </div>
            </SampleCardLayout>
          ))}
        </div>

        {/* Additional Information */}
        <div className="card bg-base-200 p-4 md:p-6 shadow-md">
          <h3 className="text-lg md:text-xl xl:text-base font-semibold mb-6 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-warning" />
            Additional Information
          </h3>
          <div className="card bg-base-100 shadow-md">
            <div className="space-y-6 p-5">
              <div className="form-control">
                <label className="label mb-1">
                  <span className="label-text font-medium text-base-content">
                    Constraints
                  </span>
                </label>
                <Card>{sampleData?.constraints}</Card>
              </div>
              <div className="form-control">
                <label className="label mb-1">
                  <span className="label-text font-medium text-base-content">
                    Hints (Optional)
                  </span>
                </label>
                <Card>{sampleData?.hints}</Card>
              </div>
              <div className="form-control">
                <label className="label mb-1">
                  <span className="label-text font-medium text-base-content">
                    Editorial (Optional)
                  </span>
                </label>
                <Card>{sampleData?.editorial}</Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleProblem;
