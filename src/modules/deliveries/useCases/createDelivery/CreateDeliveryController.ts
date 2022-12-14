import { Request, Response } from 'express';
import { CreateDeliveryUseCase } from './CreateDeliveryUseCase';

export class CreateDeliveryController {

    async handle(req: Request, res: Response) {
        const { item_name } = req.body;

        const createDeliveryUseCase = new CreateDeliveryUseCase();
        const delivery = await createDeliveryUseCase.execute({
            id_client: req.id_client,
            item_name
        });

        return res.json(delivery);
    }

}