import { Request, Response } from 'express';
import { AssignDeliverymanUseCase } from './AssignDeliverymanUseCase';

export class AssignDeliverymanController {

    async handle(req: Request, res: Response) {
        const { id_deliveryman } = req;
        const { id: id_delivery } = req.params;
        const assignDeliverymanUseCase = new AssignDeliverymanUseCase();

        const delivery = await assignDeliverymanUseCase.execute({
            id_deliveryman,
            id_delivery
        });

        return res.json(delivery);
    }
}