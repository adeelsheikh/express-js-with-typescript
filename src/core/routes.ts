import express from "express";
import projects from "../routes/project";

module.exports = function (app: express.Application) {
    app.use(express.json());
    app.use("/api/projects", projects);
};
