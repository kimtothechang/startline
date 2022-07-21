import { withIronSessionApiRoute } from 'iron-session/next';

interface cookieType {
  cookieName: string;
  password: string | undefined;
}

const cookieOptions = {
  cookieName: 'startlinesession',
  password: process.env.COOKIE_PASSWORD!,
};

export function withApiSession(fn: any) {
  console.log('withSession ing~')
  return withIronSessionApiRoute(fn, cookieOptions);
}
