
export function InputEmail() {
    return (
        <div className="relative">
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Escribe tu email"
                required
            />
        </div>
    );
}
export function InputPassword() {
    return (
        <div className="relative">
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Escribe tu contraseña"
                required
                minLength={6}
            />
        </div>

    );
}

// function LoginButton() {
//     return (
//         // <Button className="mt-4 w-full">
//         // </Button>
//     );
// }