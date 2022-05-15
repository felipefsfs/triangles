import assert from "assert/strict";
import fetch from 'node-fetch';

import "../index.js";

describe("Testing Routes", () => {
    it("Main Route", () => {
        return fetch("http://localhost:3000/api/v1/", { 
            method: "GET"
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            assert(Array.isArray(data), "History");
        });
    });
    it("Post Route", () => {
        return fetch("http://localhost:3000/api/v1/", { 
            method: "post",
            body: JSON.stringify({ length1: 3, length2: 5, length3: 4 }),
            headers: {'Content-Type': 'application/json'}
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            assert(data.result === "scalene", "Calculation Valid");
        });
    });
    it("Post Route Invalid", () => {
        return assert.rejects(fetch("http://localhost:3000/api/v1/", { 
            method: "post",
            body: JSON.stringify({}),
            headers: {'Content-Type': 'application/json'}
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            assert(data.result === "scalene", "Calculation Invalid");
        }));
    });
});

