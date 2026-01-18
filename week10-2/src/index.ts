import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import { tr } from "zod/v4/locales";


//  Postgres pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

//  Prisma adapter
const adapter = new PrismaPg(pool);

//  PrismaClient WITH adapter (THIS IS THE FIX)
const prisma = new PrismaClient({ adapter });

interface UpdateParams {
firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { username : username },
    data: {
      ,
      lastName
    }
  });
  console.log(res);
}

updateUser("admin1", {
    firstName: "new name",
    lastName: "singh"
})