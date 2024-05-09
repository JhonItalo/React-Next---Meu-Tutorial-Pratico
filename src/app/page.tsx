import CssModule from "@/next 14/css modules/Example";
import Tailwind from "@/next 14/tailwind/Example";

export default function Home() {

    return (
        <>
            <Tailwind />
            <CssModule></CssModule>
            {/*      <main className="w-4/5 h-screen flex justify-center items-center flex-col">
                <h1 className="font-semibold text-xl">Página estática sem dados</h1>
                <h2 className="font-medium text-lg">Exemplos práticos de Next 14 e React 18</h2>
            </main> */}
        </>
    );
}
