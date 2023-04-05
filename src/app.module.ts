import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}

/*
#1
모듈을 장고로 치면 앱
컨트롤러 : url가져오고 함수를 실행함 (Express 의 라우터)
서비스 : 실제로 function을 가지는 부분 컨트롤러에서 함수를 실제로 실행하는 곳 비지니스 로직을 실행하는 것

#2
nest cli
컨트롤러 생성 : nest g co (자동으로 앱 모듈에 임포트됨)
*/
