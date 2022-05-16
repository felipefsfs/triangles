import express from "express";

import { router } from "./routes.js";

const app = express();
const port = 3000;

export { app, port };

app.use('/api/v1/', router);

app.listen(port, () => {
    console.log(`Listening: http://localhost:${port}/`)
});