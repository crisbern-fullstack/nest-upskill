import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'nest_upskill',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    BookmarkModule,
    CatsModule,
  ],
  controllers: [CatsController],
})
export class AppModule {}
