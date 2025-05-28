import React, { useEffect,useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, User, Shield, Image } from "lucide-react";
import PlaylistProfile from "../../components/playlist/PlaylistProfile";
import { usePlaylistStore } from "../../store/usePlaylistStore.js";
import Loader from "../../components/Loader.jsx";
import PlaylistModal from "../../components/Modal/PlaylistModal.jsx";
const Profile = () => {
  const { getAllPlaylists, playlists, deletePlaylist, isPlaylistLoading } =
    usePlaylistStore();
  const { authUser, isCheckingAuth } = useAuthStore();
  const [isPlaylistModalOpen, setIsPlaylistModalOpen] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      authUser.avatar = reader.result;
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    getAllPlaylists();
  }, []);

  const handleDelete = (id) => {
    deletePlaylist(id);
  };

  return (
    <>
      {(isCheckingAuth || isPlaylistLoading) && (
        <Loader isLoading={isCheckingAuth || isPlaylistLoading} />
      )}
      {isPlaylistModalOpen && (
        <PlaylistModal onClose={() => setIsPlaylistModalOpen(false)} />
      )}
      <div className="bg-base-200 flex flex-col gap-10">
        <div className=" bg-base-200 flex flex-col items-center min-h-screen justify-center px-4 md:px-8 w-full">
          <div className="w-full max-w-4xl mx-auto">
            {/* Profile Card */}
            <div className="card bg-base-100 shadow-xl">
              <h1 className="text-2xl font-bold text-primary pl-2 my-5 mx-5 stat-value border-l-3 boredr-l-primary capitalize">
                {authUser?.role.toLowerCase()} Details
              </h1>

              <div className="card-body">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Avatar */}
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src={
                          authUser?.avatar ||
                          "https://avatar.iran.liara.run/public/boy"
                        }
                        alt={authUser.name}
                      />
                      {/* {authUser.avatar ? (
                        <img
                          src={
                            authUser?.avatar ||
                            "https://avatar.iran.liara.run/public/boy"
                          }
                          alt={authUser.name}
                        />
                      ) : (
                        <span className="text-3xl">
                          {authUser.name ? authUser.name.charAt(0) : "U"}
                        </span>
                      )} */}
                    </div>
                  </div>

                  {/* Name and Role Badge */}
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold">{authUser.name}</h2>
                    <div className="badge badge-primary mt-2 ">
                      {authUser.role}
                    </div>
                  </div>
                </div>

                <div className="divider"></div>

                {/* User Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="stat bg-base-200 rounded-box">
                    <div className="stat-figure text-primary">
                      <Mail className="w-8 h-8" />
                    </div>
                    <div className="stat-title">Email</div>
                    <div className="stat-value text-lg break-all">
                      {authUser.email}
                    </div>
                  </div>

                  {/* User ID */}
                  <div className="stat bg-base-200 rounded-box">
                    <div className="stat-figure text-primary">
                      <User className="w-8 h-8" />
                    </div>
                    <div className="stat-title">User ID</div>
                    <div className="stat-value text-sm break-all">
                      {authUser.id}
                    </div>
                  </div>

                  {/* Role Status */}
                  <div className="stat bg-base-200 rounded-box">
                    <div className="stat-figure text-primary">
                      <Shield className="w-8 h-8" />
                    </div>
                    <div className="stat-title">Role</div>
                    <div className="stat-value text-lg">{authUser.role}</div>
                    <div className="stat-desc">
                      {authUser.role === "ADMIN"
                        ? "Full system access"
                        : "Limited access"}
                    </div>
                  </div>

                  {/* Profile Image Status */}
                  <div className="stat bg-base-200 rounded-box">
                    <div className="stat-figure text-primary">
                      <Image className="w-8 h-8" />
                    </div>
                    <div className="stat-title">Profile Image</div>
                    <div className="stat-value text-lg">
                      {authUser.image ? "Uploaded" : "Not Set"}
                    </div>
                    <div className="stat-desc">
                      <input
                        id="profile-pic"
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="profile-pic"
                        className="btn btn-primary btn-xs mt-1 p-1"
                      >
                        {authUser.image
                          ? "Change Profile Picture"
                          : "Upload Profile Picture"}
                      </label>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="card-actions justify-end mt-6">
                  <button className="btn btn-outline btn-primary">
                    Edit Profile
                  </button>
                  <button className="btn btn-primary">Change Password</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-base-200 flex flex-col items-center min-h-screen justify-center px-4 md:px-8 w-full">
          <div className="w-full max-w-4xl mx-auto">
            <div className="card bg-base-100 shadow-xl">
              <PlaylistProfile
                playlists={playlists }
                handleDelete={handleDelete}
                setIsPlaylistModalOpen={setIsPlaylistModalOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
