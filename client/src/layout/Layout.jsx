import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-base-200 overflow-auto">
      <Navbar />
      <div className="px-5">{children}</div>
    </div>
  );
};

export default Layout;


//

          {/* <div className="flex flex-col md:flex-row gap-3 mt-4 md:mt-0">
            <div className="join">
              <Button
                className={`join-item ${
                  sampleType === "DP" ? "btn-active" : ""
                }`}
                onClick={() => setSampleType("DP")}
              >
                DP Problem
              </Button>

              <Button
                className={`join-item ${
                  sampleType === "STRING" ? "btn-active" : ""
                }`}
                onClick={() => setSampleType("STRING")}
              >
                String Problem
              </Button>
            </div>
            <button
              type="button"
              className="btn btn-secondary gap-2"
              // onClick={loadSampleData}
            >
              <Download className="w-4 h-4" />
              Load Sample
            </button>
          </div> */}