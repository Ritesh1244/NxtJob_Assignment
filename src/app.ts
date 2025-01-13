import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import jobRoutes from "./routes/job.routes";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", jobRoutes);

export default app;
