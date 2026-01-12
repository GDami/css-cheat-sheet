import { PropsWithChildren, ReactNode } from "react";

const inlineColors = {
    blue: "bg-blue-50 border-blue-200 hover:border-blue-300",
    red: "bg-red-50 border-red-200 hover:border-red-300",
}

type VisualExampleProps = PropsWithChildren & {
    title: string,
    description: string,
    code: string,
    color: keyof typeof inlineColors,
}

export default function VisualExample({ title, description, children, code, color = "blue" }: VisualExampleProps) {
    return (
        <div className={`border-paper-solid hover:border-red hover:shadow-lg p-6 border-2 flex flex-col gap-4 rounded-2xl transition-all`}>
            <div>
                <h3 className="text-lg">{title}</h3>
                <span className="text-sm text-gray-600">{description}</span>
            </div>
            <div className="border-2 border-dashed border-gray-200 bg-white rounded-xl p-4">
                {children}
            </div>
            <pre className="bg-gray-900/90 text-white p-4 rounded-xl text-sm">
                <code>{code}</code>
            </pre>
        </div>
    )
}
