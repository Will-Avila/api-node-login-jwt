import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Acesso negado' });
    }

    try {
        const decodedToken = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET);

        req.userId = decodedToken.id;
    } catch (error) {
        res.status(401).json({ message: 'Token inválido' });
    }

    next();
}

export default auth;