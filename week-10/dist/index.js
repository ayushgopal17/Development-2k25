"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const pg_1 = require("pg");
async function insertData(username, email, password) {
    const client = new pg_1.Client({
        connectionString: "postgresql://neondb_owner:npg_NO0HPUALz5iy@ep-super-band-ada4eef1-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
    });
    try {
        await client.connect(); // Ensure client connection is established
        // Use parameterized query to prevent SQL injection
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
        const values = [username, email, password];
        const res = await client.query(insertQuery, values);
        console.log('Insertion success:', res); // Output insertion result
    }
    catch (err) {
        console.error('Error during the insertion:', err);
    }
    finally {
        await client.end(); // Close the client connection
    }
}
// Example usage
insertData('username5', 'user5@example.com', 'user_password').catch(console.error);
//# sourceMappingURL=index.js.map