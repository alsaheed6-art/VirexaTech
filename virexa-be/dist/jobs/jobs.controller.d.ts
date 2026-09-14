import { JobsService } from './jobs.service';
export declare class JobsController {
    private readonly jobsService;
    constructor(jobsService: JobsService);
    getJobs(): Promise<import("./job.entity").Job[]>;
    getJobBySlug(slug: string): Promise<import("./job.entity").Job | null>;
}
