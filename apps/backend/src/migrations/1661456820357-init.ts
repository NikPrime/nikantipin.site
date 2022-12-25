import { MigrationInterface, QueryRunner } from "typeorm";

export class init1661456820357 implements MigrationInterface {
    name = 'init1661456820357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "admins" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_e3b38270c97a854c48d2e80874e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."articles_type_enum" AS ENUM('blog', 'algorithm')`);
        await queryRunner.query(`CREATE TABLE "articles" ("id" character varying(9) NOT NULL, "header" character varying NOT NULL, "article" character varying NOT NULL, "type" "public"."articles_type_enum" NOT NULL DEFAULT 'blog', "image_url" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "articles"`);
        await queryRunner.query(`DROP TYPE "public"."articles_type_enum"`);
        await queryRunner.query(`DROP TABLE "admins"`);
    }

}
