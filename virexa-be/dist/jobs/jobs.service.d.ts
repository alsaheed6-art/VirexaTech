import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
export declare class JobsService implements OnModuleInit {
    private readonly jobRepository;
    constructor(jobRepository: Repository<Job>);
    onModuleInit(): Promise<void>;
    getJobs(): Promise<Job[]>;
    getJobBySlug(slug: string): Promise<Job | null>;
}
