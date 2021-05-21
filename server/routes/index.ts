import { Router, Request, Response } from 'express';

import WatsonController from "../controllers/watson.controller";

const router: Router = Router();

router.get('/health-check', (req: Request, res: Response) => res.status(200).send({ status: 200, msg: "Ok" }));

router.get('/session', WatsonController.sessionWatson);
router.post('/message', WatsonController.sendMessageWatson);

export const Routers: Router = router;