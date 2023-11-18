import { Request, Response } from 'express';
import { UsersService } from './users.service';

export class UsersController {
  private readonly usersService: UsersService;

  constructor(usersService?: UsersService) {
    this.usersService = usersService || new UsersService();
    this.index = this.index.bind(this);
    this.store = this.store.bind(this);
    this.show = this.show.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  index(req: Request, res: Response) {
    const users = this.usersService.index();
    return res.json(users);
  }

  store(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const newUser = this.usersService.create({ name, email, password });
    return res.json(newUser);
  }

  show(req: Request, res: Response) {
    return res.json({ message: 'User show' });
  }

  update(
    req: Request<
    { id: number },
    any,
    { name: string; email: string; password: string }
    >,
    res: Response,
  ) {
    const updatedUser = this.usersService.update(req.params.id, req.body);
    return res.json(updatedUser);
  }

  delete(req: Request<{ id: number }>, res: Response) {
    const deletedUser = this.usersService.delete(req.params.id);
    return res.json(deletedUser);
  }
}
