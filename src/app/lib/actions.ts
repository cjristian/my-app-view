'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
const bcrypt = require('bcrypt');
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { countries } from "@/app/lib/definitions";
import { signIn } from '../../../auth';
import { AuthError } from 'next-auth';


// Register
export type State = {
    errors?: {
        name?: string[];
        lastName?: string[];
        email?: string[];
        country?: string[];
        password?: string[];
        nickname?: string[];
        dataBirthday?: string[];
        status?: string[];
    };
    message?: string | null;
};


const FormSchema = z.object({
    id: z.string(),
    name: z.string().min(3, {
        message: "Nombre de al menos 3 caracteres"
    }),
    lastName: z.string().min(3, {
        message: 'Escribe tus apellidos',
    }),
    email: z.string().email({
        message: 'Escribe un correo válido',
    }),
    country: z.string().nullish()
    ,
    password: z.string().min(6, {
        message: 'Introduce una combinación de al menos seis números, letras y signos',
    }),
    nickname: z.string().min(3, {
        message: 'Nickname de al menos 3 caracteres',
    }),
    dataBirthday: z.string().refine(dob => new Date(dob).toString() !== "Invalid Date", {
        message: 'Asegúrate que usas tu verdadera fecha de nacimiento',
    }),
    status: z.enum(['masculino', 'femenino', 'otro'], {
        invalid_type_error: 'Selecciona una opción',
    }),
});

const CreateUser = FormSchema.omit({ id: true });

export async function createUser(prevState: State, forData: FormData): Promise<State> {
    const validatedFields = CreateUser.safeParse({
        name: forData.get('name'),
        lastName: forData.get('last-name'),
        email: forData.get('email'),
        country: forData.get('country'),
        password: forData.get('password'),
        nickname: forData.get('nickname'),
        dataBirthday: forData.get('data-birthday'),
        status: forData.get('status')
    })
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create User.',
        };
    }

    const { name, lastName, email, country, password, nickname, dataBirthday, status } = validatedFields.data;


    const selectedCountry = countries.find(c => c.id === Number(country));
    const hashedPassword = await bcrypt.hash(password, 10);
    const date: Date = new Date(dataBirthday);
    const birthday = date.toISOString().split('T')[0];

    try {

        await sql`
        INSERT INTO users (name,last_name,email,country,password,nickname,birthday,gender)
        VALUES (${name}, ${lastName}, ${email}, ${selectedCountry?.name},${hashedPassword},${nickname},${birthday},${status})
        `;
    } catch (error) {
        return {
            message: 'Error en la base de datos: Fallo en la creacion de Usuario '
        }
    }
    revalidatePath('/dashboard/invoices');
    redirect('/login');



}

//Authenticate login

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Correo o contraseña incorrecta';
                default:
                    return 'Algo salio mal.';
            }
        }
        throw error;
    }
}
