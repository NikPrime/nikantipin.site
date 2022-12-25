import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UseGuards
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import { JwtGuard } from '../../auth/jwt-guard';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ArticleDto, GetArticlesListQueryDto } from './dto/articles.dto';
import { PaginationQueryDto } from '../../common/base.dto';

@ApiTags('articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: 200,
  })
  @ApiOperation({
    operationId: 'findArticleById',
    summary: 'find article by id'
  })
  @Get(':id')
  async getArticleById(@Param('id') articleId: string) {
    return this.articlesService.getArticleById(articleId);
  }

  @UseGuards(JwtGuard)
  @ApiOperation({
    operationId: 'createArticle',
    summary: 'create article'
  })
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: 201,
  })
  @Post()
  async createArticle(@Body() article: ArticleDto) {
    return this.articlesService.createArticle(article);
  }

  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: 200,
  })
  @ApiOperation({
    operationId: 'updateArticleById',
    summary: 'update article by id'
  })
  @Patch(':id')
  async updateArticleById(@Param('id') articleId: string, updateArticleDTO: UpdateArticleDto) {
    return this.articlesService.updateArticleById(articleId);
  }

  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: 200,
  })
  @ApiOperation({
    operationId: 'deleteArticleById',
    summary: 'delete article by id'
  })
  @Delete(':id')
  async deleteArticleById(@Param('id') articleId: string) {
    return this.articlesService.deleteArticleById(articleId);
  }

  @ApiOperation({
    operationId: 'findAllArticles',
    summary: 'find all articles'
  })
  @Get()
  async getArticles(@Query() query: GetArticlesListQueryDto, @Query() pagination: PaginationQueryDto) {
    return await this.articlesService.getArticles(query, pagination);
  }
}
