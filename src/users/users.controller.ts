import {Request, Response} from "express";

export class UsersController {

    index(req: Request, res: Response) {
        return res.json({message: "Hello World"});
    }

    store(req: Request, res: Response) {
        return res.json({message: "User created"});
    }

    show(req: Request, res: Response) {
        return res.json({message: "User show"});
    }

    update(req: Request, res: Response) {
        return res.json({message: "User updated"});
    }

    delete(req: Request, res: Response) {
        return res.json({message: "User deleted"});
    }
}