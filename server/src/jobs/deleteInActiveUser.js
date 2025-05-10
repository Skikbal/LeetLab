import cron from "node-cron";
import { prisma } from "../libs/db.js";

const deleteInActiveUser = () => {
  cron.schedule("0 2 * * *", async () => {
    try {
      //shedule to run every day at 2 am
      const users = await prisma.user.findMany({
        where: {
          isDeActivated: true,
          deletionRequestedAt: {
            lte: new Date(),
          },
        },
      });

      for (const user of users) {
        await prisma.user.deleteMany({
          where: {
            id: user.id,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};

export default deleteInActiveUser;
