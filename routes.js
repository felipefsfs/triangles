import express from "express";

import { INVALID_MESSAGE, resolve_triangle } from "./service/triangle_calc.js";
import { add, get_history} from "./model/index.js";

export const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const history = await get_history();
        res.send(history);
    } catch(e) {
        next(e);
    }
});

router.post('/', express.json(), async (req, res, next) => {
    try {
        const { length1 = 0, length2 = 0, length3 = 0 } = req.body;
        const result = resolve_triangle(length1, length2, length3);
        await add([length1, length2, length3], result);
        res.send({ result });
    } catch(e) {
        next(e);
    }
});

router.use((error, req, res, next) => {
    console.error(error)
    if (error.message === INVALID_MESSAGE) {
        res.status(400).send(error)
    } else{
        res.status(500).send(error)
    }
});
