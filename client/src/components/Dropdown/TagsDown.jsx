import React from "react";
import { Tags } from "lucide-react";
const TagsDown = ({tags,selectedTags,setSelectedTags}) => {
  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        <Tags className="h-5 w-5" /> Tags
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-80 p-2 shadow-sm"
      >
        <div className="h-30 flex gap-1 overflow-y-auto scrollbar-none">
          {tags.map((tag) => {
            return (
              <div
                key={tag.id}
                className={`badge font-semibold cursor-pointer ${
                  selectedTags.includes(tag.name)
                    ? "badge-primary"
                    : "badge-warning badge-soft"
                }`}
                onClick={() =>
                  selectedTags.includes(tag.name)
                    ? setSelectedTags(
                        selectedTags.filter((t) => t !== tag.name)
                      )
                    : setSelectedTags([...selectedTags, tag.name])
                }
              >
                {tag.name}
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default TagsDown;
