import { MagazineDownload } from "@/entities/MagazineDownload";
import dataSource from "@/lib/typeorm";

export class MagazineService {
  private repo = dataSource.getRepository(MagazineDownload);

  async saveDownload(email: string) {
    const exists = await this.repo.findOne({ where: { email } });

    if (exists) return exists;

    const download = this.repo.create({ email });
    return this.repo.save(download);
  }
}
