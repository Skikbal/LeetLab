import server from "./server.js";
import { PORT } from "./config/envConfig.js";
import { connectDB } from "./libs/db.js";

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    process.exit(1);
  });
