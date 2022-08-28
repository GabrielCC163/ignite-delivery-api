import { prisma } from '../../../../database/prismaClient';


interface IUpdateEndDate {
    id_delivery: string;
    id_deliveryman: string;
}

export class UpdateEndDateUseCase {

    async execute({ id_delivery, id_deliveryman }: IUpdateEndDate) {
        return await prisma.deliveries.updateMany({
            where: { id: id_delivery, id_deliveryman },
            data: { end_at: new Date() }
        });
    }

}