import { Router } from "express";
import * as jobController from "../controllers/job.controller";

const router = Router();

router.get("/jobs", jobController.getAllJobs);
router.get("/jobs/:id", jobController.getJobById);
router.post("/jobs", jobController.createJob);
router.put("/jobs/:id", jobController.updateJob);
router.delete("/jobs/:id", jobController.deleteJob);

export default router;
