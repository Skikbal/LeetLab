import React from "react";
import {
  ClipboardCheck,
  Code2,
  Lightbulb,
  BookOpen,
  CheckCircle2,
  Building2,
  ChevronsLeftRight,
} from "lucide-react";
import Card from "../cards/Card.jsx";
import StarterCode from "../sample/StarterCode.jsx";
import RefernceSolution from "../sample/RefernceSolution.jsx";
import Examples from "./Examples.jsx";
import SampleCardLayout from "../cards/SampleCardLayout.jsx";
import MonacoEditor from "../Monaco/MonacoEditor.jsx";
import { useFormContext } from "react-hook-form";
const Preview = () => {
  const { getValues } = useFormContext();
  const formData = getValues();
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex flex-col lg:flex-row lg:items-center lg:gap-4 justify-between pb-4  mb-6 md:mb-8">
        <h2 className="card-title text-xl md:text-base flex items-center gap-3">
          <ClipboardCheck className="w-6 h-6 xl:w-6 xl:h-6 text-base-content" />
          Review and Submit
        </h2>
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
              <p className="text-wrap w-full">{formData?.title}</p>
            </Card>
          </div>
          <div className=" md:col-span-2">
            <label className="label mb-1">
              <span className="label-text text-base-content md:text-lg xl:text-base font-semibold">
                Topic
              </span>
            </label>
            <Card>
              <p className="text-wrap w-full">{formData?.topic}</p>
            </Card>
          </div>

          <div className=" md:col-span-2">
            <label className="label mb-1">
              <span className="label-text text-base-content md:text-lg xl:text-base font-semibold">
                Description
              </span>
            </label>
            <Card className="min-h-32">
              <p className="text-wrap w-full">{formData?.description}</p>
            </Card>
          </div>

          <label className="label">
            <span className="label-text text-base-content md:text-lg xl:text-base font-semibold">
              Difficulty
            </span>
          </label>
          <Card>
            <p className="text-wrap w-full">{formData?.difficulty}</p>
          </Card>
        </div>

        {/* Tags */}
        <SampleCardLayout icon={<BookOpen className="w-5 h-5" />} title="Tags">
          <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid,cols-3 gap-3">
            {formData?.tags?.map((tag, index) => (
              <div className="badge badge-md  badge-secondary" key={index}>
                {tag}
              </div>
            ))}
          </div>
        </SampleCardLayout>
        {/* Tags */}
        <SampleCardLayout
          icon={<Building2 className="w-5 h-5" />}
          title="Company Tags"
        >
          <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid,cols-3 gap-3">
            {formData?.companyTags?.map((tag, index) => (
              <div className="badge badge-md  badge-secondary" key={index}>
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
            {formData?.testcases?.map((field, index) => (
              <div
                key={index}
                className="card bg-base-100/80 backdrop-blur-sm shadow-md"
              >
                <div className="card-body p-4 md:p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-base md:text-lg xl:text-base font-semibold">
                      Test Case #{index + 1}
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
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
                <StarterCode language={language} formData={formData}>
                  <MonacoEditor
                    language={language}
                    readOnly={true}
                    value={formData?.codesnippets?.[language]}
                  />
                </StarterCode>

                {/* Reference Solution */}
                <RefernceSolution language={language} formData={formData}>
                  <MonacoEditor
                    language={language}
                    readOnly={true}
                    value={formData?.referencesolutions?.[language]}
                  />
                </RefernceSolution>

                {/* Examples */}
              </div>
            </SampleCardLayout>
          ))}
        </div>
        <SampleCardLayout
          icon={<Code2 className="w-5 h-5" />}
          title="Examples"
        >
          <div className="space-y-6">
            {formData?.examples?.map((field, index) => (
              <div
                key={index}
                className="card bg-base-100/80 backdrop-blur-sm shadow-md"
              >
                <div className="card-body p-4 md:p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-base md:text-lg xl:text-base font-semibold">
                      Example #{index + 1}
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 gap-4 lg:gap-6">
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
                    <div className="form-control">
                      <label className="label mb-1">
                        <span className="label-text font-medium text-base-content">
                          Explanation
                        </span>
                      </label>
                      <Card>
                        <p>{field?.explanation}</p>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SampleCardLayout>

        {/* Additional Information */}
        <div className="card bg-base-200 p-4 md:p-6 shadow-md">
          <h3 className="text-lg md:text-xl xl:text-base font-semibold mb-6 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-warning" />
            Additional Information
          </h3>
          <div className="card bg-base-100/80 backdrop-blur-sm shadow-md">
            <div className="space-y-6 p-5">
              <div className="form-control">
                <SampleCardLayout
                  title={"Constraints"}
                  icon={<ChevronsLeftRight className="w-5 h-5" />}
                >
                  <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid,cols-3 gap-3">
                    {formData?.constraints?.map((constraint, index) => (
                      <div
                        className="badge badge-md  badge-secondary"
                        key={index}
                      >
                        {constraint}
                      </div>
                    ))}
                  </div>
                </SampleCardLayout>
              </div>
              <div className="form-control">
                <label className="label mb-1">
                  <span className="label-text font-medium text-base-content">
                    Hints (Optional)
                  </span>
                </label>
                <Card>{formData?.hints}</Card>
              </div>
              <div className="form-control">
                <label className="label mb-1">
                  <span className="label-text font-medium text-base-content">
                    Editorial (Optional)
                  </span>
                </label>
                <Card>{formData?.editorial}</Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
