// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import client from '../../libs/server/client';

type Data = {
  name: string
  user:{
      name:string;
      email:string;
      password:string;
  }
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { id, pw} = req.body;

  console.log(id, pw);

  const user = await client.user.create({
      data:{
          name:id,
          email:id,
          password:pw,
      }
  })

  console.log(user);

  res.status(200).json({ name: 'newLogin', user })
}

export default handler;