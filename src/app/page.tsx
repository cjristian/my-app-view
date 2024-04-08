import { InputEmail, InputPassword } from "./ui/register/index"
import NavLinks from "@/app/ui/register/nav-links"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"> VIEW</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Email </label>
              <div className="mt-2">
                {<InputEmail />}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">Contraseña </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-red-600 hover:text-red-400">¿Olvidaste tu contraseña?</a>
                </div>
              </div>
              <div className="mt-2">
                <InputPassword />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿No estas registrado?
            <NavLinks />
          </p>
        </div>
      </div>
    </main>
  );
}
