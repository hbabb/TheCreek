import { ChurchIcon, Send } from "lucide-react";
import Link from "next/link";

import { NavButton } from "@/components/layout/NavButton";
import { ModeToggle } from "@/components/layout/ModeToggle";
import { cn } from "@/lib/utils";

interface HeaderProps {
    className?: string;
}

export function Header({ className }: HeaderProps) {
    return (
        <header className={cn("flex-none animate-slide h-12 p-2 sticky top-0 z-50 w-4/5 mx-auto", className)}>

            <div className="flex h-8 items-center justify-between w-4/5 mx-auto text-creek-blue dark:text-creek-white border-b border-creek-blue dark:border-creek-white">

                <div className="flex items-center gap-2">
                    
                    <NavButton
                        icon={ChurchIcon}
                        label="Home"
                        href="/"
                    />

                    <Link
                        href={"/"}
                        className="flex justify-center items-center gap-2 ml-0"
                        title="Home"
                    >
                        <h1 className="hidden sm:block text-2xl font-semibold tracking-wider m-0 mt-1 font-allura">
                            Motlow Creek Baptist Church
                        </h1>
                        
                    </Link>
                </div>

                <div className="flex items-center justify-between w-1/3">

                    {/* Additional Nav Buttons */}
                    <div className="flex items-center gap-2">
                    
                    <NavButton
                        icon={Send}
                        label="Contact"
                        href="/contact"
                    />

                    <Link
                        href={"/contact"}
                        className="flex justify-center items-center gap-2 ml-0"
                        title="Contact"
                    >
                        <h1 className="hidden sm:block text-2xl m-0 mt-1 font-roboto">
                            Contact
                        </h1>
                        
                    </Link>
                </div>

                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}