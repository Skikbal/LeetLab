import cron from "node-cron";
import { prisma } from "../libs/db.js";

const deleteInActiveUser = () => {
  cron.schedule("53 23 * * *", () => {
    console.log("running every minute to 1 from 5");
  });
};

export default deleteInActiveUser