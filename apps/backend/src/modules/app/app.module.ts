import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from '../admins/admin.module';
import { TokensModule } from '../tokens/tokens.module';
import { ArticlesModule } from "../articles/articles.module";
import { MemesModule } from '../memes/memes.module';

// for test
console.log('POSTGRES_HOST: ', process.env.POSTGRES_HOST)
console.log('POSTGRES_PORT: ', process.env.POSTGRES_PORT)
console.log('POSTGRES_DB: ', process.env.POSTGRES_DB)
console.log('POSTGRES_USER: ', process.env.POSTGRES_USER)
console.log('POSTGRES_PASSWORD: ', process.env.POSTGRES_PASSWORD)

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST || 'localhost',
            port: parseInt(process.env.POSTGRES_PORT) || 5432,
            username: process.env.POSTGRES_USER || 'postgres',
            password: process.env.POSTGRES_PASSWORD || 'password',
            database: process.env.POSTGRES_DB || 'nikantipin',
            entities: ['dist/**/**.entity{.ts,.js}'],
            autoLoadEntities: true,
        }),
        AdminModule,
        TokensModule,
        ArticlesModule,
        MemesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
