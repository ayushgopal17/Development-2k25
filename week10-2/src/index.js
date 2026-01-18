"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const pg_1 = require("pg");
const adapter_pg_1 = require("@prisma/adapter-pg");
require("dotenv/config");
//  Postgres pool
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
});
//  Prisma adapter
const adapter = new adapter_pg_1.PrismaPg(pool);
//  PrismaClient WITH adapter (THIS IS THE FIX)
const prisma = new client_1.PrismaClient({ adapter });
async function insertUser(username, password, name, lastName) {
    const res = await prisma.user.create({
        data: {
            email: username,
            passqord: password, // schema me abhi passqord hi hai
            name,
            lastName,
        },
        select: {
            id: true,
            passqord: true,
            name: true
        }
    });
    console.log(res);
}
insertUser("Ayush0@gmail.com", "password", "Ayush", "Gopal");
