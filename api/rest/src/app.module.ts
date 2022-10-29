import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';

import { UsersModule } from './modules/users/Users.module';

@Module({
  imports: [
    // Utils
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        PORT: Joi.number().default(8080),
        DATABASE_URL: Joi.string().uri({
          scheme: 'mongodb',
        }),
      }),
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL, {
      dbName: 'tik-tak',
    }),
    // Modules
    UsersModule,
  ],
  controllers: [],
})
export class AppModule {}
