"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: "Home", href: "/home" },
    {
        name: "Invoices",
        href: "/dashboard/invoices",
    },
    { name: "Customers", href: "/dashboard/customers" },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex h-[48px] grow items-center text-white justify-center gap-2 rounded-md  p-2 text-sm font-medium hover:bg-sky-100 hover:text-gray-600 md:p-2 md:px-2 ",
                            {
                                "bg-sky-300 text-blue-600": pathname === link.href,
                            }
                        )}
                    >
                        <p >{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
