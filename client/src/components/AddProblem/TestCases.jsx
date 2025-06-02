import React, { useEffect } from "react";
import SampleCardLayout from "../cards/SampleCardLayout.jsx";
import ErrorSpan from "../form/ErrorSpan.jsx";
import Label from "../form/Label.jsx";
import { useFormContext, useFieldArray, useWatch } from "react-hook-form";
import { CheckCircle2, Trash2, Plus } from "lucide-react";
import TextArea from "../form/TextArea.jsx";
const TestCases = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const watchTestCases = useWatch({
    control,
    name: "testcases",
  });

  //testcases
  const {
    fields: testCaseFields,
    append: appendTestCase,
    remove: removeTestCase,
    replace: replacetestcases,
  } = useFieldArray({
    control,
    name: "testcases",
  });

  useEffect(() => {
    replacetestcases(watchTestCases.map((tc) => tc));
  }, []);
  return (
    <div>
      {/* Test Cases */}
      <SampleCardLayout
        icon={<CheckCircle2 className="w-5 h-5" />}
        title={"Test Cases"}
        button={true}
        onClick={() => appendTestCase({ input: "", output: "" })}
        buttonTitle={
          <>
            <Plus className="w-4 h-4 mr-1" /> Add Test Case
          </>
        }
      >
        <div className="space-y-6">
          {testCaseFields.map((field, index) => (
            <div
              key={field.id}
              className="card bg-base-100/80 backdrop-blur-sm shadow-md"
            >
              <div className="card-body p-4 md:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-base font-semibold">
                    Test Case #{index + 1}
                  </h4>
                  <div className="flex items-center">
                    <label className="flex cursor-pointer gap-2 items-center">
                      <span className="label-text font-semibold text-xs">
                        Private
                      </span>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle toggle-xs"
                        name={`testcases.${index}.isPublic`}
                        {...register(`testcases.${index}.isPublic`)}
                      />
                      <span className="label-text font-semibold text-xs">
                        Public
                      </span>
                    </label>
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm text-error"
                      onClick={() => removeTestCase(index)}
                      disabled={testCaseFields.length === 1}
                    >
                      <Trash2 className="w-4 h-4 mr-1" /> Remove
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="form-control">
                    <Label
                      children={"Input"}
                      name={`testcases.${index}.input`}
                    />
                    <TextArea
                      register={register}
                      name={`testcases.${index}.input`}
                      placeholder={"Enter test case input"}
                      className={"min-h-24 bg-base-200"}
                    />

                    {errors.testcases?.[index]?.input && (
                      <ErrorSpan
                        error={errors.testcases[index].input.message}
                      />
                    )}
                  </div>
                  <div className="form-control">
                    <Label
                      children={" Expected Output"}
                      name={`testcases.${index}.output`}
                    />
                    <TextArea
                      register={register}
                      name={`testcases.${index}.output`}
                      placeholder={"Enter expected output"}
                      className={"min-h-24 bg-base-200"}
                    />
                    {errors.testcases?.[index]?.output && (
                      <ErrorSpan
                        error={errors.testcases?.[index]?.output.message}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {errors.testcases && !Array.isArray(errors.testcases) && (
          <div className="mt-2">
            <span className="text-red-500 text-sm">
              {errors.testcases.message}
            </span>
          </div>
        )}
      </SampleCardLayout>
    </div>
  );
};

export default TestCases;
