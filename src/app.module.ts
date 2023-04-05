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
서비스 : 실제로 function을 가지는 부분 컨트롤러에서 함수를 실제로 실행하는 곳 비지니스 로직을 실행하는 것
*/
