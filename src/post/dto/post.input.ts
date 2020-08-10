import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class InputPost {
  @Field(() => String)
  title: string

  @Field(() => String)
  subtitle: string

  @Field(() => String)
  content: string

  @Field(() => String)
  author: string
}