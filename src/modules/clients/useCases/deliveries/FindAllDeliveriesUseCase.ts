import { prisma } from '../../../../database/prismaClient';

export class FindAllDeliveriesUseCase {

    async execute(id_client: string) {
        return await prisma.clients.findMany({
            where: { id: id_client },
            select: { deliveries: true, id: true, username: true }
        })
    }

}