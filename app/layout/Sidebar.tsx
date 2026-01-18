export default function Sidebar() {
    return (
        <aside className="menus sticky top-0 left-0 w-xs border-r-8 p-4 overflow-auto">
            <nav className="flex flex-col gap-4">
                <a href="#introduction" className="text-gray-700 hover:text-black">Introduction</a>
            </nav>
        </aside>
    )
}