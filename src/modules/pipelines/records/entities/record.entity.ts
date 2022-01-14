import { BaseEntity } from "src/config/base.entity";
import { Entity } from "typeorm";

@Entity('pipeline_records')
export class RecordsEntity extends BaseEntity {}
