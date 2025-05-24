import React, { useEffect } from "react";
import { useProblemStore } from "../../store/useProblemStore";
import { useParams } from "react-router-dom";
import Split from "react-split";
import {
  House,
  Bookmark,
  Share2,
  Play,
  CloudUpload,
  NotepadText,
  BookOpen,
  FlaskConical,
  History,
} from "lucide-react";
import "../../App.css";
const ProblemEditor = () => {
  const { id } = useParams();
  const { isLoading, problem, getProblemById } = useProblemStore();
  const fetchProblem = async () => {
    try {
      await getProblemById(id);
    } catch (error) {
      console.log("Error getting problem: ", error);
    }
  };
  useEffect(() => {
    fetchProblem();
  }, [id, getProblemById]);
  return (
    <div className="bg-base-200 h-screen">
      <div className="navbar flex bg-base-200 shadow-sm justify-between items-center">
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-2 font-medium ">
            <House className="h-6 w-6 cursor-pointer" />{" "}
            <span>{problem?.title}</span>
          </div>
          <div>hello</div>
        </div>

        <div className="join join-vertical lg:join-horizontal">
          <button className="btn join-item cursor-pointer hover:text-primary">
            <Play className="h-6 w-6 " />
            Run
          </button>
          <button className="btn join-item cursor-pointer hover:text-primary">
            <CloudUpload className="h-6 w-6 " />
            Submit
          </button>
        </div>
        <div className="flex gap-4">
          <Bookmark className="h-10 w-10 cursor-pointer" />
          <Share2 className="h-10 w-10 cursor-pointer" />
          <select
            defaultValue="javascript"
            className="w-full select select-ghost border border-accent text-base rounded bg-base-200 cursor-pointer"
          >
            <option>JavaScript</option>
            <option>Python</option>
            <option>Java</option>
          </select>
        </div>
      </div>

      <Split
        class="wrap"
        sizes={[50, 50]}
        minSize={50}
        expandToMin={false}
        gutterSize={2}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <div className="h-[calc(100vh-80px)] bg-base-300 rounded-md">
          <div className="flex w-full bg-accent/100 h-10 items-center justify-around rounded-t-md">
            <div className="flex items-center gap-1 hover:bg-base-300/40 px-2 py-1 rounded cursor-pointer">
              <NotepadText className="h-4 w-4 text-primary" /> Description
            </div>
            <div className="flex items-center gap-1 hover:bg-base-300/40 px-2 py-1 rounded cursor-pointer">
              <BookOpen className="h-4 w-4 text-secondary" /> Editorial
            </div>
            <div className="flex items-center gap-1 hover:bg-base-300/40 px-2 py-1 rounded cursor-pointer">
              <FlaskConical className="h-4 w-4 text-info" /> Solution
            </div>
            <div className="flex items-center gap-1 hover:bg-base-300/40 px-2 py-1 rounded cursor-pointer">
              <History className="h-4 w-4 text-warning" /> Submissions
            </div>
          </div>
        </div>
        <Split
          class="intterWrap"
          sizes={[49, 49]}
          minSize={50}
          expandToMin={false}
          gutterSize={2}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="vertical"
          cursor="col-resize"
        >
          <div className="bg-base-300 rounded-xl">hello</div>
          <div className="bg-base-300 rounded-xl">hwllo</div>
        </Split>
      </Split>
    </div>
  );
};

export default ProblemEditor;
