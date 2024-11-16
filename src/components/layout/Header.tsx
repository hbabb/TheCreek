'use client';

import { usePathname } from "next/navigation";
import { navConfig } from "@/config/navConfig";
import { NavItem } from "@/components/layout/NavItem";
// import { NavButton } from "@/components/layout/NavButton";
import { ModeToggle } from "@/components/layout/ModeToggle";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils"

interface HeaderProps {
    className?: string;
}

export function Header ({ className }: HeaderProps) {
    const pathname = usePathname();

    return (
        <header className={cn(
            "flex-none animate-slide h-16 p-2 sticky top-0 z-50 w-full md:w-4/5 mx-auto text-creek-blue dark:text-creek-white md:border-b border-creek-blue dark:border-creek-white",
            className
        )}>
            <div className="flex h-12 text-2xl items-center justify-between w-full mx-auto">
                {/* LEFT SIDE - HOME FROM NAVCONFIG */}
                <div className="hidden md:block">
                    <NavItem
                        href={navConfig[0].href}
                        label={navConfig[0].label}
                        icon={navConfig[0].icon}
                        className="flex justify-center items-center font-allura font-semibold text-2xl gap-2 ml-0"
                    />
                </div>
                {/* CENTER-RIGHT - REST OF NAV */}
                <div className="flex items-center justify-between w-2/3">
                    {/* Desktop Navigation */}
                    <nav className="hidden ml-auto md:flex items-center gap-1 md:gap-4 lg:gap-6 xl:gap-8">
                        {navConfig.slice(1).map((item) => (
                            item.children ? (
                            <DropdownMenu key={item.href}>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="flex items-center gap-2">
                                        <item.icon className="w-6 h-6" />
                                        {item.label}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent 
                                    align="end"
                                    className="bg-background text-creek-blue dark:text-creek-white"
                                >
                                    {item.children.map((child) => (
                                        <DropdownMenuItem key={child.href} asChild>
                                            <Link href={child.href}>
                                                <child.icon className="w-8 h-8 mr-2" />
                                                <span>
                                                    {child.label}
                                                </span>
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                            ) : (
                            <NavItem
                                key={item.href}
                                href={item.href}
                                label={item.label}
                                icon={item.icon}
                                active={pathname === item.href}
                            />
                            )
                        ))}
                        <ModeToggle />
                    </nav>

                    {/* Mobile Navigation */}
                    <nav className="flex w-full justify-between md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-52">
                                {/* Mobile shows all nav items including home */}
                                {navConfig.map((item) => (
                                    item.children ? (
                                        item.children.map((child) => (
                                            <DropdownMenuItem key={child.href}>
                                                <Link href={child.href}>
                                                    <child.icon className="w-4 h-4 mr-2" />
                                                    <span>{child.label}</span>
                                                </Link>
                                            </DropdownMenuItem>
                                        ))
                                    ) : (
                                        <DropdownMenuItem key={item.href} asChild>
                                            <Link href={item.href}>
                                                <item.icon className="w-4 h-4 mr-2" />
                                                <span>{item.label}</span>
                                            </Link>
                                        </DropdownMenuItem>
                                    )
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
};