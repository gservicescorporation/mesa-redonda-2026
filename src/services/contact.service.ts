import { Contact } from "@/entities/Contact";
import dataSource from "@/lib/typeorm";

export class ContactService {
  private repo = dataSource.getRepository(Contact);

  async create(data: Partial<Contact>) {
    const contact = this.repo.create(data);
    return await this.repo.save(contact);
  }
}
