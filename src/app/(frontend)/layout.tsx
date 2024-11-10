// import { Header } from "@/components/layout/Header";

export default async function FELayout({
    children,
}: {
    children: React.ReactNode;
})  {
    return (
        <div className="min-h-screen text-creek-gray dark:text-creek-white bg-creek-white dark:bg-slate-800">
            {/* <Header /> */}
                {children}
        </div>
    )
}