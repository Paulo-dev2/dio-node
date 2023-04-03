import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
    userService: UserService;

    constructor(
        userService = new UserService()
    ){
        this.userService = userService;
    }

    createUser = (req: Request, res: Response) => {
        const user = req.body;
        const keys = Object.keys(user);
        const response = keys.includes('name') && keys.includes('email')
        if (!response) return res.status(400).json({error:'Não foi passado os parametros exatos'})
        this.userService.createUser(user.name, user.email)
        return res.status(201).json({success: true})
    }

    getAllUsers = (req: Request, res: Response) => {
        const users = this.userService.getAllUsers();
        return res.status(200).json(users)
    }

    deleteUser = (req: Request, res: Response) => {
        const users = req.body;
        const response = this.userService.deleteUser(users.email);
        if(response)
            return res.status(200).json({success: "Usuario apagado com sucesso"})
        else
            return res.status(400).json({error: "Não existe este email"})
    }
}