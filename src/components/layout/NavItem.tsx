import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface NavItemProps extends ComponentPropsWithoutRef<typeof Link> {
    icon: LucideIcon;
    label: string;
    active?: boolean;
    description?: string;
}

export const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
    ({ icon: Icon, label, active, className, description, ...props }, ref) => {
        return (
            <Link
                ref={ref}
                className={cn(
                    "inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md",
                    "hover:bg-accent hover:text-accent-foreground",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    active && "bg-accent text-accent-foreground",
                    className
                )}
                aria-description="{description}"
                {...props}
            >
                <Icon className="h-6 w-6" />
                <span>{label}</span>
            </Link>
        );
    }
);

NavItem.displayName = "NavItem";