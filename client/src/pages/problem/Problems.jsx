import React, { useEffect } from "react";
import { useProblemStore } from "../../store/useProblemStore";
import {
  BookmarkCheck,
  Funnel,
  ListFilter,
  Pencil,
  Tags,
  Trash,
} from "lucide-react";
const Problems = () => {
  const { isLoading, getAllProblems, problems } = useProblemStore();
  useEffect(() => {
    const fecthProblems = async () => {
      try {
        await getAllProblems();
      } catch (error) {
        console.log("Error getting all problems: ", error);
      }
    };
    fecthProblems();
  }, []);
  if (isLoading && problems.length === 0) return <div>Loading...</div>;
  return (
    <div className="bg-base-200">
      <div className="bg-base-300 mt-2 rounded-md h-15 z-10 border border-accent flex items-center p-2">
        <label className="input focus:outline-none focus-within:outline-none shadow-none focus:border focus:border-accent">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search by Title" />
        </label>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1 ">
            <Funnel className="h-5 w-5" />
            Advance Filter
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm z-10"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1 ">
            <Tags className="h-5 w-5" /> Tags
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm z-10"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1 ">
            <ListFilter className="h-5 w-5" />
            Difficulty
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm z-10"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full overflow-x-auto mt-2  h-110 rounded-md no-scrollbar">
        <table className=" w-[1000px] lg:w-full table bg-base-200">
          {/* head */}
          <thead className="text-base-content text-base sticky top-0 z-10 bg-base-100 w-full">
            <tr>
              <th className="tetx-base-content">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Title</th>
              <th>Tags</th>
              <th>Difficulty</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="bg-base-300">
            {problems.map((problem, index) => {
              return (
                <tr key={index} className="hover:bg-base-200 overflow-hidden">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>

                  <td>
                    <p className="text-base text-base-content font-medium">
                      {problem.title}
                    </p>
                  </td>
                  <td>
                    <div className=" badge badge-soft badge-warning">
                      {problem.tags}
                    </div>
                  </td>
                  <td>
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
                  <td>{"solved"}</td>
                  <td>
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
