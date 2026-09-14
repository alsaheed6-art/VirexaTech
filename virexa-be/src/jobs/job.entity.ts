import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  slug!: string;

  @Column()
  company!: string;

  @Column()
  title!: string;

  @Column()
  location!: string;

  @Column()
  salary!: string;

  @Column()
  type!: string;

  @Column()
  team!: string;

  @Column('text')
  summary!: string;

  @Column('simple-array')
  bullets!: string[];

  @Column()
  logo!: string;
}
