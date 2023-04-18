import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from '@controllers/products/products.controller';
import { CategoriesController } from '@controllers/categories/categories.controller';
import { ProductsService } from '@services/products/products.service';
import { AuthModule } from '@modules/auth/auth.module';
import { UsersModule } from '@modules/users/users.module';
import { UsersService } from '@services/users/users.service';
import { AuthGuard } from '@services/auth/auth-guard.service';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [AppService, ProductsService, UsersService, AuthGuard],
})
export class AppModule {}
