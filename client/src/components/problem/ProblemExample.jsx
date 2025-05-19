import React from "react";

const ProblemExample = ({ register, language, errors }) => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body p-4 md:p-6">
        <h4 className="font-semibold text-base mb-4">Example</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="form-control">
            <label className="label mb-1">
              <span className="label-text font-medium text-base-content">Input</span>
            </label>
            <textarea
              className="border border-accent bg-base-300 rounded min-h-20 w-full p-3 resize-y"
              {...register(`examples.${language}.input`)}
              placeholder="Example input"
            />
            {errors.examples?.[language]?.input && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.examples[language].input.message}
                </span>
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label mb-1">
              <span className="label-text font-medium text-base-content">Output</span>
            </label>
            <textarea
              className="border border-accent rounded bg-base-300 min-h-20 w-full p-3 resize-y"
              {...register(`examples.${language}.output`)}
              placeholder="Example output"
            />
            {errors.examples?.[language]?.output && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.examples[language].output.message}
                </span>
              </label>
            )}
          </div>
          <div className="form-control md:col-span-2">
            <label className="label mb-1">
              <span className="label-text font-medium text-base-content">Explanation</span>
            </label>
            <textarea
              className="border border-accent rounded bg-base-300 min-h-24 w-full p-3 resize-y"
              {...register(`examples.${language}.explanation`)}
              placeholder="Explain the example"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemExample;
