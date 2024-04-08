import SideNav from '@/app/ui/view/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <body className='bg-red-400'>

            <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                <div className="w-full flex-none md:w-64">
                    <SideNav />
                </div>
                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
            </div>
        </body>

    );
}