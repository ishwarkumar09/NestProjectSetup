import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // Fetch from environment variable
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Replace with your entities
      synchronize: true, // Set to false in production
    }),
    UserModule, 
    ],
  controllers: [],
  providers: [],
  exports:[]
})
export class AppModule {
  constructor(){
    console.log("App module")
  }
}
