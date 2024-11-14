import { Header } from "@/components/layout/Header";

export default async function FELayout({
    children,
}: {
    children: React.ReactNode;
})  {
    return (
        <div className="min-h-screen flex flex-col w-full bg-creek-white dark:bg-creek-blue text-creek-blue dark:text-creek-white">
            <Header />
           <main className="flex-1 flex flex-col w-full min-h-full my-auto">  
                {children}
           </main>
        </div>
    )
}