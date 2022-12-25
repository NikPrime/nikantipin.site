import { IsOptional } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { MetaData } from './base.interfaces';

@Exclude()
export class PaginationDto implements MetaData {
    @Expose()
    @IsOptional()
    limit: number;

    @Expose()
    @IsOptional()
    page: number;

    @Expose()
    @IsOptional()
    pages: number;

    @Expose()
    @IsOptional()
    total: number;
}

export class PaginationQueryDto {
    @ApiProperty({ description: 'rows per page', required: false })
    @IsOptional()
    limit?: number;

    @ApiProperty({ description: 'current page', required: false })
    @IsOptional()
    page?: number;
}