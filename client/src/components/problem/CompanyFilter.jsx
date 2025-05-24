import React from "react";
import { ChevronLeft,ChevronRight } from "lucide-react";
import SearchBar from "../form/SearchBar";
const CompanyFilter = ({selectedCompany,setSelectedCompany,companies}) => {
  return (
    <div className="w-full md:w-1/4 bg-base-300  mt-2 h-50 md:h-110 rounded-md overflow-hidden">
      <div className="flex flex-col gap-3 p-3">
        <div className="flex items-center justify-between">
          <p className="font-semibold">Trending Companies</p>
          <div className="flex gap-2">
            <button className="btn btn-ghost btn-xs rounded border border-accent">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="btn btn-ghost btn-xs rounded border border-accent">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <SearchBar
          className={"input-sm"}
          placeholder={"Search for companies"}
        />
        <div className="bg-base-200 rounded p-3 h-24 md:h-84 overflow-auto no-scrollbar">
          <div className="flex flex-wrap justify-start items-start gap-1">
            {companies.map((company) => {
              return (
                <div
                  className={`badge badge-md text-base-content  font-medium rounded-3xl p-2 cursor-pointer text-sm ${
                    selectedCompany.includes(company.name)
                      ? "bg-base-300"
                      : "bg-accent"
                  }`}
                  key={company.id}
                  onClick={() =>
                    selectedCompany.includes(company.name)
                      ? setSelectedCompany(
                          selectedCompany.filter((t) => t !== company.name)
                        )
                      : setSelectedCompany([...selectedCompany, company.name])
                  }
                >
                  {company.name}{" "}
                  <span className="badge badge-xs badge-secondary rounded-3xl font-normal text-neutral">
                    {company.count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyFilter;
