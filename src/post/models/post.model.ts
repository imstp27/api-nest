import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Post {
  @ObjectIdColumn()
  @Field(() => ID)
  _id: string

  @Column()
  @Field(() => String)
  title: string

  @Column()
  @Field(() => String)
  subtitle: string

  @Column()
  @Field(() => String)
  content: string

  @Column()
  @Field(() => String)
  author: string

  @Column()
  @Field(() => Date, { nullable: true })
  createdOn?: Date
}