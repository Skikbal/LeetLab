import React, { useEffect, useState } from "react";
import { useProblemStore } from "../../store/useProblemStore";
import {
  BookmarkCheck,
  Funnel,
  ListFilter,
  Pencil,
  Tags,
  Trash,
} from "lucide-react";
import Dropdown from "../../components/Dropdown/Dropdown";
import SearchBar from "../../components/form/SearchBar";
import { useDebounce } from "../../hooks/useDebounceHook";
const Problems = () => {
  const { isLoading, getAllProblems, problems } = useProblemStore();
  const [searchQuery, setSearchQuery] = useState('');
  const debounceQuery = useDebounce(searchQuery, 1000);


  useEffect(() => {
    const fecthProblems = async () => {
      try {
        await getAllProblems({search:debounceQuery});
      } catch (error) {
        console.log("Error getting all problems: ", error);
      }
    };
    fecthProblems();
  }, [debounceQuery, getAllProblems]);
  if (isLoading && problems.length === 0) return <div>Loading...</div>;
  return (
    <div className="bg-base-200">
      <div className="bg-base-300 flex-wrap w-full mt-2 rounded-md  z-10 border border-accent flex items-center p-2 justify-between sm:flex-nowrap">
        <SearchBar
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <div className="flex w-full justify-between items-center sm:justify-end sm:gap-2">
          <Dropdown
            list={[
              {
                name: "Tags",
                onClick: () => {
                  "";
                },
              },
              {
                name: "Difficulty",
                onClick: () => {
                  "";
                },
              },
            ]}
            name={"Status"}
            icon={<Funnel className="h-5 w-5" />}
          />
          <Dropdown
            list={[
              {
                name: "Tags",
                onClick: () => {
                  "";
                },
              },
              {
                name: "Difficulty",
                onClick: () => {
                  "";
                },
              },
            ]}
            name={"Status"}
            icon={<Tags className="h-5 w-5" />}
          />
          <Dropdown
            list={[
              {
                name: "Tags",
                onClick: () => {
                  "";
                },
              },
              {
                name: "Difficulty",
                onClick: () => {
                  "";
                },
              },
            ]}
            name={"Status"}
            icon={<ListFilter className="h-5 w-5" />}
          />
        </div>
      </div>
      <div className="w-full overflow-x-auto mt-2  h-110 rounded-md no-scrollbar">
        <table className=" w-[1000px] lg:w-full table bg-base-200">
          {/* head */}
          <thead className="text-base-content text-base sticky top-0 z-10 bg-base-100 w-full">
            <tr>
              <th className="tetx-base-content w-1/16">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="w-2/10">Title</th>
              <th className="w-2/10">Tags</th>
              <th className="w-1/10">Difficulty</th>
              <th className="w-1/10">Status</th>
              <th className="w-2/10">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-base-300">
            {problems.map((problem, index) => {
              return (
                <tr key={index} className="hover:bg-base-200 overflow-hidden">
                  <th className="w-1/16">
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>

                  <td className="w-2/10">
                    <p className="text-base text-base-content font-medium">
                      {problem.title}
                    </p>
                  </td>
                  <td className="w-2/10">
                    <div className=" badge badge-soft badge-warning">
                      {problem.tags}
                    </div>
                  </td>
                  <td className="w-1/10">
                    <div
                      className={`${
                        problem.difficulty === "HARD"
                          ? "bg-red-500"
                          : problem.difficulty === "EASY"
                          ? "bg-primary"
                          : "bg-secondary"
                      } badge badge-md text-base-content font-medium`}
                    >
                      {problem.difficulty}
                    </div>
                  </td>
                  <td className="w-1/10">{"solved"}</td>
                  <td className="w-2/10">
                    <div className="flex gap-2">
                      <button className="btn p-2 bg-red-500">
                        <Trash className="h-4 w-4" />
                      </button>
                      <button className="btn p-2 bg-secondary">
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button className="btn p-2 bg-primary border-accent ">
                        <BookmarkCheck className="h-4 w-4" />{" "}
                        <span className="text-xs">Save to Playlist</span>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          {/* foot */}
          {/* <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </div>
  );
};

export default Problems;
