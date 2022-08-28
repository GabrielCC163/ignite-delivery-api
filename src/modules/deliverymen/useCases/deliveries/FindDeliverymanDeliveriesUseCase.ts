import { prisma } from '../../../../database/prismaClient';

export class FindDeliverymanDeliveriesUseCase {

    async execute(id_deliveryman: string) {
        return await prisma.deliverymen.findMany({
            where: { id: id_deliveryman },
            select: { deliveries: true, id: true, username: true }
        })
    }

}