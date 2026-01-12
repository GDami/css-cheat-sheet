import VisualExample from "./components/VisualExample";
import Header from "./layout/Header";

const styles = {
    exampleBox: "rounded-lg",
}

export default function Home() {
    return (
        <div>
            <Header></Header>
            <main>
                <section id="Spacing" className="mt-8">
                    <div className="grid grid-cols-2 gap-4">
                        <VisualExample title="Margin" description="The margin property sets the margin area on all four sides of an element.">
                            <div className={` ${styles.exampleBox} bg-blue-500 m-8 p-4 text-white`}>
                                This box has a margin of 32 pixels.
                            </div>
                        </VisualExample>
                        <VisualExample title="Padding" description="The padding property sets the padding area on all four sides of an element.">
                            <div className={` ${styles.exampleBox} bg-green-500 p-8 text-white`}>
                                This box has a padding of 32 pixels.
                            </div>
                        </VisualExample>
                    </div>
                </section>
                <section id="Typography" className="mt-8">
                    <div className="grid grid-cols-2 gap-4">
                        <VisualExample title="Font Size" description="The font-size property sets the size of the font.">
                            <div className={` ${styles.exampleBox} bg-red-500 text-white text-xl p-4`}>
                                This text has a font size of 1.25rem.
                            </div>
                        </VisualExample>
                        <VisualExample title="Line Height" description="The line-height property sets the height of a line box.">
                            <div className={` ${styles.exampleBox} bg-purple-500 text-white leading-1.5 p-4`}>
                                This text has a line height of 1.5.
                            </div>
                        </VisualExample>
                    </div>
                </section>
            </main>
        </div>
    );
}
