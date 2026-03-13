import { NextRequest } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const client = new PrismaClient({ adapter });

export async function GET() {
  return Response.json({
    name: "Ayush",
    email: "ayush@gmail.com"
  });
}

export async function POST(req: NextRequest){

    const body= await req.json();
   await client.user.create({
        data:{
            username: body.username,
            password: body.password
        }
    })
 console.log(body);

  return Response.json({
    message: "you are logged in!"
  })

}