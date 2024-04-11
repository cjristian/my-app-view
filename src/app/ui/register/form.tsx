import { createUser } from "@/app/lib/actions";
import {  countries } from "@/app/lib/definitions";
import Link from "next/link";

export default function Form() {

    return (
        <form action={createUser}>
            <div className="rounded-md bg-gray-50 text-center p-4 md:p-6">
                <h1 className="text-base font-semibold leading-7 text-4xl text-red-600">Registrate</h1>
                <p className="mt-5 text-2xl leading-6 text-gray-600">Es rápido y fácil ;)</p>

                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Nombre
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-red-900">
                                Apellidos
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-red-900">
                                Correo Electrónico
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 "
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-red-900">
                                Pais
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Selecciona tu pais
                                    </option>
                                    {countries.map((countries) => (
                                        <option key={countries.id} value={countries.id}>
                                            {countries.name}
                                        </option>
                                    ))}

                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-red-900">
                                Contraseña
                            </label>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="nickname" className="block text-sm font-medium leading-6 text-red-900">
                                Nombre de usuario
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="nickname"
                                    id="nickname"
                                    autoComplete="nickname"
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="data-birthday" className="block text-sm font-medium leading-6 text-red-900">
                                Fecha de nacimiento
                            </label>
                            <div className="mt-2">
                                <input
                                    type="date"
                                    name="data-birthday"
                                    id="data-birthday"
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="genero" className="block text-sm font-medium leading-6 text-red-900">
                                Selecciona tu sexo
                            </label>
                            <div className="mt-2">
                                <div className="flex justify-center">
                                    <div className="flex items-center">
                                        <input
                                            id="masculino"
                                            name="status"
                                            type="radio"
                                            value="masculino"
                                            className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="masculino"
                                            className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                        >
                                            Masculino
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="femenino"
                                            name="status"
                                            type="radio"
                                            value="femenino"
                                            className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="femenino"
                                            className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                        >
                                            Femenino
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="otro"
                                            name="status"
                                            type="radio"
                                            value="otro"
                                            className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="otro"
                                            className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                        >
                                            Otro
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <Link key={'Home'} href={'/'} className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500">
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Registrarte
                </button>


            </div>
        </form>
    )


}