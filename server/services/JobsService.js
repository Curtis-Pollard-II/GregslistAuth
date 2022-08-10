import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"

class JobsService {
    async getJobs() {
      //                                   v query object
      let jobs = await dbContext.Jobs.find()
      return jobs
    }
    async getJobById(jobId) {
      let job = await dbContext.Jobs.findById(jobId)
      if (!job) {
        throw new BadRequest('Invalid job Id')
      }
      return job
    }
    async createJob(jobData) {
      let job = await dbContext.Jobs.create(jobData)
      return job
    }
  
    async editJob(jobId, jobData) {
      let job = await this.getJobById(jobId)
  
      job.title = jobData.title || job.title
      job.days = jobData.days || job.days
      job.hours = jobData.hours || job.hours
      job.startSalary = jobData.startSalary || job.startSalary
      job.description = jobData.description || job.description
  
      await job.save() // never use update its dangerous
      return job
    }
  
    async deleteJob(jobId) {
      let job = await this.getJobById(jobId)
  
      await job.remove() // this deletes it from the database
      return job
  
    }
  }
  
  
  export const jobsService = new JobsService()