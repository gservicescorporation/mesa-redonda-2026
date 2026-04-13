import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Contact } from "@/entities/Contact";
import { Payment } from "@/entities/Payment";
import { MagazineDownload } from "@/entities/MagazineDownload";

dotenv.config();

const dataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: [Payment, MagazineDownload, Contact],
  migrations: [],
  synchronize: true,
  logging: true,
});

export default dataSource;
