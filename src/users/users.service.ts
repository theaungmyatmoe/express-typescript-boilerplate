import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export class UsersService {
  index() {
    return 'This is the user service!';
  }

  create(createUserDto: CreateUserDto) {
    return 'User created successfully!';
  }

  show(id: number) {
    return `This is the user ${id}`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `User ${id} updated successfully!`;
  }

  delete(id: number) {
    return `User ${id} deleted successfully!`;
  }
}