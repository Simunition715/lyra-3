import compression from "compression";
import express from "express";

const { SERVER_PORT = 8081, RESOURCE_PATH = "" } = process.env;

const app = express();

app.use(compression());
app.use("/", express.static(RESOURCE_PATH));

app.listen(SERVER_PORT, () => {
  // tslint:disable-next-line
  console.log(`App running at http://localhost:${SERVER_PORT}/`);
  // tslint:disable-next-line
  console.log("Hosting files from:", RESOURCE_PATH);
});
