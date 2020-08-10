import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { Post } from './models/post.model'
import { InputPost } from './dto/post.input'
import { PostService } from './post.service'

@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [Post])
  getPosts(): Promise<Post[] | null> {
    return this.postService.findAll()
  }

  @Mutation(() => Post)
  createPost(@Args('input') input: InputPost): Promise<Post> {
    return this.postService.create(input)
  }
}