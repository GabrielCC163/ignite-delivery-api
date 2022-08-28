import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../database/prismaClient';

interface IAuthenticateDeliveryman {
    username: string;
    password: string;
}

export class AuthenticateDeliverymanUseCase {

    async execute({ username, password }: IAuthenticateDeliveryman) {
        const deliveryman = await prisma.deliverymen.findFirst({ where: { username } });
        if (!deliveryman) throw new Error('Invalida username or password!');

        const passwordMatch = await compare(password, deliveryman.password);
        if (!passwordMatch) throw new Error('Invalid username or password!');

        const token = sign({ username }, "2fe4f76470d463771f1e5f2d394803d4", { subject: deliveryman.id, expiresIn: '1d' })
        return { token };
    }

}