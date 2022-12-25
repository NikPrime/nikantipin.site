import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsEnum, IsOptional, IsString} from 'class-validator';
import {ArticleTypeEnum} from '../articles.enum';

export class UpdateArticleDto {
    @ApiProperty()
    @IsOptional()
    @IsEmail()
    header?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    article?: string;

    @ApiProperty()
    @IsOptional()
    @IsEnum(ArticleTypeEnum)
    type?: ArticleTypeEnum;

    @ApiProperty()
    @IsOptional()
    @IsString()
    imageUrl?: string;
}