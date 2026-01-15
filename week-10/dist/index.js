"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:npg_NO0HPUALz5iy@ep-super-band-ada4eef1-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
});
async function createUsersTable() {
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log(result);
}
createUsersTable();
//# sourceMappingURL=index.js.map