import desktop from "@/public/printforge-desktop.svg"
import mobile from "@/public/printforge-mobile.svg"
import Link from "next/link"

export default function Header() {
    return (
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <div className="relative">
              <Link href="/">
                {/* Desktop logo */}
                <img
                  src={desktop.src}
                  alt="PrintForge Logo"
                  className="w-[200px] h-auto hidden md:block"
                />
                {/* Mobile logo */}
                <img
                  src={mobile.src}
                  alt="PrintForge Logo"
                  className="w-[40px] h-auto block md:hidden"
                />
              </Link>
            </div>
            <ul className="flex items-center gap-2.5">
              <p><Link href="/3d-models">3D Models</Link></p>
              <p><Link href="/about">About</Link></p>
            </ul>
          </nav>
        </header>
    )
}