import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export class UsersService {
  index() {
    return { message: 'Users List' };
  }

  create(createUserDto: CreateUserDto) {
    return {
      message: 'User created successfully!',
      data: createUserDto,
    };
  }

  show(id: number) {
    return `This is the user ${id}`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return {
      message: `User ${id} updated successfully!`,
      data: {
        id,
        ...updateUserDto,
      },
    };
  }

  delete(id: number) {
    return {
      message: `User ${id} deleted successfully!`,
    };
  }
}
