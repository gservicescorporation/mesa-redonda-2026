import { Payment } from "@/entities/Payment";
import dataSource from "@/lib/typeorm";

export class PaymentService {
  private repo = dataSource.getRepository(Payment);

  async create(data: Partial<Payment>) {
    const payment = this.repo.create(data);
    return await this.repo.save(payment);
  }
}