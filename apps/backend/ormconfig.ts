import { DataSource } from 'typeorm';
import { join } from 'path';

const {POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD} = process.env;

// for test
console.log('POSTGRES_HOST: ', POSTGRES_HOST)
console.log('POSTGRES_PORT: ', POSTGRES_PORT)
console.log('POSTGRES_DB: ', POSTGRES_DB)
console.log('POSTGRES_USER: ', POSTGRES_USER)
console.log('POSTGRES_PASSWORD: ', POSTGRES_PASSWORD)

export const connectionSource = new DataSource({
        type: 'postgres',
        host: POSTGRES_HOST || 'localhost',
        port: parseInt(POSTGRES_PORT) || 5432,
        username: POSTGRES_USER || 'postgres',
        password: POSTGRES_PASSWORD || 'password',
        database: POSTGRES_DB || 'nikantipin',
        migrations: ['src/migrations/*.ts'],
        entities: [join(__dirname, 'src', 'modules', '**', '*.entity{.ts,.js}'), join(__dirname, 'dist', 'modules', '**', '*.entity{.ts,.js}')],
    },
)