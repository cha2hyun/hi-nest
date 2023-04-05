import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/*
모듈을 장고로 치면 앱
컨트롤러 : url가져오고 함수를 실행함 (Express 의 라우터)

*/
