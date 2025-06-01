import React from "react";
import SampleCardLayout from "../cards/SampleCardLayout.jsx";
import { useFieldArray,useFormContext} from "react-hook-form";
import ErrorSpan from "../form/ErrorSpan.jsx";
import Input from "../form/Input.jsx";
import { BookOpen,Building2,Plus,Trash2 } from "lucide-react";

const Tags = () => {
  const {
    register,
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

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
  return (
    <div className="space-y-8">
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
        {errors.companyTags && <ErrorSpan error={errors.companyTags.message} />}
      </SampleCardLayout>
    </div>
  );
};

export default Tags;
