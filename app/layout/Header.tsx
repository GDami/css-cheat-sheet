import { PropsWithChildren } from "react";

const styles = {
    title: "text-3xl font-bold mb-2",
}

export default function Header({ children }: PropsWithChildren) {
    return (
        <header className="border">
            <div className="border flex flex-col items-center justify-center m-4">
                <h1 className={styles.title}>CSS Playground</h1>
                <p>CSS Cheat Sheet with visual examples !</p>
            </div>
            <div className="border">
                { children }
            </div>
        </header>
    )
}