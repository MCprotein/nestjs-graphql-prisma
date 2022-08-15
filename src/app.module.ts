import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './users/users.service';
import { PostsService } from './posts/posts.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserService, PostsService],
})
export class AppModule {}
