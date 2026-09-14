import { Controller, Get, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  getJobs() {
    return this.jobsService.getJobs();
  }

  @Get(':slug')
  getJobBySlug(@Param('slug') slug: string) {
    return this.jobsService.getJobBySlug(slug);
  }
}
