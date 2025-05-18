import React, { useState } from "react";
import Cards from "../cards/Cards.jsx";
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
import Editor from "@monaco-editor/react";
import { useSampleData } from "../../hooks/SampleData.js";
const SampleProblem = () => {
  const [sampleType, setSampleType] = useState("DP");
  const { isLoading, sampleData } = useSampleData({ sampleType });
  if (isLoading) {
    return <Loader2 />;
  }
  return (
    <Cards>
      <div className="flex flex-col md:flex-col justify-between items-start md:items-center  ">
        <div className="w-full flex justify-between pb-4 border-b mb-6 md:mb-8">
          <h2 className="card-title text-2xl md:text-xl flex items-center gap-3">
            <ClipboardCheck className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            Sample Problem
          </h2>
          <div className="join">
            <button
              className={`btn join-item ${
                sampleType === "DP" ? "btn-primary" : ""
              }`}
              onClick={() => setSampleType("DP")}
            >
              DP Problem
            </button>
            <button
              className={`btn join-item ${
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
                <span className="label-text text-base-content md:text-lg font-semibold">
                  Title
                </span>
              </label>
              <Card>
                <p>{sampleData?.title}</p>
              </Card>
            </div>

            <div className=" md:col-span-2">
              <label className="label mb-1">
                <span className="label-text text-base-content md:text-lg font-semibold">
                  Description
                </span>
              </label>
              <Card className="min-h-32">
                <p>{sampleData?.description}</p>
              </Card>
            </div>

            <label className="label">
              <span className="label-text text-base-content md:text-lg font-semibold">
                Difficulty
              </span>
            </label>
            <Card>
              <p>{sampleData?.difficulty}</p>
            </Card>
          </div>

          {/* Tags */}
          <div className="card bg-base-200 p-4 md:p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Tags
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
              {sampleData?.tags?.map((tag, index) => (
                <div className="badge badge-md badge-primary" key={index}>
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Test Cases */}
          <div className="card bg-base-200 p-4 md:p-6 shadow-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Test Cases
              </h3>
            </div>
            <div className="space-y-6">
              {sampleData?.testcases?.map((field, index) => (
                <div key={index} className="card bg-base-100 shadow-md">
                  <div className="card-body p-4 md:p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-base md:text-lg font-semibold">
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
          </div>

          {/* Code Editor Sections */}
          <div className="space-y-8">
            {["JAVASCRIPT", "PYTHON", "JAVA"].map((language) => (
              <div
                key={language}
                className="card bg-base-200 p-4 md:p-6 shadow-md"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-6 flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  {language}
                </h3>

                <div className="space-y-6">
                  {/* Starter Code */}
                  <div className="card bg-base-100 shadow-md">
                    <div className="card-body p-4 md:p-6">
                      <h4 className="font-semibold text-base md:text-lg mb-4">
                        Starter Code Template
                      </h4>
                      <div className="border rounded-md overflow-hidden">
                        <Editor
                          height="300px"
                          language={language.toLowerCase()}
                          theme="vs-dark"
                          value={sampleData?.codesnippets?.[language]}
                          options={{
                            readOnly: true,
                            minimap: { enabled: false },
                            fontSize: 12,
                            lineNumbers: "on",
                            roundedSelection: false,
                            scrollBeyondLastLine: false,
                            automaticLayout: true,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Reference Solution */}
                  <div className="card bg-base-100 shadow-md">
                    <div className="card-body p-4 md:p-6">
                      <h4 className="font-semibold text-base md:text-lg mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-success" />
                        Reference Solution
                      </h4>
                      <div className="border rounded-md overflow-hidden">
                        <Editor
                          height="300px"
                          language={language.toLowerCase()}
                          theme="vs-dark"
                          value={sampleData?.referenceSolutions?.[language]}
                          options={{
                            readOnly: true,
                            minimap: { enabled: false },
                            fontSize: 12,
                            lineNumbers: "on",
                            roundedSelection: false,
                            scrollBeyondLastLine: false,
                            automaticLayout: true,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Examples */}
                  <div className="card bg-base-100 shadow-md">
                    <div className="card-body p-4 md:p-6">
                      <h4 className="font-semibold text-base md:text-lg mb-4">
                        Example
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="form-control">
                          <label className="label mb-1">
                            <span className="label-text font-medium text-base-content">
                              Input
                            </span>
                          </label>
                          <Card>
                            {sampleData?.examples?.[language]?.input && (
                              <p>{sampleData?.examples?.[language]?.input}</p>
                            )}
                          </Card>
                        </div>
                        <div className="form-control">
                          <label className="label mb-1">
                            <span className="label-text font-medium text-base-content">
                              Output
                            </span>
                          </label>
                          <Card>
                            {sampleData?.examples?.[language]?.output && (
                              <p>{sampleData?.examples?.[language]?.output}</p>
                            )}
                          </Card>
                        </div>
                        <div className="form-control md:col-span-2">
                          <label className="label mb-1">
                            <span className="label-text font-medium text-base-content">
                              Explanation
                            </span>
                          </label>
                          <Card>
                            {sampleData?.examples?.[language]?.explanation && (
                              <p>
                                {sampleData?.examples?.[language].explanation}
                              </p>
                            )}
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="card bg-base-200 p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-semibold mb-6 flex items-center gap-2">
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
    </Cards>
  );
};

export default SampleProblem;
