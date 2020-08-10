import { Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './models/post.model';
import { InputPost } from './dto/post.input';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: MongoRepository<Post>,
  ) { }

  async findAll(): Promise<Post[] | null> {
    return this.postRepository.find();
  }

  async create(input: InputPost): Promise<Post> {
    const post = new Post();
    post.title = input.title
    post.subtitle = input.subtitle
    post.content = input.content
    post.author = input.author
    post.createdOn = new Date()
    return this.postRepository.save(post);
  }
}
