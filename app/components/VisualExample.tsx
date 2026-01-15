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
        <div className={`border-gray-500 bg-paper hover:bg-paper-solid hover:border-black hover:shadow-[2px_2px_black] p-3.75 border-2 flex flex-col gap-3.75 rounded-xl transition-all hover:-translate-x-0.5 hover:-translate-y-0.5`}>
            <div className="flex flex-col">
                <h3 className="text-lg">{title}</h3>
                <span className="text-sm leading-4 text-gray-600 min-h-8">{description}</span>
            </div>
            <div className="border-2 border-dashed border-gray-900 bg-white rounded-xl p-4 h-32">
                {children}
            </div>
            <pre className="bg-gray-900/90 text-white p-4 rounded-xl text-sm">
                <code className="text-normal leading-8">{code}</code>
            </pre>
        </div>
    )
}
