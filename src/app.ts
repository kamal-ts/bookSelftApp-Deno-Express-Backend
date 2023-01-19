import express, { Express, Request, Response } from "npm:express@^4.17";
import route from './route.ts'
const app: Express = express();
const port = 5000;

app.use(express.json());
app.use(route);
app.get("/", (_req: Request, res: Response): void => {
    res.send("Hello World");
});

app.listen(port, (): void => {
    console.log(`listening on http://localhost:${port}/`);
});