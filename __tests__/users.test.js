const request = require('supertest');
const app = require('../app');
const seed = require("../db/seed");
const users = require("../db/data/test-data/users");
const client = require('../db/index');

beforeEach(() => seed(users));

afterAll(() => client.close());

describe('users model', () => { 
    // tests here
 })