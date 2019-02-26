import { Request, Response } from "express";
import Project from "../schemas/Project";

class ProjectService {
    async getAll(res: Response) {
        const projects = await Project.find().sort("name");

        res.send(projects);
    }

    async get(req: Request, res: Response) {
        const project = await Project.findById(req.params.id);

        if (project === null) {
            this.sendNotFoundResult(res);
        }

        res.send(project);
    }

    async post(req: Request, res: Response) {
        try {
            let project = new Project({
                code: req.body.code,
                name: req.body.name,
                group: req.body.group,
                company: req.body.company,
                workerBusTime: req.body.workerBusTime,
                restrictedTime: req.body.restrictedTime,
                isBlocked: req.body.isBlocked
            });

            project = await project.save();

            res.send(project);
        } catch (error) {
            this.sendBadRequestResult(res, error);
        }
    }

    async put(req: Request, res: Response) {
        try {
            const project = await Project.findByIdAndUpdate(req.params.id, {
                code: req.body.code,
                name: req.body.name,
                group: req.body.group,
                company: req.body.company,
                workerBusTime: req.body.workerBusTime,
                restrictedTime: req.body.restrictedTime,
                isBlocked: req.body.isBlocked
            }, {
                new: true
            });

            if (project === null) {
                this.sendNotFoundResult(res);
            }

            res.send(project);
        } catch (error) {
            return this.sendBadRequestResult(res, error);
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const project = await Project.findByIdAndRemove(req.params.id);

            if (project === null) {
                return this.sendNotFoundResult(res);
            }

            res.send(project);
        } catch (error) {
            return this.sendBadRequestResult(res, error);
        }
    }

    private sendBadRequestResult(res: Response, error: any) {
        return res.status(400).send(error);
    }

    private sendNotFoundResult(res: Response) {
        return res.status(404).send("The project with the given ID was not found.");
    }
}

export default new ProjectService();
