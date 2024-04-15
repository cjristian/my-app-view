'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className=" content-center h-screen bg-gradient-to-r from-red-600 from-30% via-gray-200 via-90%  p-24">
            <div className="rounded-md bg-gray-50 text-center p-4 md:p-6">
                <h2 className="text-center  text-xl">!Algo ha salido mal!</h2>
                <button
                    className="mt-4  rounded-md bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-gray-400"
                    onClick={
                        //Reinicia la pagina principal, en este caso es el de register
                        () => reset()
                    }
                >
                    Intentalo de nuevo
                </button>
            </div>
        </div>
    );
}