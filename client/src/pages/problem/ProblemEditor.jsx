import React, { useEffect, useState } from "react";
import { useProblemStore } from "../../store/useProblemStore";
import { useParams } from "react-router-dom";
import Split from "react-split";
import MonacoEditor from "../../components/Monaco/MonacoEditor.jsx";
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
  Tag,
  Lock,
  Lightbulb,
  Edit,
  Expand,
} from "lucide-react";
import "../../App.css";
import DescriptionContent from "../../components/problem/DescriptionContent.jsx";
import EditorialContent from "../../components/problem/EditorialContent.jsx";
import SolutionContent from "../../components/problem/SolutionContent.jsx";
import SubmissionContent from "../../components/problem/SubmissionContent.jsx";
import javas from "../../assets/language/javas.png";
import javascripts from "../../assets/language/javascripts.png";
import pythons from "../../assets/language/pythons.png";
const ProblemEditor = () => {
  const { id } = useParams();
  const { isLoading, problem, getProblemById } = useProblemStore();
  const [tabs, setTabs] = useState("description");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const fetchProblem = async () => {
    try {
      await getProblemById(id);
    } catch (error) {
      console.log("Error getting problem: ", error);
    }
  };
  useEffect(() => {
    fetchProblem();
  }, [id]);

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
            onClick={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value={"javascript"}>JavaScript</option>
            <option value={"python"}>Python</option>
            <option value={"java"}>Java</option>
          </select>
        </div>
      </div>

      <Split
        className="wrap"
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
        <div className="h-[calc(100vh-80px)] bg-base-300 rounded-md overflow-auto no-scrollbar">
          <div className="flex w-full bg-accent/100 h-10 items-center justify-around rounded-t-md sticky top-0">
            <div
              className="flex items-center gap-1 hover:bg-base-300/40 px-2 py-1 rounded cursor-pointer"
              onClick={() => setTabs("description")}
            >
              <NotepadText className="h-4 w-4 text-primary" /> Description
            </div>
            <div
              className="flex items-center gap-1 hover:bg-base-300/40 px-2 py-1 rounded cursor-pointer"
              onClick={() => setTabs("editorial")}
            >
              <BookOpen className="h-4 w-4 text-secondary" /> Editorial
            </div>
            <div
              className="flex items-center gap-1 hover:bg-base-300/40 px-2 py-1 rounded cursor-pointer"
              onClick={() => setTabs("solution")}
            >
              <FlaskConical className="h-4 w-4 text-info" /> Solution
            </div>
            <div
              className="flex items-center gap-1 hover:bg-base-300/40 px-2 py-1 rounded cursor-pointer"
              onClick={() => setTabs("submissions")}
            >
              <History className="h-4 w-4 text-warning" /> Submissions
            </div>
          </div>
          {Object.keys(problem).length > 0 &&
            (tabs === "editorial" ? (
              <EditorialContent problem={problem} />
            ) : tabs === "solution" ? (
              <SolutionContent problem={problem} />
            ) : tabs === "submissions" ? (
              <SubmissionContent />
            ) : (
              <DescriptionContent problem={problem} />
            ))}
        </div>
        <Split
          className="intterWrap"
          sizes={[60, 39]}
          minSize={50}
          expandToMin={false}
          gutterSize={2}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="vertical"
          cursor="col-resize"
        >
          <div className="bg-base-300 rounded-md">
            <div className="flex w-full bg-accent/100 h-10 items-center justify-between rounded-t-md sticky top-0 px-5">
              <div className="flex gap-1 items-center">
                <img
                  src={
                    selectedLanguage === "python"
                      ? pythons
                      : selectedLanguage === "java"
                      ? javas
                      : javascripts
                  }
                  alt="lang"
                  className="h-7 w-7 rounded"
                />
                <p className="font-semibold text-base capitalize">
                  {selectedLanguage}
                </p>
              </div>
              <div className="flex gap-2">
                <label className="toggle text-base-content">
                  <input
                    type="checkbox"
                    value="synthwave"
                    className="theme-controller"
                  />

                  <svg
                    aria-label="sun"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M12 2v2"></path>
                      <path d="M12 20v2"></path>
                      <path d="m4.93 4.93 1.41 1.41"></path>
                      <path d="m17.66 17.66 1.41 1.41"></path>
                      <path d="M2 12h2"></path>
                      <path d="M20 12h2"></path>
                      <path d="m6.34 17.66-1.41 1.41"></path>
                      <path d="m19.07 4.93-1.41 1.41"></path>
                    </g>
                  </svg>

                  <svg
                    aria-label="moon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </g>
                  </svg>
                </label>
                <Expand className="w-5 h-5" />
              </div>
            </div>
            {/* <MonacoEditor language="JS" lineNumbers="on" /> */}
          </div>
          <div className="bg-base-300 rounded-md">hwllo</div>
        </Split>
      </Split>
    </div>
  );
};

export default ProblemEditor;
