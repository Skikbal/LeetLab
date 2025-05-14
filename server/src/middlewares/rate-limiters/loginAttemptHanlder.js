import { limiterByip, limiterByEmail } from "../rate-limiters/index.js";
import ApiError from "../../utils/ApiError.js";

const loginAttemtHandler = async (req, res, next) => {
  const { ip, email } = req.rateLimitInfo || {};
  try {
    await Promise.all([
      limiterByip.consume(ip),
      email ? limiterByEmail.consume(email) : Promise.resolve(),
    ]);
    //pass the request to controller
    next();
  } catch (rateLimitError) {
    const retrySeconds = Math.ceil(rateLimitError.msBeforeNext / 1000) || 1;
    return next(
      new ApiError(
        429,
        `Too many attempts. Please try again after ${retrySeconds} seconds.`,
        retrySeconds,
      ),
    );
  }
};

//reward points after successfull login
const rewardRateLimit = async (ip, email) => {
  try {
    await Promise.all([
      limiterByip.reward(ip, 2),
      email ? limiterByEmail.reward(email, 2) : Promise.resolve(),
    ]);
  } catch (error) {
    console.log("Reward fail:", error);
  }
};

export { loginAttemtHandler, rewardRateLimit };
