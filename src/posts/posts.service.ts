import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createPostDto } from './dto/create-post.dto';
import { Post } from './entities/post.entity';
@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  findAll(): Promise<Post[]> {
    return this.postsRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }

  findOne(id: string): Promise<Post> {
    return this.postsRepository.findOneBy({ id });
  }

  async create(createPostDto: createPostDto) {
    console.log(createPostDto);
    const post = await this.postsRepository.save(createPostDto);
    return post;
  }

  async remove(id: string): Promise<void> {
    await this.postsRepository.delete(id);
  }
}
