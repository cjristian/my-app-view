import Link from 'next/link';
import Image from 'next/image';
export default function SideNav() {
    const prueba = [
        {
            name: "Ana Maria",
            last_name: "Jimenez",
            nickname: "Anamaria_23",
            birthday: "23 de octubre del 2002",
            country: "España"

        }

    ]
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <div className="mb-2 flex h-20 place-items-center rounded-md bg-red-600  md:h-40" >
                <div className="m-auto md:w-40 text-slate-50 text-center">
                    <Image
                        src={"/foto-perfil.jpg"}
                        width={300}
                        height={300}
                        className='block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"'
                        alt='Foto perfil Principal'
                    >
                    </Image>
                    <p>{`${prueba[0].name} ${prueba[0].last_name}`}</p>
                </div>
            </div>
            <div className="flex grow flex-row justify-between bg-white space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                {prueba.map((prueba) => {
                    return (
                        <div className='m-4'>
                            <h1>Nickname</h1>
                            <p>{prueba.nickname}</p>
                            <h1>Fecha de nacimiento</h1>
                            <p>{prueba.birthday}</p>
                            <h1>Country</h1>
                            <p>{prueba.country}</p>
                        </div>

                    );
                })}


                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <form>
                    <Link className={"flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-100 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3"}
                        href={'/'}
                    >
                        Cerrar sesion
                    </Link>
                </form>
            </div>
        </div>
    );
}
