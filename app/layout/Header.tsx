const styles = {
    title: "text-2xl font-bold",
    subtitle: "pb-0.25",
}

export default function Header() {
    return (
        <header className="menus w-full top-0 shadow-2xl shadow-black border-b-8">
            <div className="flex px-6 py-2 gap-4 items-end">
                <h1 className={styles.title}>CSS Playground</h1>
                <p className={styles.subtitle}>CSS Cheat Sheet with visual examples !</p>
            </div>
        </header>
    )
}