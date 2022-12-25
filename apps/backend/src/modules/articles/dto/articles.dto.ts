import { ApiProperty } from '@nestjs/swagger';
import {IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString} from 'class-validator';
import {ArticleTypeEnum} from "../articles.enum";

export class ArticleDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    header: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    article: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(ArticleTypeEnum)
    type: ArticleTypeEnum;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    imageUrl: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    createdAt: string;
}

export class GetArticlesListQueryDto {
    @ApiProperty({ description: '', required: false })
    @IsOptional()
    type?: string;
}