// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import withHandler from '../../libs/server/withHandler';
import client from '../../libs/server/client';

type Data = {
  ok: boolean;
};

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { name, email, password } = req.body;

  console.log(name, email, password);
  if (!(name && email && password)) {
    return res.status(400).json({ ok: false });
  }

  console.log('start to create');

  await client.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  console.log('created');

  return res.json({
    ok: true,
  });
}

export default withHandler({ methods: ['POST'], handler, isPrivate: false });
