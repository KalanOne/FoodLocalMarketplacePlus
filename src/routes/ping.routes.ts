import { Request, Response, Router } from "express";

const router = Router();

// Para hacer ping al servidor
router.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

export default router;
