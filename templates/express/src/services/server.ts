import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { PORT } from './config';
import { LOG } from './util';


export class Server {
    app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.listen();
    }

    config() {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    routes() {

    }

    listen() {
        this.app.listen(PORT, () => {
            LOG('Listening on port ' + PORT);
        })
    }
}




