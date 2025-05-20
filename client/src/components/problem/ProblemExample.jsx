import React from "react";
import Label from "../form/Label";
import ErrorSpan from "../form/ErrorSpan";
import TextArea from "../form/TextArea";

const ProblemExample = ({ register, language, errors }) => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body p-4 md:p-6">
        <h4 className="font-semibold text-base mb-4">Example</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="form-control">
            <Label children="Input" />
            <TextArea
              register={register}
              name={`examples.${language}.input`}
              placeholder={"Example input"}
              className={"min-h-20"}
            />
            {errors.examples?.[language]?.input && (
              <ErrorSpan error={errors.examples?.[language]?.input?.message} />
            )}
          </div>
          <div className="form-control">
            <Label children="Output" />

            <TextArea
              register={register}
              name={`examples.${language}.output`}
              placeholder={"Example output"}
              className={"min-h-20"}
            />
            {errors.examples?.[language]?.output && (
              <ErrorSpan error={errors.examples?.[language]?.output?.message} />
            )}
          </div>
          <div className="form-control md:col-span-2">
            <Label children="Explanation" />
            <TextArea
              register={register}
              name={`examples.${language}.explanation`}
              placeholder={"Explain the example"}
              className={"min-h-24"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemExample;
