import React from "react";
import Label from "../form/Label.jsx";
import Input from "../form/Input.jsx";
import TextArea from "../form/TextArea.jsx";
import ErrorSpan from "../form/ErrorSpan.jsx";
import { useFormContext } from "react-hook-form";

const Info = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Title Field */}
      <div className="form-control sm:col-span-2">
        <Label children={"Title"} name={"title"} />
        <Input
          register={register}
          name="title"
          placeholder="Enter problem title"
          type="text"
        />
        {errors?.title && <ErrorSpan error={errors.title.message} />}
      </div>
      {/* Description Field */}
      <div className="form-control sm:col-span-2">
        <Label children={"Description"} name={"description"} />
        <TextArea
          register={register}
          name="description"
          placeholder="Enter problem description"
          className="min-h-32 bg-base-200"
        />
        {errors?.description && (
          <ErrorSpan error={errors.description.message} />
        )}
      </div>

      {/* Difficulty Field */}
      <div className="form-control flex flex-col sm:flex-row sm:justify-between sm:col-span-2 flex-wrap">
        <Label children={"Difficulty"} name={"difficulty"} />
        <select
          {...register("difficulty")}
          id="difficulty"
          className="w-full sm:w-[40%] select select-ghost border border-accent text-base rounded bg-base-200 mb-2"
        >
          <option value="">Select a value</option>
          <option value="EASY">Easy</option>
          <option value="MEDIUM">Medium</option>
          <option value="HARD">Hard</option>
        </select>
        {errors?.difficulty && (
          <ErrorSpan error={errors?.difficulty?.message} />
        )}
      </div>
    </div>
  );
};

export default Info;
