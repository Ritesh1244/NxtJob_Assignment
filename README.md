# Job Board Backend

This is a simple Job Board backend built with Node.js, TypeScript, and MySQL. It allows users to perform CRUD operations for job postings, including creating, reading, updating, and deleting job listings.

## Features
- Create a new job posting (POST /jobs)
- Retrieve all job postings (GET /jobs)
- Retrieve a single job posting by ID (GET /jobs/:id)
- Update a job posting by ID (PUT /jobs/:id)
- Delete a job posting by ID (DELETE /jobs/:id)

## Technology Stack
- **Node.js**: Backend runtime
- **TypeScript**: For type safety and better maintainability
- **MySQL**: Database to store job postings
- **Express.js**: Web framework for handling HTTP requests
- **dotenv**: To handle environment variables securely

## Database Schema
The `jobs` table has the following columns:
- `id`: Auto-incrementing primary key
- `title`: Job title (String)
- `company`: Company name (String)
- `location`: Job location (String)
- `salary`: Job salary (Number)
- `description`: Job description (String)

## Installation & Setup

### Prerequisites
- Node.js (>= 14.x)
- MySQL (>= 8.x)

### Steps to run locally

1. Clone the repository:
   ```bash
   git clone <your-github-repo-url>
   cd job-board-backend
