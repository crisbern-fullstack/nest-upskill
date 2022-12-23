import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';
import { CreateUserType, UpdateUserType } from 'src/utils/types';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  fetchUsers() {
    return this.userRepository.find();
  }

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

  updateUser(id: number, userDetails: UpdateUserType): Promise<any> {
    return this.userRepository.update({ id }, { ...userDetails });
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }
}
