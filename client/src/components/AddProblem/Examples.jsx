import React from "react";
import SampleCardLayout from "../cards/SampleCardLayout.jsx";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Code2,Plus,Trash2 } from "lucide-react";
import TextArea from "../form/TextArea.jsx";
import Label from "../form/Label.jsx";
import ErrorSpan from "../form/ErrorSpan.jsx";
const Examples = () => {
  const {
    control,
    register,
    formState: { errors },
    trigger,
  } = useFormContext();
  console.log(errors)
  //testcases
  const {
    fields: exampleFields,
    append: appendExample,
    remove: removeExample,
    replace: replaceExample,
  } = useFieldArray({
    control,
    name: "examples",
  });

  return (
    <div className="space-y-8">
      <SampleCardLayout
        icon={<Code2 className="w-5 h-5" />}
        title={"Examples"}
        button={true}
        onClick={() =>
          appendExample({ input: "", output: "", explanation: "" })
        }
        buttonTitle={
          <>
            <Plus className="w-4 h-4 mr-1" /> Add Examples
          </>
        }
      >
        <div className="space-y-6">
          {exampleFields.map((field, index) => (
            <div
              key={field.id}
              className="card bg-base-100/80 backdrop-blur-sm shadow-md"
            >
              <div className="card-body p-4 md:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-base font-semibold">
                    Example #{index + 1}
                  </h4>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm text-error"
                      onClick={() => removeExample(index)}
                      disabled={exampleFields.length === 1}
                    >
                      <Trash2 className="w-4 h-4 mr-1" /> Remove
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="form-control">
                    <Label children="Input" name={`examples.${index}.input`} />
                    <TextArea
                      register={register}
                      name={`examples.${index}.input`}
                      placeholder={"Example input"}
                      className={"min-h-20 bg-base-200"}
                    />
                    {errors.examples?.[index]?.input && (
                      <ErrorSpan
                        error={errors.examples?.[index]?.input?.message}
                      />
                    )}
                  </div>
                  <div className="form-control">
                    <Label
                      children="Output"
                      name={`examples.${index}.output`}
                    />

                    <TextArea
                      register={register}
                      name={`examples.${index}.output`}
                      placeholder={"Example output"}
                      className={"min-h-20 bg-base-200"}
                    />
                    {errors.examples?.[index]?.output && (
                      <ErrorSpan
                        error={errors.examples?.[index]?.output?.message}
                      />
                    )}
                  </div>
                  <div className="form-control md:col-span-2">
                    <Label
                      children="Explanation"
                      name={`examples.${index}.explanation`}
                    />
                    <TextArea
                      register={register}
                      name={`examples.${index}.explanation`}
                      placeholder={"Explain the example"}
                      className={"min-h-24 bg-base-200"}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {errors?.examples && !Array.isArray(errors.examples) && (
          <div className="mt-2">
            <span className="text-red-500 text-sm">
              {errors.examples.message}
            </span>
          </div>
        )}
      </SampleCardLayout>
    </div>
  );
};

export default Examples;
