import express, { Express } from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";

const app: Express = express();
const port = config.get<number>("port");

app.listen(port, async () => {
  logger.info(`Express server listning on http://localhost:${port}`);
  routes(app);
  connect();
});
