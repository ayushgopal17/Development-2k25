"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// write a function to create a users table in your database.
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
});
async function insertUserData(username, password, email) {
    await client.connect();
    const result = await client.query(`
       INSERT INTO users (username,password,email)
       VALUES ($1,$2,$3)`, [username, email, password]);
    console.log(result);
}
insertUserData("ayusfffh", "34ff3", "3f");
//# sourceMappingURL=index.js.map