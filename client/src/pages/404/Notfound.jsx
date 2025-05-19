import React from "react";
import { Link } from "react-router-dom";
import { Terminal, Braces, FileCode, Code } from "lucide-react";
const Notfound = () => {
  return (
    <div className="h-screen bg-base-200 flex justify-center items-center p-5">
      <div className="relative flex flex-col items-center justify-between bg-base-100 p-5 rounded-xl w-250 h-120">
        <div className="absolute inset-0 opacity-20 text-primary">
          <div className="absolute top-[10%] left-[10%] animate-pulse">
            <Braces size={40} />
          </div>
          <div className="absolute top-[35%] left-[35%] animate-pulse delay-500">
            <Code size={55} />
          </div>
          <div className="absolute top-[30%] left-[80%] animate-pulse delay-300">
            <FileCode size={50} />
          </div>
          <div className="absolute top-[85%] left-[5%] animate-pulse delay-700">
            <FileCode size={45} />
          </div>
          <div className="absolute top-[70%] left-[20%] animate-pulse delay-700">
            <Terminal size={45} />
          </div>
          <div className="absolute top-[60%] left-[75%] animate-pulse delay-500">
            <Code size={55} />
          </div>
          <div className="absolute top-[85%] left-[45%] animate-pulse delay-200">
            <Braces size={35} />
          </div>
          <div className="absolute top-[15%] left-[60%] animate-pulse delay-100">
            <Terminal size={30} />
          </div>
        </div>
        <h2 className="text-success-content text-[10rem]  font-extrabold animate-pulse delay-75">
          404
        </h2>
        <h2 className="text-3xl md:text-7xl font-bold text-accent ">
          Page not found
        </h2>
        <p className="text-lg my-4 md:text-xl text-center">
          The page you're searching for isn't available.{" "}
        </p>
        <Link className="btn btn-success" to={"/"}>
          Go home
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
