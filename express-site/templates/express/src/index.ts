import dotenv from 'dotenv';
dotenv.config({
    path: '.env'
});

import { Server } from './services/server';
new Server();
