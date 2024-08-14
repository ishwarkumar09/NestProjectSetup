import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  constructor (@InjectRepository(User) private readonly userRepository : Repository<User>){

  }
  create(createUserDto: CreateUserDto):Promise<User> {
    let user: User = new User();
    user.firstname = createUserDto.firstname;
    user.lastname = createUserDto.lastname;
    user.age = createUserDto.age;
    return this.userRepository.save(user)
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let user: User = new User();
    user.firstname = updateUserDto.firstname;
    user.lastname = updateUserDto.lastname;
    user.age = updateUserDto.age;
    user.id = id;


    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
