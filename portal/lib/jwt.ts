import jwt from 'jsonwebtoken';

export const signToken = (user: any) => {
  return jwt.sign({ userId: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET!, {
    expiresIn: '7d',
  });
};


export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!);
  } catch (error) {
    return null;
  }
};

export const getUserFromToken = (req: Request) => {
  const token = req.headers.get('Authorization')?.split(' ')[1];
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return decoded;
  } catch {
    return null;
  }
};
