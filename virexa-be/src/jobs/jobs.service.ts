import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';

@Injectable()
export class JobsService implements OnModuleInit {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
  ) {}

  async onModuleInit() {
    const count = await this.jobRepository.count();
    if (count > 0) {
      return;
    }

    const seedJobs: Partial<Job>[] = [
      {
        slug: 'senior-platform-engineer',
        company: 'Northstar Health',
        title: 'Senior Platform Engineer',
        location: 'Remote',
        salary: '$150,000–$210,000',
        type: 'Full-time',
        team: 'Platform',
        summary: 'Build and scale the core platform engineering systems that support high-availability healthcare products and data workflows.',
        bullets: [
          'Own the architecture and reliability of platform services powering patient and provider experiences.',
          'Drive CI/CD, observability, and cloud infrastructure improvements across AWS and Kubernetes.',
          'Partner with product and data teams to ship resilient features at scale.',
        ],
        logo: 'N',
      },
      {
        slug: 'cloud-infrastructure-lead',
        company: 'SummitGrid',
        title: 'Cloud Infrastructure Lead',
        location: 'Austin, TX • Hybrid',
        salary: '$140,000–$195,000',
        type: 'Full-time',
        team: 'Cloud',
        summary: 'Lead migration and modernization programs for internal and customer-facing systems in a high-growth cloud environment.',
        bullets: [
          'Architect and operate secure cloud-native systems across multi-account AWS infrastructure.',
          'Establish engineering standards for scaling, reliability, and incident management.',
          'Mentor engineers while collaborating with product and security stakeholders.',
        ],
        logo: 'S',
      },
      {
        slug: 'ai-systems-engineer',
        company: 'Aegis Labs',
        title: 'AI Systems Engineer',
        location: 'Remote',
        salary: '$165,000–$230,000',
        type: 'Full-time',
        team: 'AI',
        summary: 'Design deployment and orchestration systems for applied AI products, data pipelines, and enterprise workflows.',
        bullets: [
          'Create robust packaging and deployment workflows for models and agents in production.',
          'Work with data and product teams to optimize AI system performance and governance.',
          'Drive experimentation, evaluation, and operationalization of AI features.',
        ],
        logo: 'A',
      },
      {
        slug: 'product-designer',
        company: 'LaunchPeak',
        title: 'Product Designer',
        location: 'New York, NY • Hybrid',
        salary: '$95,000–$160,000',
        type: 'Full-time',
        team: 'Design',
        summary: 'Shape premium AI products with a strong focus on usability, conversion, and enterprise workflows.',
        bullets: [
          'Lead product discovery and UX strategy for AI-driven workflows.',
          'Create design systems and polished interfaces for growth-stage teams.',
          'Collaborate closely with product and engineering on roadmap execution.',
        ],
        logo: 'L',
      },
    ];

    await this.jobRepository.save(seedJobs);
  }

  getJobs() {
    return this.jobRepository.find();
  }

  getJobBySlug(slug: string) {
    return this.jobRepository.findOneBy({ slug });
  }
}
