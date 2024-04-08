'use client'
import Link from "next/link"
export default function LinkRegister() {
    return (
        <>
            <Link className="text-red-600 hover:text-red-400" key={'Register'} href={'/register'}>
                Registrate
            </Link>

        </>
    )
}