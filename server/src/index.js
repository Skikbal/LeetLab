import server from "./server.js";
import { PORT } from "./config/envConfig.js";

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
