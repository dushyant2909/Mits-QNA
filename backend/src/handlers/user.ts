import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { createJWT } from '../modules/auth';

const prisma = new PrismaClient();

export const signUp = async (req: any, res: any) => {
    const hash = await bcrypt.hash(req.body.password, 5);
    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: hash,
        },
    });
    const token = createJWT(user)
    res.json({ token });
}

export const logIn = async (req: any, res: any) => {
    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username
        }
    })
    if (!user) {
        res.status(401)
        res.send({ message: 'Invalid username' })
        return
    }
    const isValid = await bcrypt.compare(req.body.password, user.password)
    if (!isValid) {
        res.status(401)
        res.json({ message: 'Invalid password' })
        return
    }
    const token = createJWT(user)
    res.json({
        message: 'Success',
        token: token
    })
}