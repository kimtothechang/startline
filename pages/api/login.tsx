import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../libs/server/client';
import withHandler from '../../libs/server/withHandler';
import { withApiSession } from '../../libs/server/withSession';

type Data = {
  ok: boolean;
  errorMessage?: string;
};
async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { email, pw } = req.body;
  const errorMessage = '아이디 혹은 비밀번호를 확인해주세요.';

  const existUser = await client?.user.findUnique({
    where: {
      email,
    },
  });

  if (!existUser) {
    console.log('no user');
    return res.json({ ok: false, errorMessage });
  }

  if (existUser.password !== pw) {
    console.log('different pw');
    return res.json({ ok: false, errorMessage });
  }

  req.session.user = {
    id: existUser.id,
  };
  await req.session.save();

  return res.json({
    ok: true,
  });
}

export default withApiSession(withHandler({ methods: ['POST'], handler, isPrivate: false }));
