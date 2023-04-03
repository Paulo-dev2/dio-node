import express from 'express';
import { router } from './routes';

class App {
    private server
    private route

    constructor(){
        this.server = express();
        this.server.listen(5000, () => console.log("Server run 2 !!"));
        this.route = this.routes()
    }

    public routes = () => {
        this.server.use(express.json())
        this.server.use(router)
    }
}

new App();