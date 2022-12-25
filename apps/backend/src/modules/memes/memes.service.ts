import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Memes } from './memes.entity';
import { CreateMemeDto } from './dto/create-meme.dto';
import { plainToClass } from 'class-transformer';
import { MemeDto } from './dto/meme.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { getPagination, paginationParams } from '../../libs/pagination';
import { MemesArrayDto } from './dto/meme-array.dto';
import { PaginationQueryDto } from '../../common/base.dto';

@Injectable()
export class MemesService {
    constructor(
        @InjectRepository(Memes)
        private memesRepository: Repository<Memes>
    ) {}

    async create(createMemeDto: CreateMemeDto) {
        const meme = await this.memesRepository.save(createMemeDto);

        return plainToClass(MemeDto, meme);
    }

    async findAll(pagination: PaginationQueryDto) {
        const { skip, limit } = paginationParams(pagination.page, pagination.limit);

        const [items, count] = await this.memesRepository.findAndCount({
            take: limit,
            skip,
            order: {
                createdAt: 'DESC',
            }
        })

        return plainToClass(MemesArrayDto, { items, meta: getPagination(pagination, count)});
    }
}
