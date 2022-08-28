import { Router } from 'express';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';
import { AuthenticateClientController } from './modules/accounts/authenticateClient/AuthenticateClientController';
import { AuthenticateDeliverymanController } from './modules/accounts/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { FindAllDeliveriesController } from './modules/clients/useCases/deliveries/FindAllDeliveriesController';
import { AssignDeliverymanController } from './modules/deliveries/useCases/assignDeliveryman/AssignDeliverymanController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAvailableDeliveriesController } from './modules/deliveries/useCases/findAvailableDeliveries/FindAvailableDeliveriesController';
import { UpdateEndDateController } from './modules/deliveries/useCases/updateEndDate/UpdateEndDateController';
import { CreateDeliverymanController } from './modules/deliverymen/useCases/createDeliveryman/CreateDeliverymanController';
import { FindDeliverymanDeliveriesController } from './modules/deliverymen/useCases/deliveries/FindDeliverymanDeliveriesController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const findAvailableDeliveriesController = new FindAvailableDeliveriesController();
const assignDeliverymanController = new AssignDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllDeliveriesController = new FindAllDeliveriesController();
const findDeliverymanDeliveriesController = new FindDeliverymanDeliveriesController();
const updateEndDateController = new UpdateEndDateController();

routes.post('/clients', createClientController.handle);
routes.post('/clients/authenticate', authenticateClientController.handle);
routes.get('/clients/deliveries', ensureAuthenticateClient, findAllDeliveriesController.handle);

routes.post('/deliverymen', createDeliverymanController.handle);
routes.post('/deliverymen/authenticate', authenticateDeliverymanController.handle);
routes.get('/deliverymen/deliveries', ensureAuthenticateDeliveryman, findDeliverymanDeliveriesController.handle);

routes.post('/deliveries', ensureAuthenticateClient, createDeliveryController.handle);
routes.get('/deliveries/available', ensureAuthenticateDeliveryman, findAvailableDeliveriesController.handle);
routes.patch('/deliveries/assign-deliveryman/:id', ensureAuthenticateDeliveryman, assignDeliverymanController.handle);
routes.patch('/deliveries/update-enddate/:id', ensureAuthenticateDeliveryman, updateEndDateController.handle);

export { routes };