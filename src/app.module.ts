import { Module } from '@nestjs/common';
import { TMDbService } from './tmdb.service';
import { TMDbController } from './tmdb.controller';

@Module({
  imports: [],
  controllers: [TMDbController],
  providers: [TMDbService],
})
export class AppModule {}
