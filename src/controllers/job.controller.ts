import { Request, Response } from "express";
import * as jobService from "../services/job.service";

export const getAllJobs = async (req: Request, res: Response) => {
    try {
      const jobs = await jobService.getAllJobs();
      console.log("Jobs retrieved:", jobs); // Debug log
      res.json(jobs);
    } catch (err) {
      console.error("Error retrieving jobs:", err); // Error log
      res.status(500).send("Internal Server Error");
    }
  };
  

  export const getJobById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const job = await jobService.getJobById(Number(id));
    job ? res.json(job) : res.status(404).send("Job not found");
  };
  

export const createJob = async (req: Request, res: Response) => {
  await jobService.createJob(req.body);
  res.status(201).send("Job created successfully");
};

export const updateJob = async (req: Request, res: Response) => {
    const { id } = req.params;
    const jobId = Number(id);
    if(isNaN(jobId)){
        return res.send(400).send("Invalid job id")
    }
    await jobService.updateJob(jobId, req.body);
    res.send("Job updated successfully");
  };
  

  export const deleteJob = async (req: Request, res: Response) => {
    const { id } = req.params;
    await jobService.deleteJob(Number(id));
    res.send("Job deleted successfully");
  };
  
