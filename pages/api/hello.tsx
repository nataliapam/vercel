// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
type Res = { name: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Res>
) {
  res.status(200).json({ name: "John Doe" });
}
