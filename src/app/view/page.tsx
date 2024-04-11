import Search from "../ui/search";

export default function Page() {
    return (

        <div>
            <div className="col-span-full">
                <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                    <Search placeholder="Busca amigos..." />

                </div>
            </div>
        </div>
    )
}