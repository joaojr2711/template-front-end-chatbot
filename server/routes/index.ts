import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/health-check', (req: Request, res: Response) => res.status(200).send({ status: 200, msg: "Ok" }));

export const Routers: Router = router;