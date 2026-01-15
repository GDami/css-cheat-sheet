import { PropsWithChildren } from "react";

const styles = {
    title: "text-3xl font-bold mb-2",
}

export default function Header({ children }: PropsWithChildren) {
    return (
        <header className="paper rounded-xl max-w-5xl w-full my-20 top-0 shadow-2xl shadow-black">
            <div className="flex flex-col items-center justify-center p-4">
                <h1 className={styles.title}>CSS Playground</h1>
                <p>CSS Cheat Sheet with visual examples !</p>
            </div>
            <div>
                { children }
            </div>
        </header>
    )
}