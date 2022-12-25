import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './articles.entity';
import { getPagination, paginationParams } from '../../libs/pagination';
import { generate } from 'shortid';
import { plainToClass } from "class-transformer";
import { ArticleDto, GetArticlesListQueryDto } from './dto/articles.dto';
import { PaginationQueryDto } from '../../common/base.dto';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Article)
        private articleRepository: Repository<Article>,
    ) {
    }
    async createArticle(article: ArticleDto) {
        try {
            const id = generate();
            const createdArticle = await this.articleRepository.save({ id, ...article });

            return plainToClass(ArticleDto, createdArticle);
        } catch(e) {
            throw new BadRequestException(e.message)
        }
    }

    async getArticleById(id: string) {
        try {
            const article = await this.articleRepository.findOne({ where: { id } });
            if (!article) throw new NotFoundException('Article doesn\'t exists');

            return plainToClass(ArticleDto, article);
        } catch(e) {
            throw new BadRequestException(e.message)
        }
    }

    async updateArticleById(id: string) {
        try {
            const article = await this.articleRepository.findOne({ where: { id } });
            if (!article) throw new NotFoundException('Article not found');

           const updatedArticle = await this.articleRepository.save({ id });

            return plainToClass(ArticleDto, updatedArticle);
        } catch(e) {
            throw new BadRequestException(e.message)
        }
    }

    async deleteArticleById(id: string) {
        try {
            const article = await this.articleRepository.findOne({ where: { id } });
            if (!article) throw new NotFoundException('Article doesn\'t exists');

            await this.articleRepository.delete({ id });
        } catch(e) {
            throw new BadRequestException(e.message)
        }
    }

    async getArticles(queryParams: GetArticlesListQueryDto, pagination: PaginationQueryDto) {
        try {
            const query : Record<string, unknown> = {}
            if (queryParams.type) query.type = queryParams.type;

            const { skip, limit } = paginationParams(pagination.page, pagination.limit);

            const [items, count] = await this.articleRepository.findAndCount({
                where: query,
                take: limit,
                skip,
            });

            return { items, meta: getPagination(pagination, count) }
        } catch(e) {
            throw new BadRequestException(e.message)
        }
    }
}
