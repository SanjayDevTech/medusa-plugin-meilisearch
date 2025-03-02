import { MedusaRequest, MedusaResponse } from '@biryanihouse/framework'

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  res.sendStatus(200)
}
