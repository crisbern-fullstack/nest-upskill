import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { ExampleMiddleware } from './middlewares/example/example.middleware';
import { UserService } from './services/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddleware).forRoutes('user');
  }
}
