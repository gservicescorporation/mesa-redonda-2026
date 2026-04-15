import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("payments")
export class Payment {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  chargeId!: string;

  @Column()
  fullname!: string;

  @Column()
  email!: string;

  @Column()
  phoneNumber!: string;

  @Column({ nullable: true })
  enterprise?: string;

  @Column({ nullable: true })
  position?: string;

  @Column()
  paymentMethod!: string;

  @Column()
  eventName!: string;

  @Column()
  eventDate!: string;

  @Column("decimal")
  cartTotal!: number;

  @Column("jsonb")
  cartData: any;

  @CreateDateColumn()
  createdAt!: Date;
}