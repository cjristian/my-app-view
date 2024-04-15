import NavLinks from "@/app/ui/register/nav-links"
import LoginForm from "../ui/login/login-form";
export default function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-r from-orange-600 from-10% via-red-400 via-30% to-red-600 to-90% bg-opacity-50 flex-col items-center  p-24">
      <div className="flex min-h-full rounded-lg bg-gray-50 flex-col px-12 py-12 lg:px-16">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"> VIEW</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginForm />
          <p className="mt-10 text-center text-sm text-gray-500">
            ¿No estas registrado?
            <NavLinks />
          </p>
        </div>
      </div>
    </main>
  );
}
