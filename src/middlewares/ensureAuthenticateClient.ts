import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticateClient(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({
        message: 'Missing token!'
    })

    const [, token] = authHeader.split(' ');

    try {
        const { sub } = verify(token, '2fe4f76470d463881f1e5f2d394803d4') as IPayload;
        req.id_client = sub;
        return next();
    } catch (error) {
        return res.status(401).json({
            message: 'Invalid token!'
        })
    }
}