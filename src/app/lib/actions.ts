'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
const bcrypt = require('bcrypt');

const FormSchema = z.object({
    id: z.string(),
    name: z.string(),
    lastName: z.string(),
    email: z.string(),
    country: z.string(),
    password: z.string(),
    nickname: z.string(),
    dataBirthday: z.string(),
    status: z.enum(['masculino', 'femenino', 'otro']),
});
const CreateUser = FormSchema.omit({ id: true });

export async function createUser(forData: FormData) {
    const { name, lastName, email, country, password, nickname, dataBirthday, status } = CreateUser.parse({
        name: forData.get('name'),
        lastName: forData.get('last-name'),
        email: forData.get('email'),
        country: forData.get('country'),
        password: forData.get('password'),
        nickname: forData.get('nickname'),
        dataBirthday: forData.get('data-birthday'),
        status: forData.get('status')
    })

    const hashedPassword = await bcrypt.hash(password, 10);
    const date: Date = new Date(dataBirthday);
    const birthday = date.toISOString().split('T')[0];
    await sql`
    INSERT INTO users (name,last_name,email,country,password,nickname,birthday,gender)
    VALUES (${name}, ${lastName}, ${email}, ${country},${hashedPassword},${nickname},${birthday},${status})
  `;

}