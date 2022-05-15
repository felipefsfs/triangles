import express from "express";

import { resolve_triangle } from "./service/triangle_calc.js";
import { add, get_history} from "./model/triangle_history.js";

export const router = express.Router();

router.get('/', (req, res) => {
    res.send(get_history());
})

router.post('/', express.json(), (req, res) => {
    const { length1, length2, length3 } = req.body;
    const result = resolve_triangle(length1, length2, length3);
    add([length1, length2, length3], result);
    res.send({ result });
});