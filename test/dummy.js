import assert from "assert/strict";

describe("Testing Dummy", () => {
    it("Test ok", () => {
        assert(1 === 1, "not ok n = n");
    });    
    it("Test fail", () => {
        assert(1 === 2, "not ok n = n");
    });
});