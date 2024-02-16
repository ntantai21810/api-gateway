import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class PostService implements OnModuleInit {
  constructor(
    @Inject('POST_SERVICE') private readonly postClient: ClientKafka,
  ) {}

  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll() {
    return this.postClient.send('get_post', '');
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }

  onModuleInit() {
    this.postClient.subscribeToResponseOf('get_post');
  }
}
