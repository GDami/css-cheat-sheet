import VisualExample from "./components/VisualExample";
import Header from "./layout/Header";

import "./styles/page.css";



const inlineStyles = {
    exampleBox: "rounded-lg",
    section: "my-8 flex flex-col gap-8",
    sectionGrid: "grid grid-cols-2 gap-8",
}

export default function Home() {
    return (
        <div className="wood bg-paper">
            <div className="flex flex-col items-center">
                <Header></Header>
                <main className="paper rounded-xl max-w-5xl text-gray-900 px-8 border-paper-solid shadow-2xl shadow-black mb-20">
                    <section id="Spacing" className={inlineStyles.section}>
                        <h2>Spacing</h2>
                        {/* TODO : right/left/x/y */}
                        <div className={inlineStyles.sectionGrid}>
                            <VisualExample
                                title="Margin"
                                description="The margin property sets the margin area on all four sides of an element."
                                code={`margin: 32px;`}
                                color="blue">
                                <div className={` ${inlineStyles.exampleBox} bg-blue-500 m-[32px] text-white`}>
                                    This box has a margin of 32 pixels.
                                </div>
                            </VisualExample>
                            <VisualExample
                                title="Padding"
                                description="The padding property sets the padding area on all four sides of an element."
                                code={`padding: 32px;`}
                                color="blue">
                                <div className={` ${inlineStyles.exampleBox} bg-green-500 p-[32px] text-white`}>
                                    This box has a padding of 32 pixels.
                                </div>
                            </VisualExample>
                        </div>
                    </section>
                    <section id="Typography" className={inlineStyles.section}>
                        <h2>Typography</h2>
                        <div className={inlineStyles.sectionGrid}>
                            <VisualExample
                                title="Font Size"
                                description="The font-size property sets the size of the font."
                                code={`font-size: 1.25rem;`}
                                color="red">
                                <div className={` ${inlineStyles.exampleBox} bg-red-500 text-white text-[1.25rem] p-4`}>
                                    This text has a font size of 1.25rem.
                                </div>
                            </VisualExample>
                            <VisualExample
                                title="Line Height"
                                description="The line-height property sets the height of a line box."
                                code={`line-height: 1.5;`}
                                color="red">
                                <div className={` ${inlineStyles.exampleBox} bg-purple-500 text-white leading-[1.5] p-4`}>
                                    This text has a line height of 1.5.
                                </div>
                            </VisualExample>
                        </div>
                    </section>
                    <section id="Typography" className={inlineStyles.section}>
                        <h2>Typography</h2>
                        <div className={inlineStyles.sectionGrid}>
                            <VisualExample
                                title="Font Size"
                                description="The font-size property sets the size of the font."
                                code={`font-size: 1.25rem;`}
                                color="red">
                                <div className={` ${inlineStyles.exampleBox} bg-red-500 text-white text-[1.25rem] p-4`}>
                                    This text has a font size of 1.25rem.
                                </div>
                            </VisualExample>
                            <VisualExample
                                title="Line Height"
                                description="The line-height property sets the height of a line box."
                                code={`line-height: 1.5;`}
                                color="red">
                                <div className={` ${inlineStyles.exampleBox} bg-purple-500 text-white leading-[1.5] p-4`}>
                                    This text has a line height of 1.5.
                                </div>
                            </VisualExample>
                        </div>
                    </section>
                    <section id="Typography" className={inlineStyles.section}>
                        <h2>Typography</h2>
                        <div className={inlineStyles.sectionGrid}>
                            <VisualExample
                                title="Font Size"
                                description="The font-size property sets the size of the font."
                                code={`font-size: 1.25rem;`}
                                color="red">
                                <div className={` ${inlineStyles.exampleBox} bg-red-500 text-white text-[1.25rem] p-4`}>
                                    This text has a font size of 1.25rem.
                                </div>
                            </VisualExample>
                            <VisualExample
                                title="Line Height"
                                description="The line-height property sets the height of a line box."
                                code={`line-height: 1.5;`}
                                color="red">
                                <div className={` ${inlineStyles.exampleBox} bg-purple-500 text-white leading-[1.5] p-4`}>
                                    This text has a line height of 1.5.
                                </div>
                            </VisualExample>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
