import React from "react";
import { Trash,Loader2 } from "lucide-react";

const Modal = ({ onClose, title, description, status, onClick, isLoading }) => {
  return (
    <div className="fixed inset-0 bg-base-100/70 flex items-center justify-center z-50">
      <div className="card py-7 px-5 w-130 bg-base-100 shadow-xl border border-accent">
        <form method="">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        </form>
        <div className="flex flex-col juistify-center items-center">
          <div
            className={`p-4 rounded-full mb-4 ${
              status === "delete"
                ? "bg-error/30"
                : status === "update"
                ? "bg-secondary/30"
                : status === "add"
                ? "bg-primary/30"
                : ""
            }`}
          >
            <Trash
              className={`w-6 h-6 ${
                status === "delete"
                  ? "text-error"
                  : status === "update"
                  ? "text-secondary"
                  : status === "add"
                  ? "text-primary"
                  : ""
              } `}
            />
          </div>
          <h3 className="font-bold text-xl text-base-content">{title}</h3>
          <p className="py-4 text-md text-accent text-center">{description}</p>
          <form className="flex gap-2 justify-center items-center mt-3 w-full">
            <button
              className={`btn w-1/2 ${
                status === "delete"
                  ? "bg-error"
                  : status === "update"
                  ? "bg-secondary"
                  : status === "add"
                  ? "bg-primary"
                  : ""
              }`}
              onClick={() => {
                onClick(), onClose();
              }}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : status === "delete" ? (
                "Delete"
              ) : status === "update" ? (
                "Update"
              ) : (
                "Add"
              )}
            </button>
            <button className="btn w-1/2" onClick={onClose}>
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
