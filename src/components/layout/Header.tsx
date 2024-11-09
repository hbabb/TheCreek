import { ChurchIcon } from "lucide-react";
import Link from "next/link";

import { NavButton } from "@/components/layout/NavButton";
import { ModeToggle } from "@/components/layout/ModeToggle";

export function Header() {
    return (
        <header className="animate-slide h-12 p-2 border-b sticky top-0 z-20">

            <div className="flex h-8 items-center justify-between w-full text-creek-blue dark:text-creek-white">

                <div className="flex items-center gap-2">
                    
                    <NavButton
                        icon={ChurchIcon}
                        label="Home"
                        href="/"
                    />

                    <Link
                        href={"/"}
                        className="flex justify-center items-center gap-2 ml-0 font-allura text-2xl"
                    >
                        Motlow Creek Baptist Church
                    </Link>
                </div>

                <div className="flex items-center">

                    {/* Additional Nav Buttons */}

                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}