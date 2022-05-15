import assert from "assert/strict";

import { 
    resolve_triangle, is_triangle, triangle_type 
} from "../service/triangle_calc.js";

describe("Testing Service", () => {
    it("should identify valid scalene triangle", () => {
        assert.equal(resolve_triangle(3, 4, 5), "scalene", "scalene triangle passed to service");
    });    
    it("should throw an Error when invalid triangle received", () => {
        assert.throws(() => resolve_triangle(3, 4, 25), "Invalid triangle passed to service");
    });   
});

describe("function is_triangle()", () => {
    it("should detect valid triangle", () => {
        assert(is_triangle(3, 4, 5), "Pythagorean triple");
    });    
    it("should detect invalid triangles", () => {
        const data = [
            [],
            [NaN, 4, 5],
            ["3", 4, 5],
            [true, 4, 5],
            [Number.POSITIVE_INFINITY, 4, 5],
            [3, 4, 25]
        ];
        data.forEach(arr => assert(!is_triangle(...arr)));
    });   
});

describe("function triangle_type()", () => {
    it("should identify equilateral triangle", () => {
        assert.equal(triangle_type(3, 3, 3), "equilateral");
    });    
    it("should identify isosceles triangle", () => {
        assert.equal(triangle_type(5, 5, 6), "isosceles");
    });    
    it("should identify scalene triangle", () => {
        assert.equal(triangle_type(3, 4, 5), "scalene");
    });    
});