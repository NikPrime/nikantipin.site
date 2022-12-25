import { IsArray } from 'class-validator';
import { MemeDto } from './meme.dto';
import { PaginationDto } from '../../../common/base.dto';
import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class MemesArrayDto {
 @Expose()
 @IsArray()
 items: Array<MemeDto>

 @Expose()
 @Type(() => PaginationDto)
 meta: PaginationDto;
}