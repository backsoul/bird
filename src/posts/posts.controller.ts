import { Body, Controller, Get, Post } from '@nestjs/common';
import { createPostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('/api/v1')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('/obtain-posts')
  findAll() {
    return this.postsService.findAll();
  }

  @Post('/create')
  create(@Body() data: any) {
    const post: createPostDto = { content: '', userName: '', userUrlPhoto: '' };
    const { payload } = JSON.parse(data.payload);
    console.log(payload);
    post.content = payload.content;
    post.userName = data.user.Name;
    post.userUrlPhoto = data.user.Picture;
    return this.postsService.create(post);
  }
}
