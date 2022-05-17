import express from "express";
import morgan from "morgan";

import { router } from "./routes.js";

const app = express();
const port = process.env.APP_PORT || 3000;

export { app, port };

app.use(morgan(':method :url :status :res[content-length] bytes - :response-time ms'));
app.use('/api/v1/', router);

app.listen(port, () => {
    console.log(`Listening: http://localhost:${port}/`);
});