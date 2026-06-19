import { Controller, Get, Post, Put, Body, Param, Query } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() dto: any) {
    return this.orderService.create(dto);
  }

  @Get()
  async list(@Query('status') status?: string) {
    return this.orderService.list(status);
  }

  @Get('pending')
  async getPending() {
    return this.orderService.getPendingOrders();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.orderService.getById(id);
  }

  @Post(':id/accept')
  async accept(@Param('id') id: string, @Body('runnerId') runnerId: string) {
    return this.orderService.accept(id, runnerId);
  }

  @Put(':id/status')
  async updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.orderService.updateStatus(id, status);
  }

  @Put(':id/cancel')
  async cancel(@Param('id') id: string, @Body('reason') reason: string) {
    return this.orderService.cancel(id, reason);
  }

  @Post(':id/review')
  async review(@Param('id') id: string, @Body('rating') rating: number, @Body('review') review: string) {
    return this.orderService.review(id, rating, review);
  }
}
