"use client"

import NavLink from "@/app/components/NavLink"
import {usePathname} from "next/navigation"
import { getAllCategories } from "@/app/lib/categories"
import type { Category } from "@/app/types"

export default function CategoriesNav() {
    const pathname = usePathname()
    const categories: Category[] = getAllCategories()
    return (
        <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">
            <ul className="flex px-4 py-3 space-x-4 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-3">
                <NavLink href="/3d-models" isActive = {pathname === "/3d-models"}>All</NavLink>
                {categories.map((item) => {
                    return (
                        <NavLink key = {item.slug} href = {`/3d-models/categories/${item.slug}`} isActive = {pathname === `/3d-models/categories/${item.slug}`}>{item.displayName}</NavLink>
                    )
                })}
            </ul>
        </nav>
    )
}