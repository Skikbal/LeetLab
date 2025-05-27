import React, { useEffect, useState } from "react";
import { ProblemSchema } from "../../validators/ValidationSchema.js";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Cards from "../cards/Cards.jsx";
import {
  SquarePen,
  Plus,
  Trash2,
  Code2,
  Lightbulb,
  BookOpen,
  CheckCircle2,
  Building2,
  Loader2,
  ChevronsLeftRight,
} from "lucide-react";
import SampleCardLayout from "../cards/SampleCardLayout.jsx";
import StarterCode from "../sample/StarterCode.jsx";
import MonacoEditor from "../Monaco/MonacoEditor.jsx";
import RefernceSolution from "../sample/RefernceSolution.jsx";
import ProblemExample from "./ProblemExample.jsx";
import Label from "../form/Label.jsx";
import Input from "../form/Input.jsx";
import ErrorSpan from "../form/ErrorSpan.jsx";
import TextArea from "../form/TextArea.jsx";
import { useProblemStore } from "../../store/useProblemStore.js";
import { useNavigate, useParams } from "react-router-dom";

const EditProblemComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ProblemSchema),
    defaultValues: {
      testcases: [{ input: "", output: "" }],
      tags: [],
      companyTags: [],
      constraints: [],
      examples: {
        JAVASCRIPT: { input: "", output: "", explanation: "" },
        PYTHON: { input: "", output: "", explanation: "" },
        JAVA: { input: "", output: "", explanation: "" },
      },
      codesnippets: {
        JAVASCRIPT: "function solution() {\n  // Write your code here\n}",
        PYTHON: "def solution():\n    # Write your code here\n    pass",
        JAVA: "public class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      },
      referencesolutions: {
        JAVASCRIPT: "// Add your reference solution here",
        PYTHON: "# Add your reference solution here",
        JAVA: "// Add your reference solution here",
      },
    },
  });
  const { getProblemById, isLoading, problem,updateProblem } = useProblemStore();
  const fetchSamleData = async () => {
    try {
      await getProblemById(id);
    } catch (error) {
      console.log("Error getting problem: ", error);
    }
  };
  useEffect(() => {
    fetchSamleData();
  }, [id, getProblemById]);

 
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

  //tags
  const {
    fields: tagFields,
    append: appendTag,
    remove: removeTag,
    replace: replaceTag,
  } = useFieldArray({
    control,
    name: "tags",
  });
  //company tags
  const {
    fields: companyTagFields,
    append: appendCompanyTag,
    remove: removeCompanyTag,
    replace: replaceCompanyTag,
  } = useFieldArray({
    control,
    name: "companyTags",
  });

  useEffect(() => {
    if (problem) {
      reset(problem);

      replaceTag(problem.tags?.map((tag) => tag.name) || []);
      replacetestcases(problem.testcases || []);
      replaceCompanyTag(problem.companies?.map((ct) => ct.name) || []);
      replaceConstraint(problem.constraints || []);
    }
  }, [
    problem,
    reset,
    replaceTag,
    replacetestcases,
    replaceCompanyTag,
    replaceConstraint,
  ]);


  const onSubmit = async (data) => {
    try {
      await updateProblem({data,id,navigate});
    } catch (error) {
      console.log("Error creating problem: ", error);
    }
  };

  if (isLoading) return <div>Loading....</div>;
  return (
    <div className="flex flex-wrap justify-center">
      <Cards className="w-full sm:w-full md:w-full lg:w-4/5">
        <div className="flex flex-col gap-3 sm:flex-row justify-center md:justify-between  items-center md:items-center mb-6 md:mb-8 pb-4 border-b">
          <h2 className="card-title text-2xl md:text-base flex items-center gap-3">
            <SquarePen className="w-6 h-6 xl:w-6 xl:h-6 text-primary" />
            Create Problem
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8"
        >
          {/* Basic Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="form-control sm:col-span-2">
              <Label children={"Title"} name={"title"} />
              <Input
                register={register}
                name={"title"}
                placeholder={"Enter problem title"}
                type={"text"}
              />
              {errors.title && <ErrorSpan error={errors.title.message} />}
            </div>

            <div className="form-control sm:col-span-2">
              <Label children={"Description"} name={"description"} />
              <TextArea
                register={register}
                name={"description"}
                placeholder={"Enter problem description"}
                className={"min-h-32 bg-base-200"}
              />
              {errors.description && (
                <ErrorSpan error={errors.description.message} />
              )}
            </div>

            <div className="form-control flex flex-col sm:flex-row sm:justify-between  sm:col-span-2 flex-wrap">
              <Label children={"Difficulty"} name={"difficulty"} />
              <select
                id="difficulty"
                className="w-full sm:w-[40%]  select select-ghost border border-accent text-base rounded bg-base-200 mb-2"
                {...register("difficulty")}
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

          {/* Tags */}
          <SampleCardLayout
            title={"Tags"}
            icon={<BookOpen className="w-5 h-5" />}
            button={true}
            onClick={() => appendTag("")}
            buttonTitle={
              <>
                <Plus className="w-4 h-4" /> Add Tags
              </>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {tagFields?.map((field, index) => (
                <div key={field.id} className="flex gap-2 items-center">
                  <Input
                    register={register}
                    name={`tags.${index}`}
                    placeholder={"Enter tag"}
                    type={"text"}
                  />
                  <button
                    type="button"
                    className="btn btn-ghost btn-square btn-sm"
                    onClick={() => removeTag(index)}
                    disabled={tagFields.length === 1}
                  >
                    <Trash2 className="w-4 h-4 text-error" />
                  </button>
                </div>
              ))}
            </div>
            {errors.tags && <ErrorSpan error={errors.tags.message} />}
          </SampleCardLayout>
          {/* tag compnies */}
          <SampleCardLayout
            title={"Company Tags"}
            icon={<Building2 className="w-5 h-5" />}
            button={true}
            onClick={() => appendCompanyTag("")}
            buttonTitle={
              <>
                <Plus className="w-4 h-4" /> Add Company
              </>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {companyTagFields?.map((field, index) => (
                <div key={field.id} className="flex gap-2 items-center">
                  <Input
                    register={register}
                    name={`companyTags.${index}`}
                    placeholder={"Enter Companies"}
                    type={"text"}
                  />
                  <button
                    type="button"
                    className="btn btn-ghost btn-square btn-sm"
                    onClick={() => removeCompanyTag(index)}
                    disabled={companyTagFields.length === 1}
                  >
                    <Trash2 className="w-4 h-4 text-error" />
                  </button>
                </div>
              ))}
            </div>
            {errors.companyTags && (
              <ErrorSpan error={errors.companyTags.message} />
            )}
          </SampleCardLayout>

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
                <div key={field.id} className="card bg-base-100 shadow-md">
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

          {/* Code Editor Sections */}
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

                  {/* Examples */}
                  <ProblemExample
                    register={register}
                    language={language}
                    errors={errors}
                  />
                </div>
              </SampleCardLayout>
            ))}
          </div>

          {/* Additional Information */}
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

          <div className="card-actions justify-center md:justify-end pt-4">
            <button
              type="submit"
              className="btn btn-primary w-full md:w-auto mt-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Update Problem
                </>
              )}
            </button>
          </div>
        </form>
      </Cards>
    </div>
  );
};
export default EditProblemComponent;
