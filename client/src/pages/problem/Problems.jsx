import React, { useEffect, useState } from "react";
import { useProblemStore } from "../../store/useProblemStore";
import {
  BookmarkCheck,
  CloudCog,
  Funnel,
  ListFilter,
  Pencil,
  Tag,
  Tags,
  Trash,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Dropdown from "../../components/Dropdown/Dropdown";
import SearchBar from "../../components/form/SearchBar";
import { useDebounce } from "../../hooks/useDebounceHook";
import TagsDown from "../../components/Dropdown/TagsDown";
import Modal from "../../components/Modal/Modal";
import CompanyFilter from "../../components/problem/CompanyFilter";
import { useNavigate } from "react-router-dom";
const Problems = () => {
  const navigate = useNavigate()
  const {
    isLoading,
    getAllProblems,
    problems,
    tags,
    getAllTags,
    deleteProblem,
    getAllCompanies,
    companies,
  } = useProblemStore();
  const [searchQuery, setSearchQuery] = useState("");
  const debounceQuery = useDebounce(searchQuery, 1000);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  //delete
  const handleDeleteOnClick = async () => {
    try {
      await deleteProblem(deleteId);
      setDeleteId(null);
      fetchProblems();
    } catch (error) {
      console.log("Error deleting problem: ", error);
    }
  };

  //fetching problems
  const fetchProblems = async () => {
    try {
      const queryTags = selectedTags
        .map((tag) => `tags=${encodeURIComponent(tag)}`)
        .join("&");
      await getAllProblems({
        search: debounceQuery,
        tags: queryTags,
        difficulty,
      });
    } catch (error) {
      console.log("Error getting all problems: ", error);
    }
  };
  useEffect(() => {
    const fetchTags = async () => {
      try {
        await getAllTags();
        await getAllCompanies();
      } catch (error) {
        console.log("Error getting all tags: ", error);
      }
    };
    fetchTags();
  }, [getAllTags, getAllCompanies]);

  useEffect(() => {
    fetchProblems();
  }, [debounceQuery, selectedTags, difficulty]);

  if (isLoading && problems.length === 0) return <div>Loading...</div>;
  return (
    <>
      {isModalOpen && (
        <Modal
          isLoading={isLoading}
          onClick={handleDeleteOnClick}
          onClose={() => setIsModalOpen(false)}
          title={"Confirm Delete Problem"}
          description={
            "Are you sure you want to delete this problem? This action cannot be undone."
          }
          status={"delete"}
        />
      )}
      <div className="bg-base-200">
        <div className="bg-base-300 flex-wrap w-full mt-2 rounded-md  z-10 border border-accent flex items-center p-2 justify-between sm:flex-nowrap">
          <SearchBar
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            className={"sm:w-1/2"}
            placeholder={"Search by title"}
          />
          <div className="flex w-full justify-between items-center sm:justify-end sm:gap-2">
            <Dropdown
              list={[
                {
                  name: "Easy",
                  onClick: () => {
                    setDifficulty("EASY");
                  },
                },
                {
                  name: "Medium",
                  onClick: () => {
                    setDifficulty("MEDIUM");
                  },
                },
                {
                  name: "Hard",
                  onClick: () => {
                    setDifficulty("HARD");
                  },
                },
              ]}
              name={"Difficulty"}
              icon={<Funnel className="h-5 w-5" />}
            />
            <TagsDown
              tags={tags}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
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
        <div className="flex flex-wrap-reverse md:flex-nowrap gap-5 w-full">
          <div className="w-full md:w-3/4 bg-base-300 overflow-x-auto mt-2  h-110 rounded-md no-scrollbar">
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
              <tbody className="bg-base-300 border border-accent">
                {problems.map((problem, index) => {
                  return (
                    <tr
                      key={index}
                      className="hover:bg-base-200 overflow-hidden cursor-pointer"
                      onClick={() => navigate(`/problems/editor/${problem.id}`)}
                    >
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
                      <td className="w-2/10 gap-2 items-center">
                        {problem.tags.map((tag) => {
                          return (
                            <div
                              className=" badge badge-soft badge-warning"
                              key={tag.id}
                            >
                              {tag.name}
                            </div>
                          );
                        })}
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
                          <button
                            className="btn p-2 bg-red-500"
                            onClick={() => {
                              setIsModalOpen(true), setDeleteId(problem.id);
                            }}
                          >
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
          <CompanyFilter
            selectedCompany={selectedCompany}
            setSelectedCompany={setSelectedCompany}
            companies={companies}
          />
        </div>
      </div>
    </>
  );
};

export default Problems;
