import {Router} from "express";
import {UsersController} from "./users.controller";

const router = Router();

const userController = new UsersController();
router.get('/', userController.index)
    .post('/', userController.store)
    .get('/:id', userController.show)
    .patch('/', userController.update)
    .delete('/', userController.delete)
export default router;