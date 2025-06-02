import React, { useEffect } from "react";
import SampleCardLayout from "../cards/SampleCardLayout.jsx";
import { useFormContext, useFieldArray,useWatch } from "react-hook-form";
import { ChevronsLeftRight,Lightbulb,Plus,Trash2 } from "lucide-react";
import Label from "../form/Label.jsx";
import TextArea from "../form/TextArea.jsx";
import Input from "../form/Input.jsx";
import ErrorSpan from "../form/ErrorSpan";
const AdditionalDetail = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const watchConstraints = useWatch({
    control,
    name: "constraints",
  });
  //contraints
  const {
    fields: constraintFields,
    append: appendConstraint,
    remove: removeConstraint,
    replace: replaceConstraint,
  } = useFieldArray({
    control,
    name: "constraints",
  });

  useEffect(() => {
    replaceConstraint(watchConstraints.map((c) => c));
  }, []);
  return (
    <div className="card bg-base-200 p-4 md:p-6 shadow-md">
      <h3 className="text-base font-semibold mb-6 flex items-center gap-2">
        <Lightbulb className="w-5 h-5 text-warning" />
        Additional Information
      </h3>
      <div className="space-y-6">
        <SampleCardLayout
          title={"Constraints"}
          icon={<ChevronsLeftRight className="w-5 h-5" />}
          button={true}
          onClick={() => appendConstraint("")}
          className={"bg-base-100"}
          buttonTitle={
            <>
              <Plus className="w-4 h-4" /> Add Constraints
            </>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {constraintFields?.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-center">
                <Input
                  register={register}
                  name={`constraints.${index}`}
                  placeholder={"Enter Constraint"}
                  type={"text"}
                />
                <button
                  type="button"
                  className="btn btn-ghost btn-square btn-sm"
                  onClick={() => removeConstraint(index)}
                  disabled={constraintFields.length === 1}
                >
                  <Trash2 className="w-4 h-4 text-error" />
                </button>
              </div>
            ))}
          </div>
          {errors.constraints && (
            <ErrorSpan error={errors.constraints.message} />
          )}
        </SampleCardLayout>

        <div className="form-control">
          <Label children={"Hints (Optional)"} name={"hints"} />
          <TextArea
            className="bg-base-100 min-h-24 w-full p-3"
            register={register}
            name={"hints"}
            placeholder="Enter hints for solving the problem"
          />
        </div>
        <div className="form-control">
          <Label children={"Editorial (Optional)"} name={"editorial"} />
          <TextArea
            className="bg-base-100 min-h-24 w-full p-3"
            register={register}
            name={"editorial"}
            placeholder="Enter hints for solving the problem"
          />
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetail;
