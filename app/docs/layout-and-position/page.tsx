import VisualExample from "@/app/components/VisualExample";

export default function LayoutAndPosition() {
    return (
        <div>
            <section id="Spacing" className="flex flex-col gap-8">
                <h2>Spacing</h2>
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
    )
}