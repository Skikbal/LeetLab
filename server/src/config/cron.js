import deleteInActiveUser from "../jobs/deleteInActiveUser.js";

const runAllCroneJobs = async () => {
  deleteInActiveUser();
};

export default runAllCroneJobs;
