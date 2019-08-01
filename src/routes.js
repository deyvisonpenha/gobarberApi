import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionControler.store);

routes.put('/users', UserController.update);

export default routes;