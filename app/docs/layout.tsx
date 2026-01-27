import { PropsWithChildren } from "react";

export default function DocsLayout({ children }: PropsWithChildren) {
    return (
        
        <div className="wood w-full bg-paper text-wood overflow-auto">
            <div className="flex justify-center">
                <div className="z-1 relative max-w-5xl m-8 w-full shadow-2xl shadow-black">
                    <div className="undersheet shifted-3 rounded-xl shadow-lg shadow-black"></div>
                    <div className="undersheet shifted-2 rounded-xl shadow-lg shadow-black"></div>
                    <div className="undersheet shifted-1 rounded-xl shadow-lg shadow-black"></div>
                    <div className="paper rounded-xl text-gray-900 px-8 border-paper-solid flex flex-col gap-8 py-8 shadow-lg shadow-black">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}