import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { contact } from './contacts/entities/contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsController } from './contacts/contacts.controller';
import { ContactsService } from './contacts/contacts.service';
import { ContactsModule } from './contacts/contacts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env'
  }),TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/**/*.entity{.ts,.js}', contact],
    synchronize: true,
  }), ContactsModule, UsersModule],
  controllers: [AppController, ContactsController],
  providers: [AppService, ContactsService],
})
export class AppModule {}
