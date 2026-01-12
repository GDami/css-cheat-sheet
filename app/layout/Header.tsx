import { PropsWithChildren } from "react";

const styles = {
    title: "text-3xl font-bold mb-2",
}

export default function Header({ children }: PropsWithChildren) {
    return (
        <header className="sticky top-0 border-b-20 border-paper-solid bg-white/80 backdrop-blur-xs">
            <div className="flex flex-col items-center justify-center m-4">
                <h1 className={styles.title}>CSS Playground</h1>
                <p>CSS Cheat Sheet with visual examples !</p>
            </div>
            <div>
                { children }
            </div>
        </header>
    )
}