import Redis from "ioredis";
import { REDIS_HOST, REDIS_PORT } from "../config/env.config.js";

const redis = new Redis({
  host: REDIS_HOST,
  port: REDIS_PORT,
  enableReadyCheck: true,
  retryStrategy: (times) => {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
});

redis.on("connect", () => {
  console.log("Redis client connected");
});

redis.on("error", (err) => {
  console.log("Redis connection error:", err);
});

export default redisConnect;
