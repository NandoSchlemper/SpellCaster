import { db } from "../drizzle.db";
import { InsertUser, users } from "../schemas/userSchemas";

const newUser: InsertUser = {
    name: 'Ricardo',
    email: 'ricardo@ricardo.com',
    password: 'securepassword123'
}

async function dbSeeding(user: InsertUser) {
    await db.insert(users).values(user)
}

dbSeeding(newUser)
    .then(() => {
        console.log("Tudo certinho")
        process.exit(1)
    })
    .catch(() => {
        console.log("Seeding deu merda...")
    })