import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../libs/server/client';
import withHandler from '../../libs/server/withHandler';
import { withApiSession } from '../../libs/server/withSession';

type Data = {
  ok: boolean;
  errorMessage?: string;
};
async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { token } = req.body;

  const existUser = await client?.user.findUnique({
    where: {
      id: req.session?.user?.id,
    },
  });

  if (!existUser) {
    console.log('no user');
    return res.json({ ok: false });
  }

  return res.json({
    ok: true,
  });
}

export default withApiSession(withHandler({ methods: ['POST'], handler, isPrivate: false }));
