import { PrismaClient } from "../generated/prisma/index.js";
import { NODE_ENV } from "../config/envConfig.js";

const globalForPrisma = globalThis;
let prisma;
if (!globalForPrisma.prisma) {
  prisma = new PrismaClient();
  if (NODE_ENV !== "production") globalForPrisma.prisma = prisma;
} else {
  prisma = globalForPrisma.prisma;
}

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
};
export { prisma, connectDB };
