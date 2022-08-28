import { prisma } from '../../../../database/prismaClient';

interface IAssignDeliveryman {
    id_delivery: string;
    id_deliveryman: string;
}

export class AssignDeliverymanUseCase {

    async execute({ id_delivery, id_deliveryman }: IAssignDeliveryman) {
        return await prisma.deliveries.update({
            where: { id: id_delivery },
            data: { id_deliveryman }
        });
    }

}