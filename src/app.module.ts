import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from '@controllers/products/products.controller';
import { CategoriesController } from '@controllers/categories/categories.controller';
import { ProductsService } from '@services/products/products.service';
import { AuthModule } from '@modules/auth/auth.module';
import { UsersModule } from '@modules/users/users.module';
import { UsersService } from '@services/users/users.service';
import { AuthGuard } from '@services/auth/auth-guard.service';
import { UsersController } from '@controllers/users/users.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

require('dotenv');

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        autoLoadEntities: true,
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    UsersController,
  ],
  providers: [AppService, ProductsService, UsersService, AuthGuard],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
