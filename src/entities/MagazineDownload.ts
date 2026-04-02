import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("magazine_downloads")
export class MagazineDownload {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  email!: string;

  @CreateDateColumn()
  createdAt!: Date;
}