import { PropsWithChildren } from "react";

type VisualExampleProps = PropsWithChildren & {
    title: string;
    description: string;
}

export default function VisualExample({ title, description, children }: VisualExampleProps) {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="mb-4">{description}</p>
            <div className="border p-4 bg-gray-100">
                {children}
            </div>
        </div>
    )
}
