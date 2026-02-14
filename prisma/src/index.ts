import { PrismaClient } from "./generated/prisma/client.js";


const prisma = new PrismaClient()

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  
}