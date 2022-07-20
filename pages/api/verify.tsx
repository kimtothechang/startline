import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../libs/server/client';
import smtpTransport from '../../libs/server/email';

interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

interface UserType {
  name: string;
  email: string;
  pw: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const { email } = req.body;
  const payload = Math.floor(10000 + Math.random() * 900000) + '';

  if (!email) res.json({ ok: false });

  const token = await client.token.create({
    data: {
      payload,
    },
  });

  console.log(email);
  console.log(token);
  // const mailOptions = {
  //   from: 'balddevchango@naver.com',
  //   to: email,
  //   subject: 'Login Authentication Mail',
  //   text: `Login Code: ${payload}`,
  //   html: `Login Code: <strong>${payload}</strong>`,
  // };
  // const result = smtpTransport.sendMail(mailOptions, (error, responses) => {
  //   if (error) {
  //     console.log(error);
  //     return null;
  //   } else {
  //     console.log(responses);
  //     return null;
  //   }
  // });
  // smtpTransport.close();
  // console.log(result);

  res.json({
    ok: false,
    token,
  });
}
