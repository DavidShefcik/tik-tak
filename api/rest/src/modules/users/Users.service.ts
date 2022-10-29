import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument } from '~/utils/mongoose/schemas';
import { CreateUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  public async getUsers(): Promise<User[]> {
    return await this.userModel.find({});
  }

  public createUser(args: CreateUserDto): Promise<User> {
    const newUser = new this.userModel({
      ...args,
      hashedPassword: 'password',
    });

    return newUser.save();
  }
}
