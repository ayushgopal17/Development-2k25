// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
})

async function insertUserData(username:string,password:string,email:string) {
    await client.connect()
    const result = await client.query(`
       INSERT INTO users (username,password,email)
       VALUES ($1,$2,$3)`,[username,email,password]
    )
    console.log(result)
}

insertUserData("ayusfffh","34ff3","3f");