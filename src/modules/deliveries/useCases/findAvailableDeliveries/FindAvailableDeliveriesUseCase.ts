import { prisma } from '../../../../database/prismaClient';

export class FindAvailableDeliveriesUseCase {

    async execute() {
        return await prisma.deliveries.findMany({ where: { end_at: null, id_deliveryman: null } });
    }
}