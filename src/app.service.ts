import { Injectable } from '@nestjs/common';
import { InjectRedis, Redis } from '@nestjs-modules/ioredis';

@Injectable()
export class AppService {
  constructor(
    @InjectRedis()
    private readonly redis: Redis,
  ) {}

  async get() {
    const ping = await this.redis.ping();
    return ping;
  }
}
