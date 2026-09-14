"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const job_entity_1 = require("./job.entity");
let JobsService = class JobsService {
    constructor(jobRepository) {
        this.jobRepository = jobRepository;
    }
    async onModuleInit() {
        const count = await this.jobRepository.count();
        if (count > 0) {
            return;
        }
        const seedJobs = [
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
    getJobBySlug(slug) {
        return this.jobRepository.findOneBy({ slug });
    }
};
exports.JobsService = JobsService;
exports.JobsService = JobsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(job_entity_1.Job)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], JobsService);
//# sourceMappingURL=jobs.service.js.map