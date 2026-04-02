import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Payment } from "@/entities/Payment";
import { MagazineDownload } from "@/entities/MagazineDownload";

dotenv.config();

const dataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: [Payment, MagazineDownload],
  migrations: [],
  synchronize: true,
  logging: true,
});

export default dataSource;
