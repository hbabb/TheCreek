/* @typescript-eslint/no-unused-vars */
import {
    Home,
    Church,
    PenTool,
    Calendar,
    UserPlus,
    MessageCircle,
    Heart,
    Users,
    User,
    UserCircle,
    Baby,
    Contact,
    type LucideIcon
} from "lucide-react";
import { z } from "zod";

type NavItemType = {
    label: string;
    href: string;
    icon: LucideIcon;
    children?: NavItemType[];
    description?: string;
}

export const NavItemSchema: z.ZodType<NavItemType> = z.lazy(() =>
    z.object({
        label: z.string(),
        href: z.string(),
        icon: z.custom<LucideIcon>((data) => true),
        children: z.array(NavItemSchema).optional(),
        description: z.string().optional(),
    })
);

export type NavItem = z.infer<typeof NavItemSchema>;

export const navConfig: NavItem[] = [
    {
        label: "Motlow Creek Baptist Church",
        href: "/",
        icon: Home,
        description: "Return to home page"
    },
    {
        label: "About",
        href: "/about",
        icon: Church,
        description: "Learn more about us",
        children: [
            {
                label: "Missions",
                href: "/about/missions",
                icon: Heart,
                description: "Learn more about our missions"
            },
            {
                label: "Staff",
                href: "/about/staff",
                icon: Users,
                description: "Learn more about our staff"
            },
        ]
    },
    {
        label: "Blog",
        href: "/blog",
        icon: PenTool,
        description: "Read our blog"
    },
    {
        label: "Events",
        href: "/events",
        icon: Calendar,
        description: "View upcoming events"
    },
    {
        label: "Groups",
        href: "/groups",
        icon: UserPlus,
        description: "Learn more about our groups",
        children: [
            {
                label: "Adults",
                href: "/groups/adult",
                icon: UserCircle,
                description: "Learn more about our adult classes"
            },
            {
                label: "Youth",
                href: "/groups/youth",
                icon: User,
                description: "Learn more about our youth group"
            },
            {
                label: "Children",
                href: "/groups/children",
                icon: Baby,
                description: "Learn more about our children's church"
            }
        ]
    },
    {
        label: "Prayer",
        href: "/prayer",
        icon: MessageCircle,
        description: "Submit a prayer request"
    },
    {
        label: "Contact",
        href: "/contact",
        icon: Contact,
        description: "Contact us"
    },
]