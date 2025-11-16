import type { ReactNode } from "react"
import CategoriesNav from "@/app/components/CategoriesNav"

export default function ModelsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      {/* Responsive Navigation */}
      <aside className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
        <div className="relative">
          <CategoriesNav />
          {/* Fading edge/gradient for horizontal scroll hint on mobile */}
          <div className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-gradient-to-l from-white to-transparent md:hidden" />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  )
}