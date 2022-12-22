import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';
import { CreateUserType } from 'src/utils/types';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  fetchUsers() {}

  createUser(userDetails: CreateUserType): Promise<any> {
    try {
      const newUser = this.userRepository.create({
        ...userDetails,
        createdAt: new Date(),
      });

      return this.userRepository.save(newUser);
    } catch (err) {
      console.log('ehh');
    }
  }
}
