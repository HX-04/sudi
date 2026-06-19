import { Injectable, ConflictException } from '@nestjs/common';

@Injectable()
export class OrderService {
  // 模拟数据库
  private orders: any[] = [];

  async create(dto: any) {
    const order = {
      id: Math.random().toString(36).substring(2, 15),
      ...dto,
      status: 'pending',
      createdAt: new Date(),
    };
    this.orders.push(order);
    return order;
  }

  async list(status?: string) {
    if (status) return this.orders.filter((o) => o.status === status);
    return this.orders;
  }

  async getPendingOrders() {
    return this.orders.filter((o) => o.status === 'pending');
  }

  async getById(id: string) {
    return this.orders.find((o) => o.id === id);
  }

  async accept(id: string, runnerId: string) {
    const order = this.orders.find((o) => o.id === id);
    if (!order) throw new Error('订单不存在');
    if (order.status !== 'pending') throw new ConflictException('订单已被接走');
    order.status = 'accepted';
    order.runnerId = runnerId;
    order.acceptedAt = new Date();
    return order;
  }

  async updateStatus(id: string, status: string) {
    const order = this.orders.find((o) => o.id === id);
    if (!order) throw new Error('订单不存在');
    order.status = status;
    if (status === 'picked_up') order.pickedUpAt = new Date();
    if (status === 'completed') order.completedAt = new Date();
    return order;
  }

  async cancel(id: string, reason: string) {
    const order = this.orders.find((o) => o.id === id);
    if (!order) throw new Error('订单不存在');
    order.status = 'cancelled';
    order.cancelReason = reason;
    order.cancelledAt = new Date();
    return order;
  }

  async review(id: string, rating: number, review: string) {
    const order = this.orders.find((o) => o.id === id);
    if (!order) throw new Error('订单不存在');
    order.rating = rating;
    order.review = review;
    return order;
  }
}
