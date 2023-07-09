import { Request, Response } from 'express';
import { UsersService } from './users.service';

export class UsersController {
  constructor(
    private readonly usersService: UsersService = new UsersService(),
  ) {}

  index(req: Request, res: Response) {
    return res.json({ message: 'User List' });
  }

  store(req: Request, res: Response) {
    return res.json(
      this.usersService.create({
        name: 'John',
        email: 'john@test.com',
        password: '123',
      }),
    );
  }

  show(req: Request, res: Response) {
    return res.json({ message: 'User show' });
  }

  update(req: Request, res: Response) {
    return res.json({ message: 'User updated' });
  }

  delete(req: Request, res: Response) {
    return res.json({ message: 'User deleted' });
  }
}
