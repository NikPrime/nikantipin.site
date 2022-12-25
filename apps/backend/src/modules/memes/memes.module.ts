import { Module } from '@nestjs/common';
import { MemesService } from './memes.service';
import { MemesController } from './memes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Memes } from './memes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Memes])],
  controllers: [MemesController],
  providers: [MemesService],
})
export class MemesModule {}
