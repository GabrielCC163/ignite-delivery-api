import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticateDeliveryman(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({
        message: 'Missing token!'
    })

    const [, token] = authHeader.split(' ');

    try {
        const { sub } = verify(token, '2fe4f76470d463771f1e5f2d394803d4') as IPayload;
        req.id_deliveryman = sub;
        return next();
    } catch (error) {
        return res.status(401).json({
            message: 'Invalid token!'
        })
    }
}