export interface IUser {
    name: string
    email: string
}

const db = [
    { 
        name: 'Teste',
        email: 'teste@example.com' 
    },
]

export class UserService{
    db: IUser[]

    constructor(
        database = db
    ) {
        this.db = database
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        this.db.push(user);
        console.log('DB Atualizado', this.db);
    }

    getAllUsers = () => {
        return this.db;
    }

    deleteUser = (email: string) => {
        const index = this.db.findIndex( user => user.email === email);
        if (index !== -1) {
            this.db.splice(index, 1)
            return true
        }
        return false;
    }
}