import { Request, Response } from 'express';
import { FindDeliverymanDeliveriesUseCase } from './FindDeliverymanDeliveriesUseCase';

export class FindDeliverymanDeliveriesController {

    async handle(req: Request, res: Response) {
        const findAllDeliveriesUseCase = new FindDeliverymanDeliveriesUseCase();
        const deliveries = await findAllDeliveriesUseCase.execute(req.id_deliveryman);
        return res.json(deliveries);
    }
}