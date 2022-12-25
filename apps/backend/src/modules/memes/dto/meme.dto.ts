import { IsDate, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class MemeDto {
    @Expose()
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    id: string;

    @Expose()
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    url: string;

    @Expose()
    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    createdAt: string;
}