const request = require("supertest");
const app = require("../app");
const seed = require("../db/seed");
const testData = require("../db/data/test-data");
const mongoose = require('mongoose');
const connection = require("../db");

beforeEach(() => {
    connection();
    return seed(testData)
});

afterAll(() => mongoose.connection.close());

describe('users', () => {
    describe('GET', () => {
        test('status: 200 responds with an array of users', () => {
            return request(app).get("/api/users").expect(200).then(({body}) => {
                expect(body.users).toEqual([
                    { _id: expect.any(String), name: "test1", workplace: "testA", interests: ["a", "b"] },
                    { _id: expect.any(String), name: "test2", workplace: "testB", interests: ["c", "a"] },
                ]);
            });
        });
    });
    describe('POST', () => {
        test('status: 201 responds with the newly created user', () => {
            const newUser = {
                name: "test3",
                workplace: "testC",
                interests: ["a", "c"]
            };
            return request(app).post("/api/users").send(newUser).expect(201).then(({body}) => {
                expect(body.user).toMatchObject({
                    _id: expect.any(String),
                    name: "test3",
                    workplace: "testC",
                    interests: ["a", "c"]
                });
            });
        });
        // test('status: 400 for invalid input', () => {
        //     const newUser = {
        //         name: 12,
        //         workplace: "testC"
        //         // IT CREATES AN ARRAY WHAT!!
        //     };
        //     return request(app).post("/api/users").send(newUser).expect(400).then(({body}) => {
        //         expect(body.msg).toBe("bad request");
        //     });
        // });
    });
});