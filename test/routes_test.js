import assert from "assert/strict";
import fetch from 'node-fetch';

import { port } from "../index.js";

const url = `http://localhost:${port}/api/v1/`;

describe("Testing Routes", () => {
    it("Main Route", () => {
        return fetch(url, { 
            method: "GET"
        }).then((response) => {
            return response.json();
        }).then((data) => {
            assert(Array.isArray(data), "History");
        });
    });
    it("Post Route", () => {
        return fetch(url, { 
            method: "post",
            body: JSON.stringify({ length1: 3, length2: 5, length3: 4 }),
            headers: {'Content-Type': 'application/json'}
        }).then((response) => {
            return response.json();
        }).then((data) => {
            assert(data.result === "scalene", "Calculation Valid");
        });
    });
    it("Post Route Invalid", () => {
        return assert.rejects(fetch(url, { 
            method: "post",
            body: JSON.stringify({}),
            headers: {'Content-Type': 'application/json'}
        }).then((response) => {
            return response.json();
        }).then(() => {
            assert.fail("Calculation Invalid");
        }));
    });
});

