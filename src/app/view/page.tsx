export default function Page() {
    return (

        <div>
            <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-red-900">
                    Buscador
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm focus:ring-2 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
        </div>
    )
}