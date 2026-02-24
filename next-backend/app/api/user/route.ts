// export function GET(){
//     return Response.json({
//         email:"Ayush@gmail.com",
//         name: "Ayush"
//     })

// }

// export function POST(){
//     return Response.json({
//         email:"Ayush@gmail.com",
//         name: "Ayush"
//     })

// }
// export function PUT(){
//     return Response.json({
//         email:"Ayush@gmail.com",
//         name: "Ayush"
//     })
 
// }

import { NextRequest } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client";
import { DefaultDeserializer } from "v8";
import { Dawning_of_a_New_Day } from "next/font/google"

const client = new PrismaClient();

export async function POST(req: NextRequest){
    const body= await req.json();
    await client.user.create({
        data:{
            username : body.name,
            password: body.password
        }
    })

    return Response.json({
        message: "You are logged in"
    })
}