import {Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import {IsEnum} from "class-validator";
import {ArticleTypeEnum} from "./articles.enum";

@Entity({ name: 'articles' })
export class Article {
    @PrimaryColumn('varchar', { length: 9 })
    id: string;

    @Column()
    header: string;

    @Column()
    article: string;

    @Column({
        type: 'enum',
        enum: ArticleTypeEnum,
        default: ArticleTypeEnum.BLOG
    })
    type: ArticleTypeEnum;

    @Column({ name: 'image_url' })
    imageUrl: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
