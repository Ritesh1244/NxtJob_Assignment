import pool from "../database/connection";
import { Job } from "../models/job.model";

export const getAllJobs = async (): Promise<Job[]> => {
  const [rows] = await pool.query("SELECT * FROM jobs");
  return rows as Job[];
};

export const getJobById = async (id: number): Promise<Job | null> => {
  const [rows] = await pool.query("SELECT * FROM jobs WHERE id = ?", [id]);
  return (rows as Job[])[0] || null;
};

export const createJob = async (job: Job): Promise<void> => {
  await pool.query("INSERT INTO jobs SET ?", job);
};

export const updateJob = async (id: number, job: Partial<Job>): Promise<void> => {
  await pool.query("UPDATE jobs SET ? WHERE id = ?", [job, id]);
};

export const deleteJob = async (id: number): Promise<void> => {
  await pool.query("DELETE FROM jobs WHERE id = ?", [id]);
};
