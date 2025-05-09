import deleteInActiveUser from "../jobs/deleteInActiveUser.js";

const runAllCroneJobs = async () => {
  try {
    await deleteInActiveUser();
  } catch (error) {}
};

export default runAllCroneJobs;
