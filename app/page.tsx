import VisualExample from "./components/VisualExample";
import Header from "./layout/Header";

export default function Home() {
  return (
    <div>
        <Header></Header>
        <main>
            <section id="Spacing">
                <div className="grid grid-cols-2 gap-4">
                    <VisualExample title="Margin" description="The margin property sets the margin area on all four sides of an element.">
                        <div className="bg-blue-500 m-8 p-4 text-white">
                            This box has a margin of 8 units.
                        </div>
                    </VisualExample>
                    <VisualExample title="Padding" description="The padding property sets the padding area on all four sides of an element.">
                        <div className="bg-green-500 p-8 text-white">
                            This box has a padding of 8 units.
                        </div>
                    </VisualExample>
                </div>
            </section>
        </main>
    </div>
  );
}
