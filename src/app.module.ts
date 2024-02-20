import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { SocketGateWay } from './app.gateway';

@Module({
  imports: [PostModule, UserModule],
  controllers: [AppController],
  providers: [AppService, SocketGateWay],
})
export class AppModule {}
