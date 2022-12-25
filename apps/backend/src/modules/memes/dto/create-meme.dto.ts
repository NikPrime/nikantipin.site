import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMemeDto {
    @Expose()
    @ApiProperty()
    @IsString()
    url: string;
}