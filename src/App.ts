import cors from "cors";
import express from "express";
import * as path from "path";

class App {
    public app: express.Application;
    public port: number;

    root = "./";

    constructor(port: number) {
        this.app = express();
        this.port = port;

        this.initializeMiddleware();
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
    private initializeMiddleware() {
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.static(path.join(this.root, "dist")));

        // server routes
        require("./core/routes")(this.app);
    }
}

export default App;
