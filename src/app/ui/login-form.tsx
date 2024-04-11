import {
    AtSymbolIcon,
    KeyIcon,
} from '@heroicons/react/24/outline';
export default function LoginForm() {
    return (
        <form className="space-y-6" action="#" method="POST">
            <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Email </label>
                <div className="relative">
                    <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Escribe tu email"
                        required
                    />
                    <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-red-600 hover:text-red-400"> ¿Olvidaste tu contraseña?</a>
                    </div>
                </div>
                <div className="relative">
                    <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Escribe tu constraseña"
                        required
                        minLength={6}
                    />
                    <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
            </div>

            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
        </form>
    )
}