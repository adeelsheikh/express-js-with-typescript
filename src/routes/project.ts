import express from "express";
import { Request, Response } from "express";
import projectSvc from "../services/ProjectService";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    projectSvc.getAll(res);
});

router.get("/:id", (req: Request, res: Response) => {
    projectSvc.get(req, res);
});

router.post("/", (req: Request, res: Response) => {
    projectSvc.post(req, res);
});

router.put("/:id", (req: Request, res: Response) => {
    projectSvc.put(req, res);
});

router.delete("/:id", (req: Request, res: Response) => {
    projectSvc.remove(req, res);
});

export default router;
