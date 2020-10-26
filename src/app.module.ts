import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module'
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: false,
      autoSchemaFile: 'schema.gql',
      debug: false,
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: '',
      entities: [join(__dirname, '**/**.model{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      logging: true,
    }),
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
