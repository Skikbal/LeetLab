import { RateLimiterRedis } from "rate-limiter-flexible";
import RedisClient from "../../libs/radisDB.js";
import ApiError from "../../utils/ApiError.js";

const MAX_WRONG_ATTEMPTS = 5; // 👈 Allow only 5 wrong attempts

const BLOCK_DURATION = 1 * 60; // 👈 Block for 15 minutes after limit

const WINDOW_DURATION = 1 * 60; // 👈 Count attempts in 15-minute window

const limiterByip = new RateLimiterRedis({
  storeClient: RedisClient,
  keyPrefix: "login_fail_ip",
  points: MAX_WRONG_ATTEMPTS, //5 attempts
  duration: WINDOW_DURATION, // per 15 minutes
  blockDuration: BLOCK_DURATION, // blocker for 15 minutes after limit
});

const limiterByEmail = new RateLimiterRedis({
  storeClient: RedisClient,
  keyPrefix: "login_fail_email",
  points: MAX_WRONG_ATTEMPTS, //5 attempts
  duration: WINDOW_DURATION, // per 15 minutes
  blockDuration: BLOCK_DURATION, // blocker for 15 minutes after limit
});

//login middleware
const loginRateLimit = async (req, res, next) => {
  const ip = req.ip;
  const email = req.body?.email;
  try {
    const [ipStatus, emailStatus] = await Promise.all([
      limiterByip.get(ip),
      limiterByEmail.get(email),
    ]);
    const isIpBlocked =
      ipStatus !== null && ipStatus.consumedPoints > MAX_WRONG_ATTEMPTS;
    const isEmailBlocked =
      emailStatus !== null && emailStatus.consumedPoints > MAX_WRONG_ATTEMPTS;
    if (isIpBlocked && isEmailBlocked) {
      return next(
        new ApiError(
          429,
          "Too many attempts. Please try again after 15 minutes.",
        ),
      );
    }
    // Save limiter refs in req for use after login attempt
    req.rateLimitInfo = {
      ip,
      email,
    };
    next();
  } catch (error) {
    return next(
      new ApiError(
        error.statusCode || 500,
        error.message || "Rate limiting failed.",
      ),
    );
  }
};

export { loginRateLimit, limiterByip, limiterByEmail };
