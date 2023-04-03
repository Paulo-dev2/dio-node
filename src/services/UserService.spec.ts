import { IUser, UserService } from "./UserService"

describe('User Service', () => {
    const mockDb: IUser[] = []
    const userService: UserService = new UserService(mockDb);

    it('Deve Adicionar um novo usuario', () => {
        const mockConsole = jest.spyOn(global.console, 'log');
        userService.createUser('Alfredo', 'alfredo@gmail.com');
        expect(mockConsole).toHaveBeenCalledWith('DB Atualizado', mockDb);
    });
});