import { PropsWithChildren } from "react";

export default function Header({ children }: PropsWithChildren) {
    return (
        <header>
            <div>
                <h1>CSS Playground</h1>
                <p>CSS Cheat Sheet with visual examples !</p>
            </div>
            <div>
                { children }
            </div>
        </header>
    )
}