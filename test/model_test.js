import assert from "assert/strict";

import { 
    get_history, add
} from "../model/index.js";

describe("Testing Model", () => {
    it("Scan History", () => {
        return get_history().then((data) => {
            assert(Array.isArray(data), "History data");
        });
    });
    it("Add new data", () => {
        return add([3, 5, 4], "scalene").then((status) => {
            assert(status === 200, "Insert Failed");
        });
    });
});
