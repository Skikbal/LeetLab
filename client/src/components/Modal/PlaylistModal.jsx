import React from "react";
import Label from "../form/Label.jsx";
import Input from "../form/Input.jsx";
import { useForm } from "react-hook-form";
import TextArea from "../form/TextArea.jsx";
import ErrorSpan from "../form/ErrorSpan.jsx";
import { PlaylistSchema } from "../../validators/ValidationSchema.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePlaylistStore } from "../../store/usePlaylistStore.js";
import { Loader2 } from "lucide-react";
const PlaylistModal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(PlaylistSchema),
  });

  const { isPlaylistLoading, createPlaylist } = usePlaylistStore();

  const onSubmit = async (data) => {
    try {
      await createPlaylist(data);
      onClose();
    } catch (error) {
      console.log("Error creating playlist: ", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-base-100/70 flex items-center justify-center z-70">
      <div className="card w-130 bg-base-100 shadow-xl border border-accent">
        <h1 className="flex justify-between border-b-accent items-center border-b px-3 py-2 text-base font-medium">
          Create New Playlist{" "}
          <button className="btn btn-sm btn-circle btn-ghost" onClick={onClose}>
            ✕
          </button>
        </h1>
        <form method="" className="py-3 px-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <Label children={"Playlist Name"} name={"name"} />
            <Input
              type={"text"}
              name={"name"}
              register={register}
              placeholder={"Playlist Name"}
            />
            {errors.name && (
              <ErrorSpan error={errors.name?.message} />
            )}
          </div>
          <div className="form-control mt-2">
            <Label
              children={"Playlist Description"}
              name={"description"}
            />
            <TextArea
              register={register}
              name={"description"}
              placeholder={"Playlist Description"}
              className={"bg-base-200"}
            />
            {errors.description && (
              <ErrorSpan error={errors.description?.message} />
            )}
          </div>
          <div className="flex justify-end gap-2 items-center mt-3">
            <button className="btn btn-md" type="button" onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className={`btn btn-md ${
                isPlaylistLoading ? "bg-base-300" : " btn-primary"
              }`}
              disabled={isPlaylistLoading}
            >
              {isPlaylistLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Create Playlist"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaylistModal;
