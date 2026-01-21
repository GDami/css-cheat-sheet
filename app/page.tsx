import VisualExample from "./components/VisualExample";


export default function Home() {
    return (
        <div className="wood w-full bg-paper text-wood overflow-auto">
            <div className="flex justify-center">
                <div className="z-1 relative m-8 w-full shadow-2xl shadow-black">
                    <div className="undersheet shifted-3 rounded-xl shadow-lg shadow-black"></div>
                    <div className="undersheet shifted-2 rounded-xl shadow-lg shadow-black"></div>
                    <div className="undersheet shifted-1 rounded-xl shadow-lg shadow-black"></div>
                    <div className="paper rounded-xl text-gray-900 px-8 border-paper-solid flex flex-col gap-8 py-8 shadow-lg shadow-black">
                        <section id="Spacing" className="flex flex-col gap-8">
                            <h2>Spacing</h2>
                            {/* TODO : right/left/x/y */}
                            <div className="grid grid-cols-2 gap-8">
                                <VisualExample
                                    title="Margin"
                                    description="The margin property sets the margin area on all four sides of an element."
                                    code={`margin: 32px;`}
                                    color="blue">
                                    <div className="rounded-lg bg-blue-500 m-[32px] text-white">
                                        This box has a margin of 32 pixels.
                                    </div>
                                </VisualExample>
                                <VisualExample
                                    title="Padding"
                                    description="The padding property sets the padding area on all four sides of an element."
                                    code={`padding: 32px;`}
                                    color="blue">
                                    <div className="rounded-lg bg-green-500 p-[32px] text-white">
                                        This box has a padding of 32 pixels.
                                    </div>
                                </VisualExample>
                            </div>
                        </section>
                        <section id="Typography" className="flex flex-col gap-8">
                            <h2>Typography</h2>
                            <div className="grid grid-cols-2 gap-8">
                                <VisualExample
                                    title="Font Size"
                                    description="The font-size property sets the size of the font."
                                    code={`font-size: 1.25rem;`}
                                    color="red">
                                    <div className={"rounded-lg bg-red-500 text-white text-[1.25rem] p-4"}>
                                        This text has a font size of 1.25rem.
                                    </div>
                                </VisualExample>
                                <VisualExample
                                    title="Line Height"
                                    description="The line-height property sets the height of a line box."
                                    code={`line-height: 1.5;`}
                                    color="red">
                                    <div className="rounded-lg bg-purple-500 text-white leading-[1.5] p-4">
                                        This text has a line height of 1.5.
                                    </div>
                                </VisualExample>
                            </div>
                        </section>
                        <section id="Typography" className="flex flex-col gap-8">
                            <h2>Typography</h2>
                            <div className="grid grid-cols-2 gap-8">
                                <VisualExample
                                    title="Font Size"
                                    description="The font-size property sets the size of the font."
                                    code={`font-size: 1.25rem;`}
                                    color="red">
                                    <div className="rounded-lg bg-red-500 text-white text-[1.25rem] p-4">
                                        This text has a font size of 1.25rem.
                                    </div>
                                </VisualExample>
                                <VisualExample
                                    title="Line Height"
                                    description="The line-height property sets the height of a line box."
                                    code={`line-height: 1.5;`}
                                    color="red">
                                <div className="rounded-lg bg-purple-500 text-white leading-[1.5] p-4">
                                    This text has a line height of 1.5.
                                </div>
                            </VisualExample>
                        </div>
                    </section>
                    <section id="Typography" className="flex flex-col gap-8">
                        <h2>Typography</h2>
                        <div className="grid grid-cols-2 gap-8">
                            <VisualExample
                                title="Font Size"
                                description="The font-size property sets the size of the font."
                                code={`font-size: 1.25rem;`}
                                color="red">
                                <div className="rounded-lg bg-red-500 text-white text-[1.25rem] p-4">
                                    This text has a font size of 1.25rem.
                                </div>
                            </VisualExample>
                            <VisualExample
                                title="Line Height"
                                description="The line-height property sets the height of a line box."
                                code={`line-height: 1.5;`}
                                color="red">
                                <div className="rounded-lg bg-purple-500 text-white leading-[1.5] p-4">
                                    This text has a line height of 1.5.
                                </div>
                            </VisualExample>
                        </div>
                    </section>
                </div>
                </div>
            </div>
        </div>
    );
}
