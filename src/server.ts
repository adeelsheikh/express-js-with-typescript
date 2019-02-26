import App from "./App";
import db from "./core/db";

db.connect();

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
new App(port).listen();