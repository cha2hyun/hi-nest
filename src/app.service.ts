import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sayHi(): string {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }
  getHi(): string {
    return 'Hi Nest';
  }
}
